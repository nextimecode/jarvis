
import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import nextFeatureItems from '../../data/nextFeatureItems'
import nextCallToActionItems from '../../data/nextCallToActionItems'
import nextTechnologyItems from '../../data/nextTechnologyItems'

const NextHome = () => {
  return (
    <NextTemplateHome
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
    />
  )
}

export default NextHome
