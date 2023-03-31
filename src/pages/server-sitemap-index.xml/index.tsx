/* eslint-disable @typescript-eslint/no-empty-function */
import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export interface Post {
  slug: string
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/cldynp6zh1jo601ufc7z0bwe9/master?query=%7B%0A%20%20posts%20%7B%0A%20%20%20%20slug%0A%20%20%7D%0A%7D%0A',
  )
  const { data } = await response.json()

  const urls = data.posts?.map(
    (post: Post) => `https://www.nextime.com.br/blog/${post.slug}`,
  )

  return getServerSideSitemapIndexLegacy(ctx, urls)
}

export default function SitemapIndex() {}
