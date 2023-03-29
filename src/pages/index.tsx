import { NextTemplateHome } from '../components/templates/NextTemplateHome'
import {
  nextHeroItem,
  nextFeatureItems,
  nextCallToActionItems,
  nextTechnologyItems,
  nextTeamItems,
} from '../data'

export default function NextHome() {
  return (
    <NextTemplateHome
      nextHeroItem={nextHeroItem}
      nextFeatureItems={nextFeatureItems}
      nextCallToActionItems={nextCallToActionItems}
      nextTechnologyItems={nextTechnologyItems}
      nextTeamItems={nextTeamItems}
    />
  )
}
