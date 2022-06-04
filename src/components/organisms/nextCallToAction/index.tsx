import React from 'react'
import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'
import Link from 'next/link'
import Image from 'next/image'

export interface NextCallToActionProps {
  id?: string
  bg?: string
  title: string
  text: string
  textButton?: string
  image: string
  url: string
  width: string
  height: string
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
}

const NextCallToAction = ({
  id,
  bg,
  title,
  text,
  image,
  url,
  width,
  height,
  textButton = '< Faça um orçamento />',
  directionMd = 'row',
  directionBase = 'column'
}: NextCallToActionProps) => {
  return (
    <Container id={id} bg={bg} maxW="container.xl" pb={12}>
      <Stack align={'center'} direction={{ base: directionBase, md: directionMd }}>
        <Flex flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Text
              lineHeight={1.33}
              fontWeight={600}
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            >
              {title}
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
              {text}
            </Text>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href={url}>
                <a rel="noreferrer">
                  <NextButton variant="outline">{textButton}</NextButton>
                </a>
              </Link>
            </Box>
          </Stack>
        </Flex>
        <Flex py={2} maxW={'30rem'} flex={1}>
          <Image alt={title} src={image} width={width} height={height} />
        </Flex>
        <Box display={{ base: 'block', md: 'none' }}>
          <Link href={url}>
            <a rel="noreferrer">
              <NextButton variant="outline">{textButton}</NextButton>
            </a>
          </Link>
        </Box>
      </Stack>
    </Container>
  )
}

export default NextCallToAction
