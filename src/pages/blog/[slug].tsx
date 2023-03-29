import { NextLayout } from '../../components/templates/NextLayout'
import { Asset, useGetPostsQuery } from '../../graphql/generated'
import { useRouter } from 'next/router'
import { Box, Center, Container, Heading, Spinner, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { BlogAuthor, BlogTags } from '../../components/organisms/NextArticleList'
import { Prose } from '@nikolovlazar/chakra-ui-prose'

export default function Blog() {
  const { query } = useRouter()
  const { data, loading } = useGetPostsQuery()

  const posts = data?.posts
  const post = posts?.find(post => post.slug === query.slug)
  const date = new Date(post?.date)
  const image = post?.coverImage
  const author = post?.author
  const description = post?.excerpt ? post.excerpt : undefined

  return (
    <NextLayout
      title={post?.title}
      description={description}
      keywords={post?.seo?.keywords}
      socialImageUrl={image?.url}
    >
      <Container maxW="container.md" pb={6}>
        {loading && (
          <Center height={'50vh'}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}
        {image && image.width && image.height && (
          <Image width={image.width} height={image.height} alt={post?.title} src={image.url} />
        )}
        <Heading pt={6}>{post?.title}</Heading>
        <Text textAlign={'center'}>{date.toLocaleDateString()}</Text>
        <Prose
          dangerouslySetInnerHTML={{
            __html: String(post?.content.html)
          }}
        ></Prose>
        {author && author.picture && (
          <BlogAuthor
            image={author.picture as Asset}
            name={author.name}
            date={new Date(post?.date)}
            title={author.title as string}
          />
        )}
        {post && (
          <Box pt={6} pb={2}>
            <BlogTags tags={post.tags} />
          </Box>
        )}
      </Container>
    </NextLayout>
  )
}
