import React from 'react'
import {
  Container,
  Flex,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'

export interface NextCallToActionProps {
  bg?: string;
  title: string;
  text: string;
  textButton?: string;
  image: string;
  directionMd?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  directionBase?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

const NextCallToAction = ({
  bg,
  title,
  text,
  image,
  textButton = '< Faça um orçamento />',
  directionMd = 'row',
  directionBase = 'column'
}: NextCallToActionProps) => {
  return (
    <Container bg={bg} maxW="container.xl" pb={[20, 32]}>
      <Stack align={'center'} direction={{ base: directionBase, md: directionMd }}>
        <Flex flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Text fontWeight={600} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              {title}
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
              {text}
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <NextButton variant="outline">{textButton}</NextButton>
            </Stack>
          </Stack>
        </Flex>
        <Flex maxH={'30rem'} flex={1}>
          <Image
            alt={title}
            objectFit={'contain'}
            src={image}
          />
        </Flex>
      </Stack>
    </Container>
  )
}

export default NextCallToAction
