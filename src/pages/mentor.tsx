import NextTemplateMentor from '../components/templates/nextTemplateMentor'
import {
  nextHeroItem,
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems,
  nextSocialNetwork,
  NAV_ITEMS,
} from '../data/mentor'

const Mentor = () => {
  return (
    <NextTemplateMentor
      hasNextCallToActionWithAnnotation
      navItems={NAV_ITEMS}
      nextSocialNetwork={nextSocialNetwork}
      nextHeroItem={nextHeroItem}
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
      nextTeamItems={nextTeamItems}
    />
  )
}

export default Mentor
