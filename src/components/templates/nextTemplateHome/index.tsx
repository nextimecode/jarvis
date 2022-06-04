import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero, { NextHeroProps } from '../../organisms/nextHero'
import NextLayout from '../nextLayout'

export type NextTemplateHomeProps = {
  nextHeroItem: NextHeroProps
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
  nextTechnologyItems: Array<Record<string, unknown>>
  nextTeamItems: Array<Record<string, string>>
}

const NextTemplateHome = ({
  nextHeroItem,
  nextCallToActionItems,
  nextTechnologyItems
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero
        image={nextHeroItem.image}
        words={nextHeroItem.words}
        title={nextHeroItem.title}
        text={nextHeroItem.text}
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
      <NextFeatures items={nextTechnologyItems} numberGrid={6} />
    </NextLayout>
  )
}

export default NextTemplateHome
