import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextHero, { NextHeroProps } from '../../organisms/nextHero'
import NextLayout from '../nextLayout'
import NextCallToActionWithAnnotation from '../../organisms/nextCallToActionWithAnnotation'
import { NavItem } from '../../organisms/nextHeader'
import { Box, Center, Container, Flex, Text } from '@chakra-ui/react'
import NextFeatures from '../../organisms/nextFeatures'
import Link from 'next/link'

export type NextTemplateMentorTattooProps = {
  navItems?: Array<NavItem>
  nextSocialNetwork: string
  nextHeroItem: NextHeroProps
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  hasNextCallToActionWithAnnotation?: boolean
  bg?: string
}

const NextTemplateMentorTattoo = ({
  navItems,
  nextSocialNetwork,
  nextHeroItem,
  nextCallToActionItems,
  hasNextCallToActionWithAnnotation,
  nextFeatureItems,
  bg
}: NextTemplateMentorTattooProps) => {
  return (
    <NextLayout
      title={'TattooPop'}
      description={
        'No app Tattoo Pop você encontra, além de inspirações para os mais diversos estilos de tatuagens, os melhores tatuadores da sua região. E se o tatuador for você? Bom, aqui você divulga seu trabalho e aumenta o seu alcance. Baixe agora o Tattoo Pop e participe da maior comunidade de tatuados e tatuadores do país! '
      }
      nextSocialNetwork={nextSocialNetwork}
      navItems={navItems}
      logoSrc={'/images/logos/next.svg'}
      logoHeight={62}
      logoSubtitle="Tattoo"
      logoSubtitleColor="next-blue.100"
      bg={bg}
      keywords={['Tattoo', 'tatuagem', 'tatuadores', 'tatuador', 'aplicativo', 'app']}
    >
      {hasNextCallToActionWithAnnotation && <NextCallToActionWithAnnotation />}
      <Container maxW="container.md" py={6}>
        <Box
          as="iframe"
          src="https://www.youtube.com/embed/pa80P9FVLF0"
          width="100%"
          sx={{
            aspectRatio: '16/9'
          }}
        />
      </Container>
      <NextHero
        id="hero"
        words={nextHeroItem.words}
        title={nextHeroItem.title}
        text={nextHeroItem.text}
        image={nextHeroItem.image}
        textButton={nextHeroItem.textButton}
        url={nextHeroItem.url}
        width={nextHeroItem.width}
        height={nextHeroItem.height}
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
      <NextFeatures
        id="funcionalidades"
        title={'Algumas funcionalidades'}
        items={nextFeatureItems}
        numberGrid={3}
      />
      <Center>
        <Flex>
          <Text decoration="underline">
            <Link href="/tattoopop/termos">Termos de uso</Link>
          </Text>
          |
          <Text decoration="underline">
            <Link href="/tattoopop/politicas">{''}Política de Privacidade</Link>
          </Text>
        </Flex>
      </Center>
    </NextLayout>
  )
}

export default NextTemplateMentorTattoo
