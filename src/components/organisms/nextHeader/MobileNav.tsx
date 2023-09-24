import React from 'react'
import { Stack } from '@chakra-ui/react'
import { NAV_ITEMS } from './NAV_ITEMS'
import { MobileNavItem } from './MobileNavItem'

export const MobileNav = ({ navItems = NAV_ITEMS }) => {
  return (
    <Stack bg={'gray.800'} p={4} display={{ md: 'none' }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
