import React from 'react'
import Image from 'next/image'
import {
  Container,
  Grid,
  GridItem,
  Text
} from '@chakra-ui/react'

type NextHeroProps = {
  bg?: undefined
}

const NextHero = ({
  bg
}: NextHeroProps) => {
  return (
    <header>
      <Container maxW="container.lg">
        <Grid bg={bg} templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2}>
            <Image src="/images/code_hero.png" alt="NeXTIME Logo" width={462} height={482} />
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <Text fontSize={40}>
              {'<h1>'}
            </Text>
            <Text fontSize={40}>
              Faça a sua empresa ser vista algo aqui!
            </Text>
            <Text fontSize={40}>
              Serviços
            </Text>
            <Text fontSize={40}>
              {'<h1>'}
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </header>
  )
}

export default NextHero
