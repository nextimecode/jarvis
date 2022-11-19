import React from 'react'
import {
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container
} from '@chakra-ui/react'
import Link from 'next/link'

interface IBlogTags {
  tags: Array<string> | undefined
  marginTop?: SpaceProps['marginTop']
}

export const BlogTags: React.FC<IBlogTags> = props => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags?.map(tag => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="purple" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  image: string
  date: Date
  name: string
  title: string
}

export const BlogAuthor: React.FC<BlogAuthorProps> = props => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image borderRadius="full" boxSize="40px" src={props.image} alt={`Avatar of ${props.name}`} />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text fontWeight="medium">{props.title}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

interface NextArticleListProps {
  posts: any
}

const NextArticleList = ({ posts }: NextArticleListProps) => {
  const bgGradient = useColorModeValue(
    'radial(orange.600 1px, transparent 1px)',
    'radial(orange.300 1px, transparent 1px)'
  )
  const color = useColorModeValue('gray.700', 'gray.200')
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Novidades</Heading>
      {posts?.map((post: any) => (
        <Box
          key={post?.id}
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
            >
              <Link
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: post?.slug }
                }}
              >
                <Image
                  borderRadius="lg"
                  src={post.coverImage?.url}
                  alt={`Imagem do blog ${post?.title}`}
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box bgGradient={bgGradient} backgroundSize="20px 20px" opacity="0.4" height="100%" />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}
          >
            <BlogTags tags={post?.tags} />
            <Heading marginTop="1">
              <Link
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: post.slug }
                }}
              >
                {post?.title}
              </Link>
            </Heading>
            <Text as="p" marginTop="2" color={color} fontSize="lg">
              {post?.excerpt}
            </Text>
            <BlogAuthor
              image={post?.author.picture?.url}
              name={post?.author.name}
              date={new Date(post?.date)}
              title={post?.author.title}
            />
          </Box>
        </Box>
      ))}
    </Container>
  )
}

export default NextArticleList
