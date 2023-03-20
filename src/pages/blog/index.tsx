import NextArticleList from '../../components/organisms/nextArticleList'
import NextLayout from '../../components/templates/nextLayout'
import { useGetPostsQuery } from '../../graphql/generated'

export default function Blog() {
  const { data } = useGetPostsQuery()
  const posts = data?.posts
  const invertedPosts = posts?.map((item, index) => posts[posts.length - index - 1])

  return (
    <NextLayout>
      <NextArticleList posts={invertedPosts} />
    </NextLayout>
  )
}
