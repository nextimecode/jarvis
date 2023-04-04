// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { client } from '../../lib/apollo'
import gql from 'graphql-tag'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const GET_POSTS_QUERY = gql`
    query GetPosts {
      posts(orderBy: createdAt_DESC) {
        slug
        date
      }
    }
  `

  const { data } = await client.query({
    query: GET_POSTS_QUERY,
  })

  const posts = data.posts

  const fields = posts.map((post: { slug: string; date: string }) => {
    return {
      loc: `https://www.nextime.com.br/blog/${post.slug}`,
      lastMod: post.date,
    }
  })

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}
