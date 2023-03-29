import { NextLayout } from '../../components/templates/NextLayout'
import { useGetPostsQuery } from '../../graphql/generated'
import { useRouter } from 'next/router'
import { Container, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { BlogAuthor, BlogTags } from '../../components/organisms/NextArticleList'
import { Prose } from '@nikolovlazar/chakra-ui-prose'

export default function Blog() {
  const { query } = useRouter()
  const { data } = useGetPostsQuery()

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
        {image && image.width && image.height && (
          <Image width={image.width} height={image.height} alt={post?.title} src={image.url} />
        )}
        <Heading pt={6}>{post?.title}</Heading>
        <Text textAlign={'center'}>{date.toLocaleDateString()}</Text>
        <Prose
          py={4}
          dangerouslySetInnerHTML={{
            __html: String(post?.content.html)
          }}
        ></Prose>
        {author && author.picture?.url && author.title && (
          <BlogAuthor
            image={author.picture?.url}
            name={author.name}
            date={new Date(post?.date)}
            title={author.title}
          />
        )}
        <Text pt={6} pb={2}>
          Marcadores
        </Text>
        <BlogTags tags={post?.tags} />
      </Container>
    </NextLayout>
  )
}
