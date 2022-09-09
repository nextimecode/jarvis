import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextHero, { NextHeroProps } from '../../organisms/nextHero'
import NextLayout from '../nextLayout'
import NextCallToActionWithAnnotation from 'components/organisms/nextCallToActionWithAnnotation'
import { NavItem } from 'components/organisms/nextHeader'
import { Box, Container } from '@chakra-ui/react'
import NextFeatures from 'components/organisms/nextFeatures'

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
      title={'NeXTMentor'}
      description={
        'Quer entrar na programação e não sabe como? Obtenha orientação e aconselhamento de um professor e profissional com 14 anos de mercado para descobrir em qual área você gosta e se destaca'
      }
      nextSocialNetwork={nextSocialNetwork}
      navItems={navItems}
      logoSrc={'/images/logos/next.svg'}
      logoHeight={62}
      logoSubtitle="Tattoo"
      logoSubtitleColor="next-blue.100"
      bg={bg}
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
      {/* <Box id="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfQTb3uMVXumzPdf-jgKVRuXyvmALeGV4Gl1Nat3oOi5l33XQ/viewform?embedded=true"
          width="100%"
          height="700"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Carregando…
        </iframe>
      </Box> */}
    </NextLayout>
  )
}

export default NextTemplateMentorTattoo
