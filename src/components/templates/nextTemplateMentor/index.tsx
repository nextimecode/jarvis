import { Box, Center, Container, Flex, Heading, Icon, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero, { NextHeroProps } from '../../organisms/nextHero'
import NextLayout from '../nextLayout'
import { FaLinkedin, FaInstagram, FaGithubSquare, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import NextCallToActionWithAnnotation from 'components/organisms/nextCallToActionWithAnnotation'
import NextThreeTierPricingHorizontal from 'components/organisms/nextThreeTierPricingHorizontal'
import { NavItem } from 'components/organisms/nextHeader'

export type NextTemplateMentorProps = {
  navItems?: Array<NavItem>
  nextSocialNetwork: string
  nextHeroItem: NextHeroProps
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateMentor = ({
  navItems,
  nextSocialNetwork,
  nextHeroItem,
  nextCallToActionItems,
  nextTechnologyItems
}: NextTemplateMentorProps) => {
  return (
    <NextLayout
      title={'NeXTMentor'}
      description={
        'Quer entrar na programação e não sabe como? Obtenha orientação e aconselhamento de um professor e profissional com 14 anos de mercado para descobrir em qual área você gosta e se destaca'
      }
      nextSocialNetwork={nextSocialNetwork}
      navItems={navItems}
    >
      <NextCallToActionWithAnnotation />
      <NextHero
        id="hero"
        words={nextHeroItem.words}
        title={nextHeroItem.title}
        text={nextHeroItem.text}
        image={nextHeroItem.image}
        textButton={nextHeroItem.textButton}
        url={nextHeroItem.url}
      />
      {nextCallToActionItems?.map((item, index) => (
        <NextCallToAction
          id={item.id}
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
          textButton={item.textButton}
          directionMd={item.directionMd}
          width={item.width}
          height={item.height}
          url={item.url}
        />
      ))}
      <Container>
        <Center>
          <Flex>
            <Box px="4">
              <Link href={'https://www.linkedin.com/in/phdduarte/'}>
                <a target="_blank" rel="noreferrer">
                  <Icon
                    color="next-primary"
                    _hover={{
                      color: 'white'
                    }}
                    as={FaLinkedin}
                    w={16}
                    h={16}
                  />
                </a>
              </Link>
            </Box>
            <Box px="4">
              <Link href={'https://www.instagram.com/phdduarte/'}>
                <a target="_blank" rel="noreferrer">
                  <Icon
                    color="next-primary"
                    _hover={{
                      color: 'white'
                    }}
                    as={FaInstagram}
                    w={16}
                    h={16}
                  />
                </a>
              </Link>
            </Box>
            <Box px="4">
              <Link href={'https://www.youtube.com/watch?v=-TqTAxrOxaM'}>
                <a target="_blank" rel="noreferrer">
                  <Icon
                    color="next-primary"
                    _hover={{
                      color: 'white'
                    }}
                    as={FaYoutube}
                    w={16}
                    h={16}
                  />
                </a>
              </Link>
            </Box>
            <Box px="4">
              <Link href={'https://github.com/phdduarte'}>
                <a target="_blank" rel="noreferrer">
                  <Icon
                    color="next-primary"
                    _hover={{
                      color: 'white'
                    }}
                    as={FaGithubSquare}
                    w={16}
                    h={16}
                  />
                </a>
              </Link>
            </Box>
          </Flex>
        </Center>
      </Container>
      <Center pt={16} pb={8}>
        <Heading>O que os alunos estão dizendo</Heading>
      </Center>
      <SimpleGrid columns={2} spacing={10} pb={8}>
        <Box
          as="video"
          controls
          src="/videos/aluno1.mp4"
          poster="/videos/aluno1.png"
          objectFit="contain"
          sx={{
            aspectRatio: '16/9'
          }}
        />
        <Box
          as="video"
          controls
          src="/videos/aluno2.mp4"
          poster="/videos/aluno2.png"
          objectFit="contain"
          sx={{
            aspectRatio: '16/9'
          }}
        />
        <Box
          as="video"
          controls
          src="/videos/aluno3.mp4"
          poster="/videos/aluno3.png"
          objectFit="contain"
          sx={{
            aspectRatio: '16/9'
          }}
        />
        <Box
          as="video"
          controls
          src="/videos/aluno4.mp4"
          poster="/videos/aluno4.png"
          objectFit="contain"
          sx={{
            aspectRatio: '16/9'
          }}
        />
      </SimpleGrid>

      <NextFeatures
        title={'Tecnologias que você pode aprender'}
        items={nextTechnologyItems}
        numberGrid={6}
      />
      <Box id={'investimento'}>
        <NextThreeTierPricingHorizontal />
      </Box>
    </NextLayout>
  )
}

export default NextTemplateMentor
