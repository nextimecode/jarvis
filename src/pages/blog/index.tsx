import NextArticleList from '../../components/organisms/nextArticleList'
import NextLayout from '../../components/templates/nextLayout'
import { useGetPostsQuery } from '../../graphql/generated'

export default function Blog() {
  const { data } = useGetPostsQuery()
  return (
    <NextLayout>
      <NextArticleList posts={data?.posts} />
    </NextLayout>
  )
}
