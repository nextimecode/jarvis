import React from 'react'
import {
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import NextButton from '../../atoms/nextButton'

export type NextHeroProps = {
  title: string,
  bg?: string
}

const NextHero = ({
  title,
  bg
}: NextHeroProps) => {
  return (
    <header>
      <Container bg={bg} maxW="container.xl">
        <Stack minH={'80vh'} align={'center'} direction={{ base: 'column', md: 'row-reverse' }}>
          <Flex flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color={'primary-light'} as={'span'}>
                  {'<h1>'}
                </Text>
                <Text color={'white'} as={'span'}>
                  {title}
                </Text>
                <Text color={'primary-light'} as={'span'}>
                  {'<h1>'}
                </Text>
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
                Procuramos todo dia fazer algo que possa devolver as pessoas o seu bem mais precioso, o TEMPO. Acreditamos que pensando diferente conseguimos utilizar esse recurso finito de uma melhor forma.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <NextButton>{'<Faça um orçamento gratuito/>'}</NextButton>
              </Stack>
            </Stack>
          </Flex>
          <Flex maxH={'30rem'} flex={1}>
            <Image
              alt={'Login Image'}
              objectFit={'contain'}
              src={
                '/images/home/code_hero.png'
              }
            />
          </Flex>
        </Stack>
      </Container>
    </header>
  )
}

export default NextHero
