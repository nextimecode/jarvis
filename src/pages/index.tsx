
import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import {
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems
} from '../data/home'

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
