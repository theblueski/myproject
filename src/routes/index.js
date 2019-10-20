import React from 'react'
import  { LoginStack, DiscoveryStack, PersonCenterStack } from './stackNavigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeIconWithBadge from 'components/HomeIconWithBadge'
import Ionicons from 'react-native-vector-icons/Ionicons'

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Settings') {
    iconName = `ios-options${focused ? '' : '-outline'}`;
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
}


export default createBottomTabNavigator({LoginStack, DiscoveryStack, PersonCenterStack},{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
         getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});