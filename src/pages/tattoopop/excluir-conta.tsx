import React from 'react'
import { Container, Text, Box, Heading } from '@chakra-ui/react'
import { NextLayout } from '../../components/templates/NextLayout'
import Image from 'next/image'

const Termos = () => {
  return (
    <NextLayout>
      <Container maxW={'container.lg'} my={8}>
        <Box>
          <Heading as="h1" pb={4}>
            Como faço para excluir minha conta do TattooPop?
          </Heading>
        </Box>
        <Text mb={6}>1 - Clique na engrenagem na parte inferior da página</Text>
        <Image
          alt={'Tutorial deletar conta'}
          src={'/images/delete1.PNG'}
          width={282}
          height={609}
          placeholder="blur"
        />
        <Text my={6}>
          2 - Clique em{' '}
          <Text as="span" fontWeight="bold">
            Deletar Conta
          </Text>
        </Text>
        <Text mb={6}>3- Confirme clicando em Deletar</Text>
        <Image
          alt={'Tutorial deletar conta'}
          src={'/images/delete2.PNG'}
          width={282}
          height={609}
          placeholder="blur"
        />
      </Container>
    </NextLayout>
  )
}

export default Termos
