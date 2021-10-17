
import React from 'react'
import NextTemplateHome from '../components/templates/nextTemplateHome'
import nextFeatureItems from '../../data/nextFeatureItems'
import nextCallToActionItems from '../../data/nextCallToActionItems'

const NextHome = () => {
  return (
    <NextTemplateHome
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
    />
  )
}

export default NextHome
