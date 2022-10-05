import React from 'react'
import { Container, VStack, Text, Box, Heading, ListItem, List } from '@chakra-ui/react'

const Termos = () => {
  return (
    <Container maxW={'container.lg'}>
      <Box>
        <Heading as="h1" pb={4}>
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
            textColor={'next-red.200'}
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
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
          <Heading py={4} as="h2">
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
          <Heading py={4} as="h2">
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
                    VIII. Realizar comentários nas postagens dentro do app e marcar outros usuários,
                    além de poder colocar hashtags;
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
                deverão supervisionar e representar as crianças e adolescentes com idade inferior a
                16 (dezesseis) anos e assistir os adolescentes em idade superior a 16 (dezesseis)
                anos e inferior à 18 (dezoito) anos, sempre que aplicável.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  2.2.2.{' '}
                </Text>
                A Tattoo Pop poderá recusar, não aprovar, cancelar ou limitar quaisquer
                solicitações, caso você não nos forneça dados corretos. A mesma providência será
                aplicada durante a utilização do app. E, uma vez que seja constatado que houve
                utilização de forma fraudulenta, bem como que tentativa ou violação destes Termos ou
                quaisquer legislações vigentes.
              </ListItem>
            </List>
          </Box>
          <Heading py={4} as="h2">
            3. RESPONSABILIDADES
          </Heading>
          <Box>
            <List spacing={3}>
              <ListItem>
                <List spacing={3}>
                  <ListItem>
                    <Text fontWeight={'bold'}>
                      3.1 O app e suas funcionalidades são apresentados a você na maneira como estão
                      disponíveis no momento, podendo passar por constantes melhorias e
                      atualizações, obrigando-se a Tattoo Pop a:{' '}
                    </Text>
                  </ListItem>
                  <ListItem>
                    I. Preservar a sua funcionalidade, com links não bloqueados e utilizando layout
                    que facilita a usabilidade e navegabilidade, sempre que possível, exibindo as
                    funcionalidades de maneira clara, completa, precisa e suficiente de modo que
                    você possa perceber as operações realizadas, protegendo, por meio do estado da
                    técnica disponível, os dados coletados pelas funcionalidades disponibilizadas.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  3.2. Maioridade.{' '}
                </Text>
                A Tattoo Pop coloca os seus esforços para a manutenção da disponibilidade contínua e
                permanente do app. No entanto, pode ocorrer, eventualmente, alguma indisponibilidade
                temporária, que pode decorrer de manutenção necessária, ou em casos de força maior,
                com falhas nos sistemas de comunicação e acesso à Internet ou fatos de terceiro que
                fogem da esfera de vigilância e responsabilidade do usuário.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  3.2.1.{' '}
                </Text>
                Se isso ocorrer, a Tattoo Pop fará o que estiver ao seu alcance para restabelecer o
                acesso ao site/app o mais breve possível, dentro das limitações técnicas de seus
                serviços e serviços de terceiros, dos quais depende para ficar online.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  3.3.{' '}
                </Text>
                A Tattoo Pop poderá alterar os presentes Termos e demais regras e critérios
                estabelecidos, serviços prestados, campos adicionais de cadastro e inserção de
                dados, empresas responsáveis por sua intermediação e demais coisas que julgue
                necessárias, sempre cientificando-lhe, enquanto usuário, sobre a nova versão e
                disponibilizando-a para consulta.
              </ListItem>
            </List>
          </Box>
          <Heading py={4} as="h2">
            4. COMPROMISSOS DO CLIENTE
          </Heading>
          <Box>
            <List spacing={3}>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  4.1. Integridade do site/app.{' '}
                </Text>
                Você como usuário se compromete a não acessar áreas de programação do site/app, seu
                banco de dados, códigos fonte ou qualquer outro conjunto de dados disponíveis nestes
                ambientes, de modo que não realize ou permita realizar engenharia reversa, nem
                traduzir, decompilar, copiar, modificar, reproduzir, alugar, sublicenciar, publicar,
                divulgar, transmitir, emprestar, distribuir ou, de outra maneira, dispor
                inapropriadamente das funcionalidades e informações do app.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  4.2. Validade das informações.{' '}
                </Text>
                É de sua responsabilidade o fornecimento de dados corretos, válidos e atualizados.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  4.3. Conta de acesso.{' '}
                </Text>
                Você deverá manter o sigilo dos dados de sua Conta de Acesso em relação a terceiros
                e utilizá-la de modo individual e intransferível, de modo que não disponibilize,
                divulgue e compartilhe sua senha ou qualquer mecanismo de autenticação com quem quer
                que seja. Em casos de suspeita de violação de conta, você deverá proceder com a
                troca e atualização o mais rápido possível.
              </ListItem>
            </List>
          </Box>
          <Heading py={4} as="h2">
            5. PROPRIEDADE INTELECTUAL E INDUSTRIAL
          </Heading>
          <Box>
            <List spacing={3}>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  5.1. Marca.{' '}
                </Text>
                A marca Tattoo Pop é propriedade industrial da aludida empresa e não pode ser
                reproduzida sem a expressa autorização da companhia.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  5.2. Conteúdo.{' '}
                </Text>
                Exceto se estabelecido em contrário nos Termos, todos os conteúdos, campanhas,
                imagens, vídeos, fotografias, descrições de produtos e marcas disponibilizadas no
                app em qualquer idioma ou forma, são de propriedade da Tattoo Pop ou licenciadas. O
                uso do site/app não gera qualquer presunção de transferência dessa propriedade ou
                licença.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  5.3. Alegações de Violação de Direito Autoral ou congêneres.{' '}
                </Text>
                Alegações de violação de direito autoral ou de outra natureza devem ser encaminhadas
                ao representante indicado pela Tattoo Pop no endereço contato.tattoopop@gmail.com.
              </ListItem>
            </List>
          </Box>
          <Heading py={4} as="h2">
            6. PRIVACIDADE E PROTEÇÃO DE DADOS PESSOAIS
          </Heading>
          <Box>
            <List spacing={3}>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  6.1. Dados Pessoais.{' '}
                </Text>
                A Tattoo Pop possui documento próprio, denominado Política de Privacidade, que
                regula o tratamento dos dados coletados no app, sendo parte integrante e inseparável
                dos presentes Termos.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  6.1.1.{' '}
                </Text>
                A Tattoo Pop monitora, por meios adequados, sua própria conformidade com as
                respectivas obrigações de proteção de Dados Pessoais.
              </ListItem>
            </List>
          </Box>
          <Heading py={4} as="h2">
            7. ISENÇÃO E LIMITAÇÕES DE RESPONSABILIDADE
          </Heading>
          <Box>
            <List spacing={3}>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  7.1.{' '}
                </Text>
                Você deve arcar com os meios necessários para navegar no site/app, incluindo a posse
                de um equipamento que seja considerado adequado para acesso, bem como deverá
                contratar prestador de serviços de telecomunicações para fornecimento de conexão à
                Internet
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  7.2.{' '}
                </Text>
                Sem prejuízo de outras condições destes Termos, a TattooPop não se responsabiliza:
                <List spacing={3}>
                  <ListItem>
                    I. Por problemas decorrentes de bugs, glitches ou funcionamentos indevidos que
                    ocorrerem em seus dispositivos e equipamentos e sejam resultantes direta ou
                    indiretamente do uso regular do app;
                  </ListItem>
                  <ListItem>
                    III. Por qualquer dano direto ou indireto ocasionado por eventos de terceiros,
                    como ataque de hackers, falhas no sistema, servidor ou na conexão à internet,
                    inclusive por ações de softwares que possam, de algum modo, danificar ativos
                    físicos ou lógicos ou a sua conexão em decorrência do acesso, utilização e
                    navegação no app.
                  </ListItem>
                  <ListItem>
                    III. Pela navegação nos links de terceiros eventualmente disponibilizados no
                    app, de modo que é dever do usuário a leitura dos Termos de Uso e Política de
                    Privacidade do link acessado, não sendo a Tattoo Pop responsabilizada também
                    pela verificação, controle, aprovação e garantia das informações ou dados
                    disponibilizados em tais links para serviços de terceiros, não sendo, portanto,
                    responsáveis por prejuízos, perdas ou danos ocorridos pela visita dos sites, de
                    forma que cabe ao interessado verificar a confiabilidade das informações e dados
                    ali exibidos antes de tomar alguma decisão ou praticar algum ato.
                  </ListItem>
                  <ListItem>
                    IV. Pelas atitudes tomadas pelo usuário, com base, direta ou indiretamente, no
                    app, informações, dados, relatórios, opiniões, sugestões e etc.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  7.3.{' '}
                </Text>
                Eventuais procedimentos de manutenção que acarretem a indisponibilidade do app por
                longos períodos serão informados por meio dos canais oficiais de comunicação, como
                e-mails e perfis oficiais em mídias sociais.
              </ListItem>
            </List>
          </Box>
          <Heading py={4} as="h2">
            8. DISPOSIÇÕES GERAIS
          </Heading>
          <Box>
            <List spacing={3}>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.1. Atualização dos Termos.{' '}
                </Text>
                Estes Termos estão sujeitos a constante melhoria e aprimoramento. Assim, a Tattoo
                Pop se reserva ao direito de modificá-los a qualquer momento, introduzindo
                alterações ou atualizações conforme sua finalidade ou conveniência, tal qual para
                adequação e conformidade legal de disposição de lei ou norma que tenha força
                jurídica equivalente.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.1.1.{' '}
                </Text>
                Ocorrendo atualizações substanciais nestes Termos, a Tattoo Pop notificará você
                pelas ferramentas disponíveis no app ou pelos meios de contato fornecidos em seu
                cadastro, ou seja, através de meios razoáveis. Caso o Utilizador não aceite os
                Termos da Tattoo Pop alterados, pode deixar de usar o app, desde que não haja
                nenhuma obrigação pendente entre as Partes, devendo esta ser renegociada e/ou
                finalizada nos termos anteriormente pactuados.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.2. Novação e renúncia.{' '}
                </Text>
                A tolerância de eventual descumprimento de qualquer condição destes Termos não
                constituirá renúncia ou novação nem impedirá a Tattoo Pop de exigir estas condições
                a qualquer tempo.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.3. Nulidade.{' '}
                </Text>
                A tolerância de eventual descumprimento de qualquer condição destes Termos não
                constituirá renúncia ou novação nem impedirá a Tattoo Pop de exigir estas condições
                a qualquer tempo.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.4. Comunicação.{' '}
                </Text>
                A tolerância de eventual descumprimento de qualquer condição destes Termos não
                constituirá renúncia ou novação nem impedirá a Tattoo Pop de exigir estas condições
                a qualquer tempo.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.5. Data e hora..{' '}
                </Text>
                A tolerância de eventual descumprimento de qualquer condição destes Termos não
                constituirá renúncia ou novação nem impedirá a Tattoo Pop de exigir estas condições
                a qualquer tempo.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.6. Lei aplicável e foro.{' '}
                </Text>
                A tolerância de eventual descumprimento de qualquer condição destes Termos não
                constituirá renúncia ou novação nem impedirá a Tattoo Pop de exigir estas condições
                a qualquer tempo.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.7. Ajuda.{' '}
                </Text>
                A tolerância de eventual descumprimento de qualquer condição destes Termos não
                constituirá renúncia ou novação nem impedirá a Tattoo Pop de exigir estas condições
                a qualquer tempo.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  8.8. Canais de Atendimento.{' '}
                </Text>
                Você poderá utilizar os Canais de Atendimento disponibilizados no app sempre que
                precisar entrar em contato conosco, ou pelos E-mail:{' '}
                <Text py={4} as="span" fontWeight={'bold'}>
                  contato.tattoopop@gmail.com
                </Text>
              </ListItem>
            </List>
          </Box>
          <Heading py={4} as="h2">
            9. DISPOSIÇÕES FINAIS
          </Heading>
          <Box>
            <List spacing={3}>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  9.1.{' '}
                </Text>
                Caso qualquer disposição destes Termos seja tida como ilegal, inválida ou
                inexequível total ou parcialmente, por qualquer legislação, essa disposição ou parte
                dela será, naquela medida, considerada como não existente para os efeitos destes
                Termos, mas a legalidade, validade e exequibilidade das demais disposições contidas
                nestes Termos não serão afetadas.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  9.2.{' '}
                </Text>
                Nesse caso, as partes substituirão a disposição ilegal, inválida ou inexequível, ou
                parte dela, por outra que seja legal, válida e exequível e que, na máxima medida
                possível, tenha efeito similar à disposição tida como ilegal, inválida ou
                inexequível para fins de conteúdo e finalidade dos presentes Termos.
              </ListItem>
              <ListItem>
                <Text py={4} as="span" fontWeight={'bold'}>
                  9.3.{' '}
                </Text>
                Estes Termos constituem a totalidade do acordo e entendimento das partes sobre este
                assunto e substituem e prevalecem sobre todos os entendimentos e compromissos
                anteriores sobre este assunto.
              </ListItem>
            </List>
          </Box>
        </VStack>
        <Text as="p">
          Assim, com a concordância do usuário, estes termos regerão a relação contratual
          estabelecida entre as partes, podendo sempre ser consultada a data da última atualização
          ao final deste instrumento.
        </Text>
        <Text as="p" pt={6}>
          Belo Horizonte/MINAS GERAIS, 26 de maio de 2022.
        </Text>
      </Box>
    </Container>
  )
}

export default Termos
