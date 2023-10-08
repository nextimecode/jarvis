import { GetStaticPaths, GetStaticProps } from 'next'
import { NextLayout } from '../../components/templates/NextLayout'
import { Asset, Post } from '../../graphql/generated'
import { client } from '../../lib/apollo'
import { Box, Container, Heading } from '@chakra-ui/react'
import {
  BlogAuthor,
  BlogTags,
} from '../../components/organisms/NextArticleList'
import { Prose } from '@nikolovlazar/chakra-ui-prose'
import { layout } from '../../data/'
import { gql } from 'graphql-tag'

export const getStaticPaths: GetStaticPaths = async () => {
  const GET_SLUGS_POSTS_QUERY = gql`
    query GetSlugsPosts {
      posts {
        slug
      }
    }
  `
  const { data } = await client.query({
    query: GET_SLUGS_POSTS_QUERY,
  })

  const paths = data.posts.map((post: Post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const GET_POSTS_QUERY = gql`
    query GetPost($slug: String!) {
      posts(orderBy: createdAt_DESC, where: { slug: $slug }) {
        id
        author {
          id
          name
          title
          picture {
            url
            height
            width
          }
        }
        createdAt
        date
        excerpt
        slug
        stage
        tags
        title
        updatedAt
        coverImage {
          id
          url
          height
          width
        }
        content {
          html
        }
        seo {
          description
          keywords
          id
        }
      }
    }
  `

  const slug = context.params?.slug
  const { data } = await client.query({
    query: GET_POSTS_QUERY,
    variables: { slug },
  })
  return {
    props: data?.posts[0],
    revalidate: 60 * 60 * 1,
  }
}

export default function Blog({
  date,
  coverImage,
  title,
  seo,
  content,
  author,
  tags,
  slug,
}: Post) {
  const dateBlog = new Date(date)

  return (
    <NextLayout
      title={`NeXTIME | ${title}`}
      description={seo?.description as string}
      keywords={seo?.keywords}
      pathname={`/news/${slug}`}
      socialImageUrl={coverImage?.url ?? layout.socialImageUrl}
    >
      <Container maxW="container.md" pb={6}>
        {/* {coverImage && coverImage.width && coverImage.height && (
          <Center>
            <Box width={736} height={350} overflow={'hidden'}>
              <Image
                width={coverImage.width}
                height={coverImage.height}
                alt={title}
                src={coverImage.url}
                priority
              />
            </Box>
          </Center>
        )} */}
        <Heading pt={6}>{title}</Heading>
        {author && author.picture && (
          <BlogAuthor
            image={author.picture as Asset}
            name={author.name}
            date={dateBlog}
            title={author.title as string}
          />
        )}
        {tags && (
          <Box pt={6} pb={2}>
            <BlogTags tags={tags} />
          </Box>
        )}
        {/* <Text textAlign={'center'}>{dateBlog.toLocaleDateString()}</Text> */}
        <Prose
          dangerouslySetInnerHTML={{
            __html: String(content?.html),
          }}
        ></Prose>
      </Container>
    </NextLayout>
  )
}
