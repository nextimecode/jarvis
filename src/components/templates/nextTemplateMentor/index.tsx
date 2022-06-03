import { Box, Center, Container, Flex, Heading, Icon, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero, { NextHeroProps } from '../../organisms/nextHero'
import NextLayout from '../nextLayout'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export type NextTemplateMentorProps = {
  nextHeroItem: NextHeroProps
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateMentor = ({
  nextHeroItem,
  nextCallToActionItems,
  nextTechnologyItems
}: NextTemplateMentorProps) => {
  return (
    <NextLayout>
      <NextHero
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
          </Flex>
        </Center>
      </Container>
      <Container py={8}>
        <Box
          as="iframe"
          src="https://www.youtube.com/embed/-TqTAxrOxaM"
          width="100%"
          sx={{
            aspectRatio: '16/9'
          }}
        />
      </Container>
      <Center pt={16} pb={8}>
        <Heading>O que os mentorados estão dizendo</Heading>
      </Center>
      <SimpleGrid columns={2} spacing={10}>
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
    </NextLayout>
  )
}

export default NextTemplateMentor
