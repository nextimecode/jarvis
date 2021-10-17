
import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import { nextCallToActionItems, nextFeatureItems } from './data'

const NextHome = () => {
  return (
    <NextTemplateHome
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
    />
  )
}

export default NextHome
