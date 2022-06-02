import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'

export type NextHeroProps = {
  words: string
  title: string
  text: string
  textButton: string
  bg?: string
  url: string
}

const NextHero = ({ words, title, text, textButton, bg, url }: NextHeroProps) => {
  return (
    <header>
      <Container bg={bg} maxW="container.xl">
        <Stack minH={'100vh'} align={'center'} direction={{ base: 'column', md: 'row-reverse' }}>
          <Flex flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Text pt={4} color={'next-gray'} textAlign={{ base: 'center', md: 'left' }}>
                {words}
              </Text>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color={'next-light'} as={'span'}>
                  {'<h1>'}
                </Text>
                <Text color={'white'} as={'span'}>
                  {title}
                </Text>
                <Text color={'next-light'} as={'span'}>
                  {'<h1>'}
                </Text>
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
                {text}
              </Text>
              <Stack
                display={{ base: 'none', md: 'block' }}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
              >
                <Link href={`${url}%0A${textButton}`}>
                  <a target="_blank" rel="noreferrer">
                    <NextButton>{textButton}</NextButton>
                  </a>
                </Link>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={'Login Image'}
              src={'/images/home/code_hero.png'}
              width={550}
              height={550}
            />
          </Flex>
          <Box display={{ base: 'block', md: 'none' }} pt={6} pb={12}>
            <Link href={`${url}%0A${textButton}`}>
              <a target="_blank" rel="noreferrer">
                <NextButton>{textButton}</NextButton>
              </a>
            </Link>
          </Box>
        </Stack>
      </Container>
    </header>
  )
}

export default NextHero
