
import React from 'react'
import { NextFeatureProps } from '../../molecules/nextFeature'
import NextCallToAction, { NextCallToActionProps } from '../../organisms/nextCallToAction'
import NextFeatures from '../../organisms/nextFeatures'
import NextHero from '../../organisms/nextHero'
import NextLayout from '../nextLayout'

export interface NextTemplateHomeProps {
  nextFeatureItems: Array<NextFeatureProps>
  nextCallToActionItems: Array<NextCallToActionProps>
}

const NextTemplateHome = ({
  nextFeatureItems,
  nextCallToActionItems
}: NextTemplateHomeProps) => {
  return (
    <NextLayout>
      <NextHero />
      <NextFeatures items={nextFeatureItems} />
      {nextCallToActionItems?.map((item, index) => (
        <NextCallToAction
          key={index}
          title={item.title}
          text={item.text}
          image={item.image}
          textButton={item.textButton}
          directionMd={item.directionMd}
        />
      ))}
    </NextLayout>
  )
}

export default NextTemplateHome
