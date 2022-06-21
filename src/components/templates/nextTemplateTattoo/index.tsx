import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextHero, { NextHeroProps } from '../../organisms/nextHero'
import NextLayout from '../nextLayout'
import NextCallToActionWithAnnotation from 'components/organisms/nextCallToActionWithAnnotation'
import { NavItem } from 'components/organisms/nextHeader'

export type NextTemplateMentorTattooProps = {
  navItems?: Array<NavItem>
  nextSocialNetwork: string
  nextHeroItem: NextHeroProps
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  hasNextCallToActionWithAnnotation?: boolean
}

const NextTemplateMentorTattoo = ({
  navItems,
  nextSocialNetwork,
  nextHeroItem,
  nextCallToActionItems,
  hasNextCallToActionWithAnnotation
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
    >
      {hasNextCallToActionWithAnnotation && <NextCallToActionWithAnnotation />}
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
    </NextLayout>
  )
}

export default NextTemplateMentorTattoo
