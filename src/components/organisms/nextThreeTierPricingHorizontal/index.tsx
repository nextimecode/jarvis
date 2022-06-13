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
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'

const optionsStarter = [
  {
    id: 1,
    desc: 'Acesso a um grupo no WhatsApp\ncom dicas da área de TI, novidades na tecnologia,\nvagas de emprego e muito mais.'
  }
]

const optionsPlus = [
  {
    id: 1,
    desc: 'Acesso a um grupo no WhatsApp\ncom dicas da área de TI, novidades na tecnologia,\nvagas de emprego e muito mais.'
  },
  { id: 2, desc: 'Teste analisado individualmente para saber\nqual área você se destaca.' },
  { id: 3, desc: '30 minutos de mentoria no mês.' }
]

const optionsPro = [
  {
    id: 1,
    desc: 'Acesso a um grupo no WhatsApp\ncom dicas da área de TI, novidades na tecnologia,\nvagas de emprego e muito mais.'
  },
  {
    id: 2,
    desc: 'Acesso individual ao WHATSAPP\npara tirar dúvidas e pedir aconselhamentos.'
  },
  { id: 3, desc: 'Teste analisado individualmente para saber\nqual área você se destaca.' },
  { id: 4, desc: '1 hora de mentoria no mês.' }
]

const optionsButtons =
  'https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20Pedro!%0AGostaria%20de%20participar%20da%20mentoria%20Plano%20'

interface PackageTierProps {
  title: string
  options: Array<{ id: number; desc: string }>
  typePlan: string
  checked?: boolean
  url: string
}
const PackageTier = ({ title, options, typePlan, checked = false, url }: PackageTierProps) => {
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
        <Link href={url}>
          <Button
            size="md"
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}
          >
            SIM! QUERO PARTICIPAR
          </Button>
        </Link>
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
          url={'https://chat.whatsapp.com/BUvZGzSuqziJ3VWYYTilP7'}
          title={'Start'}
          checked={true}
          typePlan="GRÁTIS"
          options={optionsStarter}
        />
        <Divider />
        <PackageTier
          url={`${optionsButtons}Plus`}
          title={'Plus'}
          checked={true}
          typePlan="R$77,70/mês"
          options={optionsPlus}
        />
        <Divider />
        <PackageTier
          url={`${optionsButtons}Pro`}
          title={'Pro'}
          checked={true}
          typePlan="R$97,70/mês"
          options={optionsPro}
        />
      </Stack>
    </Box>
  )
}

export default NextThreeTierPricingHorizontal
