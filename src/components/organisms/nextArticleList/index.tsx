import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  HStack,
  Tag,
  SpaceProps,
  useColorModeValue,
  Container,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import Link from 'next/link'
import { Post, Maybe, Asset } from '../../../graphql/generated'

interface IBlogTags {
  tags: Array<string> | undefined
  marginTop?: SpaceProps['marginTop']
}

export const BlogTags: React.FC<IBlogTags> = props => {
  return (
    <Wrap marginTop={props.marginTop}>
      {props.tags?.map(tag => {
        return (
          <WrapItem key={tag}>
            <Tag w={'100%'} size={'md'} variant="solid" bg="next-blue.900">
              {tag}
            </Tag>
          </WrapItem>
        )
      })}
    </Wrap>
  )
}

interface BlogAuthorProps {
  image?: Maybe<Asset>
  date: Date
  name: string
  title: string
}

export const BlogAuthor: React.FC<BlogAuthorProps> = props => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {props.image && (
        <Box boxSize="40px">
          <Image
            src={props.image.url}
            alt={`Avatar of ${props.name}`}
            width={props.image.width as number}
            height={props.image.height as number}
          />
        </Box>
      )}
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text fontWeight="medium">{props.title}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

export const NextArticleList = ({ posts }: { posts: Post[] }) => {
  const bgGradient = useColorModeValue(
    'radial(orange.600 1px, transparent 1px)',
    'radial(orange.300 1px, transparent 1px)'
  )
  const color = useColorModeValue('gray.400', 'gray.200')
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">Novidades</Heading>
      {posts?.map(post => (
        <Box
          key={post?.id}
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
            {post.coverImage && (
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
                  <Box borderRadius="lg">
                    <Image
                      style={{ objectFit: 'contain' }}
                      src={post.coverImage.url}
                      alt={`Imagem do blog ${post?.title}`}
                      width={post.coverImage.width as number}
                      height={post.coverImage.height as number}
                    />
                  </Box>
                </Link>
              </Box>
            )}
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
            pb={4}
          >
            <BlogTags tags={post?.tags} />
            <Heading marginTop="1" pt={1}>
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
            {post.author && (
              <BlogAuthor
                image={post.author.picture}
                name={post.author.name}
                date={new Date(post.date)}
                title={post.author.title as string}
              />
            )}
          </Box>
        </Box>
      ))}
    </Container>
  )
}
