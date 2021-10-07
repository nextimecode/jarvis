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

type NextHeroProps = {
  bg?: undefined
}

const NextHero = ({
  bg
}: NextHeroProps) => {
  return (
    <header>
      <Container bg={bg} maxW="container.xl">
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1}>
            <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                '/images/code_hero.png'
              }
            />
          </Flex>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color={'primary-light'} as={'span'}>
                  {'<h1>'}
                </Text>
                <Text color={'white'} as={'span'}>
                Faça a sua empresa ser vista algo aqui!
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
        </Stack>
      </Container>
    </header>
  )
}

export default NextHero
