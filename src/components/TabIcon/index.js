import React from 'react'
import HomeIconWithBadge from '../HomeIconWithBadge'
import { IconFont } from '#/font'

const iconMap = {
    'LoginStack': 'info',
    'DiscoveryStack': 'discovery',
    'PersonCenterStack': 'person'
}

const TabIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state
  let IconComponent = IconFont
  let iconName = `icon-${iconMap[routeName]}`
  if (routeName === 'HomeStack') {
    IconComponent = HomeIconWithBadge
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
}

export default TabIcon