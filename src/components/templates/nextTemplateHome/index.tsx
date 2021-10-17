
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
      <NextCallToAction
        title={nextCallToActionItems[0].title}
        text={nextCallToActionItems[0].text}
        image={nextCallToActionItems[0].image}
      />
    </NextLayout>
  )
}

export default NextTemplateHome
