import { Center, Spinner } from '@chakra-ui/react'
import { NextArticleList } from '../../components/organisms/NextArticleList2'
import { NextLayout } from '../../components/templates/NextLayout'
import { useGetPostsQuery, Post } from '../../graphql/generated'

export default function Blog() {
  const { data, loading } = useGetPostsQuery()
  const posts = data?.posts
  return (
    <NextLayout>
      {loading && (
        <Center height={'50vh'}>
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Center>
      )}
      {posts && <NextArticleList posts={posts as Post[]} />}
    </NextLayout>
  )
}
