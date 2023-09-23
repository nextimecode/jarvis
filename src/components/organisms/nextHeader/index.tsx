import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Container,
  HStack,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { layout } from '../../../data'
import { useRouter } from 'next/router'

export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  target?: string
  href: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '#',
    children: [
      {
        label: 'TattooPop',
        subLabel: 'Encontre os melhores tatuadores.',
        href: '/tattoopop',
      },
      {
        label: 'NextShow',
        subLabel: 'Game dos realities shows.',
        target: '_blank',
        href: 'https://nextshow.com.br/',
      },
      {
        label: 'Ei Milhas',
        subLabel: 'Encontre sua passagem ideal.',
        href: 'https://www.eimilhas.com.br/',
      },
      {
        label: 'OptarRh',
        subLabel: 'Solução para RH.',
        target: '_blank',
        href: 'https://app.optarrh.com.br/',
      },
      {
        label: 'Allan Kardec',
        subLabel: 'Museu Online do Espiritismo.',
        href: 'https://www.allankardec.online/',
      },
      {
        label: 'Treino Vini Dias',
        subLabel: 'Ganhe massa e perca peso fácil a jato.',
        href: 'https://www.treinovinidias.com/',
      },
      {
        label: 'Odonto S.O.S',
        subLabel: 'Urgências odontológicas.',
        href: 'https://www.odontosos.com.br/',
      },
      {
        label: 'Dr. Danilo Antunes',
        subLabel: 'Clínica odontológica.',
        href: 'https://www.daniloantunesimplantes.com.br/',
      },
    ],
  },
  {
    label: 'Mentor',
    href: '/mentor',
  },
  {
    label: 'Orçamento',
    href: layout.nextSocialNetwork,
  },
  {
    label: 'News',
    href: '/news',
  },
]

const DesktopSubNav = ({ label, href, subLabel, target }: NavItem) => {
  return (
    <Link href={href} target={target} role={'group'} aria-label="Saiba mais">
      <Stack direction={'row'} p={2} rounded={'md'} _hover={{ bg: 'gray.900' }}>
        <Box>
          <Text
            transition={'all .3s ease'}
            color="white"
            _groupHover={{ color: 'next-primary' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'} color="gray.500">
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'next-primary'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const DesktopNav = ({ navItems = NAV_ITEMS }) => {
  const router = useRouter()
  const linkColor = 'white'
  const linkHoverColor = 'next-primary'
  const popoverContentBgColor = 'gray.800'

  return (
    <Stack direction={'row'} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link href={navItem.href ?? '#'} aria-label={navItem.label}>
                <Box
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={
                    router.pathname === navItem.href
                      ? linkHoverColor
                      : linkColor
                  }
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Box>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={'white'}
          _hover={{ color: 'next-primary' }}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                aria-label={child.label}
              >
                <Box py={2}>{child.label}</Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = ({ navItems = NAV_ITEMS }) => {
  return (
    <Stack bg={'gray.800'} p={4} display={{ md: 'none' }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

type Props = {
  navItems?: NavItem[]
  logoSrc: string
  logoWidth: number
  logoHeight: number
  logoAlt: string
  logoSubtitle?: string
  logoSubtitleColor: string
}

const NextHeader = ({
  navItems = NAV_ITEMS,
  logoSrc,
  logoWidth,
  logoHeight,
  logoAlt,
  logoSubtitle,
  logoSubtitleColor,
}: Props) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box borderBottom={1} borderStyle={'solid'} borderColor={'gray.700'}>
      <Container maxW="container.lg">
        <Flex color={'gray.600'} minH={'70px'} align={'center'}>
          <Flex display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: 'center' }}
            alignItems={'center'}
          >
            <Link href={'/'}>
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
              />
              {logoSubtitle && (
                <Text
                  fontSize={{ base: 'lg', lg: 'xl' }}
                  color={logoSubtitleColor}
                >
                  {logoSubtitle}
                </Text>
              )}
            </Link>
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav navItems={navItems} />
          </Flex>

          <Stack
            flex={{ base: 1 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <HStack spacing={{ base: 3, md: 6 }}>
              <Link
                href={'https://www.instagram.com/nextimetec/'}
                target={'_blank'}
                aria-label="Visite nosso perfil no Instagram"
              >
                <Icon
                  color="next-gray"
                  _hover={{ color: 'next-primary' }}
                  as={FaInstagram}
                  w={6}
                  h={6}
                />
              </Link>
              <Link
                href={'https://www.facebook.com/nextimetecnologia'}
                target={'_blank'}
                aria-label="Visite nosso perfil no Facebook"
              >
                <Icon
                  color="next-gray"
                  _hover={{ color: 'next-primary' }}
                  as={FaFacebookF}
                  w={6}
                  h={6}
                />
              </Link>
              <Link
                href={'https://www.linkedin.com/company/nextimetec/'}
                target={'_blank'}
                aria-label="Visite nosso perfil no Linkedin"
              >
                <Icon
                  color="next-gray"
                  _hover={{ color: 'next-primary' }}
                  as={FaLinkedinIn}
                  w={6}
                  h={6}
                />
              </Link>
            </HStack>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={navItems} />
        </Collapse>
      </Container>
    </Box>
  )
}

export default NextHeader
