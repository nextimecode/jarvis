import { GetStaticProps } from 'next'
import { NextArticleList } from '../../components/organisms/NextArticleList'
import { NextLayout } from '../../components/templates/NextLayout'
import { Post } from '../../graphql/generated'
import { client } from '../../lib/apollo'
import { gql } from 'graphql-tag'

export const getStaticProps: GetStaticProps = async (context) => {
  const GET_POSTS_QUERY = gql`
    query GetPosts {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        date
        tags
        excerpt
        author {
          id
          name
          picture {
            id
            url
          }
          title
        }
        coverImage {
          url
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
    props: data,
    revalidate: 60 * 60 * 1, // 1 hora
  }
}

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <NextLayout>
      {posts && <NextArticleList posts={posts as Post[]} />}
    </NextLayout>
  )
}
