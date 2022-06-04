import NextTemplateMentor from '../components/templates/nextTemplateMentor'
import {
  nextHeroItem,
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems,
  nextSocialNetwork
} from '../data/mentor'

const NextHome = () => {
  return (
    <NextTemplateMentor
      nextSocialNetwork={nextSocialNetwork}
      nextHeroItem={nextHeroItem}
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
      nextTeamItems={nextTeamItems}
    />
  )
}

export default NextHome
