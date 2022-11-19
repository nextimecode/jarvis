import NextArticleList from '../../components/organisms/nextArticleList'
import NextLayout from '../../components/templates/NextLayout'
import { useGetPostsQuery } from '../../graphql/generated'

export default function Blog() {
  const { data } = useGetPostsQuery()
  return (
    <NextLayout isLogged={false}>
      <NextArticleList posts={data?.posts} />
    </NextLayout>
  )
}
