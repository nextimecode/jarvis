import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'

const optionsStarter = [
  {
    id: 1,
    desc: 'Acesso a um grupo no TELEGRAM\ncom dicas, novidades na tecnologia,\nvagas de emprego e muito mais.'
  },
  { id: 2, desc: 'Lorem, ipsum dolor.' },
  { id: 3, desc: 'Monthly Updates' }
]

const optionsPlus = [
  {
    id: 1,
    desc: 'Acesso a um grupo no TELEGRAM\ncom dicas, novidades na tecnologia,\nvagas de emprego e muito mais.'
  },
  { id: 2, desc: 'Teste analisado individualmente para saber\nqual área você se destaca.' },
  { id: 3, desc: '30 minutos de mentoria.' }
]

const optionsPro = [
  {
    id: 1,
    desc: 'Acesso a um grupo no TELEGRAM\ncom dicas, novidades na tecnologia,\nvagas de emprego e muito mais.'
  },
  {
    id: 2,
    desc: 'Acesso a um grupo no WHATSAPP\npara responder a dúvidas e muito mais.'
  },
  { id: 3, desc: 'Teste analisado individualmente para saber\nqual área você se destaca.' },
  { id: 4, desc: '1 hora de mentoria.' }
]

interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan: string
  checked?: boolean
}
const PackageTier = ({ title, options, typePlan, checked = false }: PackageTierProps) => {
  const colorTextLight = checked ? 'white' : 'next-primary'
  const bgColorLight = checked ? 'purple.400' : 'gray.300'

  const colorTextDark = checked ? 'white' : 'next-primary'
  const bgColorDark = checked ? 'next-primary' : 'gray.300'

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around'
      }}
      direction={{
        base: 'column',
        md: 'row'
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={id} whiteSpace={'pre-wrap'}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          SIM! QUERO PARTICIPAR
        </Button>
      </Stack>
    </Stack>
  )
}
const NextThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} minH={'100vh'}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around'
          }}
          direction={{
            base: 'column',
            md: 'row'
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%'
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
              Escolha o Plano Certo <Text color="next-primary">Para Você</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%'
            }}
          >
            <Text textAlign={'center'}>
              Todos os passos para o pagamento e entrada nos grupos serão explicado no whatsapp após
              a escolha do plano. Basta clicar em um dos botões e será redirecionado.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier
          title={'Start'}
          checked={true}
          typePlan="R$9,70/mês"
          options={optionsStarter}
        />
        <Divider />
        <PackageTier title={'Plus'} checked={true} typePlan="R$77,70/mês" options={optionsPlus} />
        <Divider />
        <PackageTier title={'Pro'} checked={true} typePlan="R$97,70/mês" options={optionsPro} />
      </Stack>
    </Box>
  )
}

export default NextThreeTierPricingHorizontal