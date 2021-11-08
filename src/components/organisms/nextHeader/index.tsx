import React from 'react'
import Image from 'next/image'
import NextJSLink from 'next/link'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
  Container,
  HStack
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { nextSocialNetwork } from '../../../data'

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'gray.900' }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home'
  },
  // {
  //   label: 'Quem somos',
  //   href: '#'
  // },
  // {
  //   label: 'Portfólio',
  //   children: [
  //     {
  //       label: 'Tattoo Pop',
  //       subLabel: 'Find your dream design job',
  //       href: '#'
  //     },
  //     {
  //       label: 'Optar',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#'
  //     }
  //   ]
  // },
  {
    label: 'Orçamento',
    href: nextSocialNetwork.whatsapp.url
  }
]

const DesktopNav = () => {
  const linkColor = 'white'
  const linkHoverColor = 'next-primary'
  const popoverContentBgColor = 'gray.800'

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
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
          textDecoration: 'none'
        }}>
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
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={'gray.800'}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const NextHeader = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.700'}
    >
      <Container maxW="container.lg">
        <Flex
          color={'gray.600'}
          minH={'70px'}
          align={'center'}>
          <Flex
            flex={{ base: 1 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center' }}>
            <Image src="/images/logos/logo_nextime.svg" alt="NeXTIME Logo" width={146} height={45} />
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>

          <Stack
            flex={{ base: 1 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <HStack spacing={{ base: 3, md: 6 }}>
              <NextJSLink href={'https://www.instagram.com/nextimetec/'}>
                <a target="_blank" rel="noreferrer">
                  <Icon color="next-gray" _hover={{ color: 'next-primary' }} as={FaInstagram} w={6} h={6}/>
                </a>
              </NextJSLink>
              <NextJSLink href={'https://www.facebook.com/nextimetecnologia'}>
                <a target="_blank" rel="noreferrer">
                  <Icon color="next-gray" _hover={{ color: 'next-primary' }} as={FaFacebookF} w={6} h={6}/>
                </a>
              </NextJSLink>
              <NextJSLink href={'https://www.linkedin.com/company/nextimetec/'}>
                <a target="_blank" rel="noreferrer">
                  <Icon color="next-gray" _hover={{ color: 'next-primary' }} as={FaLinkedinIn} w={6} h={6}/>
                </a>
              </NextJSLink>
            </HStack>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  )
}

export default NextHeader
