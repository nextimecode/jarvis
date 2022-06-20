import React from 'react'
import { Container, VStack, Text, Box, Heading, ListItem, List } from '@chakra-ui/react'
import NextLayout from 'components/templates/nextLayout'

const Termos = () => {
  return (
    <NextLayout>
      <Container maxW={'container.lg'}>
        <Box>
          <Heading as="h1" pb={4} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            Termos de uso
          </Heading>
          <VStack pb={4} spacing="2" alignItems="flex-start" fontSize="lg">
            <Text as="p">
              Estes termos de uso (“Termos”) regem seu acesso e uso, como pessoa física, dentro do
              Brasil, de apps, sites de Internet, conteúdos, bens e também serviços (os “Serviços”)
              disponibilizados pela{' '}
              <Text as="span" fontWeight={'bold'}>
                Tattoo Pop
              </Text>
              , sociedade de responsabilidade limitada, estabelecida no Brasil, com sede em Rua
              Platina, 1425, Apartamento 204, Calafate, na cidade de Belo Horizonte, Minas Gerais,
              inscrita no Cadastro Nacional de Pessoas Jurídicas do Ministério da Fazenda (CNPJ/MF)
              sob n. 41.208.078/0001-83 ou qualquer de suas afiliadas.
            </Text>
            <Heading
              as="h1"
              py={4}
              textColor={'red.200'}
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            >
              LEIA ATENTAMENTE O PRESENTE TERMO DE USO ANTES DE ACESSAR OU UTILIZAR OS SERVIÇOS DO
              APLICATIVO AQUI DENOMINADO COMO Tattoo Pop.
            </Heading>
            <Text as="p">
              A
              <Text as="span" fontWeight={'bold'}>
                {' '}
                Tattoo Pop{' '}
              </Text>
              poderá alterar os Termos relativos aos Serviços a qualquer momento, sendo feita a
              postagem da versão atualizada dos Termos neste local, de modo que, se você continuar a
              acessar ou usar os Serviços após essa postagem, representa seu consentimento em
              vincular-se aos Termos alterados.
            </Text>
            <Heading py={4} as="h2" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              1. GLOSSÁRIO
            </Heading>
            <Box>
              <List spacing={3}>
                <ListItem>
                  <Text as="span" fontWeight={'bold'}>
                    1.1 Usuário.{' '}
                  </Text>
                  Navegador individual do app.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight={'bold'}>
                    1.2 Aplicativo.{' '}
                  </Text>
                  Local no qual são coletadas as informações e disponibilizadas através de páginas
                  virtuais disponibilizadas na Internet, sendo acessadas por meio de um dispositivo
                  móvel ou de outro meio comunicacional.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight={'bold'}>
                    1.3 Fornecedor das Informações.{' '}
                  </Text>
                  Aquele que fornece dados/informações à
                  <Text as="span" fontWeight={'bold'}>
                    {' '}
                    Tattoo Pop.
                  </Text>
                </ListItem>
              </List>
            </Box>
            <Heading py={4} as="h2" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
              2. FUNCIONALIDADE E ACESSO AO APLICATIVO
            </Heading>
            <Box>
              <List spacing={3}>
                <ListItem>
                  <List spacing={3}>
                    <ListItem>
                      <Text fontWeight={'bold'}>2.1 Funcionalidade(s): </Text>
                    </ListItem>
                    <ListItem>I. Tour pelo app explicando as principais funcionalidades.</ListItem>
                    <ListItem>II. Cadastro com redes Facebook e Google.</ListItem>
                  </List>
                  <Text py={4} fontWeight={'bold'}>
                    2.1.1 Após cadastramento, terá acesso a:{' '}
                  </Text>
                  <List spacing={3}>
                    <ListItem>I. Configurações de perfil;</ListItem>
                    <ListItem>III. Mudar avatar do perfil;</ListItem>
                    <ListItem>III. Habilitar e desabilitar configurações;</ListItem>
                    <ListItem>IV. Entrar em contato com a empresa Tattoo Pop;</ListItem>
                    <ListItem>V. Conectar conta do app com a conta do instagram;</ListItem>
                    <ListItem>VI. Assinatura de planos;</ListItem>
                    <ListItem>VII. Informar local para realizar buscas por artistas;</ListItem>
                    <ListItem>
                      VIII. Realizar comentários nas postagens dentro do app e marcar outros
                      usuários, além de poder colocar hashtags;
                    </ListItem>
                    <ListItem>IX. Salvar artistas e tatuagens favoritas;</ListItem>
                    <ListItem>
                      X. Visualizar imagens da galeria, podendo alterar modo deexibição;
                    </ListItem>
                    <ListItem>XI. Visualizar ranking com artistas</ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <Text py={4} as="span" fontWeight={'bold'}>
                    2.2 Maioridade.{' '}
                  </Text>
                  O acesso ao app da Tattoo Pop é livre para todos, porém algumas funcionalidades
                  podem exigir atos praticados por maiores de 18 (dezoito) anos, conforme legislação
                  em vigor.
                </ListItem>
                <ListItem>
                  <Text py={4} as="span" fontWeight={'bold'}>
                    2.2.1.{' '}
                  </Text>
                  Nos casos em que o usuário ainda não seja maior de idade, os representantes legais
                  deverão supervisionar e representar as crianças e adolescentes com idade inferior
                  a 16 (dezesseis) anos e assistir os adolescentes em idade superior a 16
                  (dezesseis) anos e inferior à 18 (dezoito) anos, sempre que aplicável.
                </ListItem>
                <ListItem>
                  <Text as="span" fontWeight={'bold'}>
                    2.3 Fornecedor das Informações.{' '}
                  </Text>
                  Aquele que fornece dados/informações à
                  <Text as="span" fontWeight={'bold'}>
                    {' '}
                    Tattoo Pop.
                  </Text>
                </ListItem>
              </List>
            </Box>
          </VStack>
        </Box>
      </Container>
    </NextLayout>
  )
}

export default Termos
