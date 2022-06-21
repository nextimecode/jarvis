import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react'
import Link from 'next/link'

export default function NextCallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 8 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Quer entrar na programação <br />
            <Text as={'span'} color={'next-primary'}>
              e não sabe como?
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Obtenha orientação e aconselhamento de um professor e profissional com 14 anos de
            mercado para descobrir em qual área você gosta e se destaca.{' '}
            <Text as={'span'} color={'next-red.200'}>
              Como é necessário dar atenção individual as vagas são limitadas.
            </Text>
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link href={'#investimento'}>
              <Button
                colorScheme={'green'}
                bg={'next-primary'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500'
                }}
              >
                QUERO PARTICIPAR
              </Button>
            </Link>
            <Link href={'#hero'}>
              <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
                Saiba mais
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
