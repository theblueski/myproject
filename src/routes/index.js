import React from 'react';
import {LoginStack, DiscoveryStack, PersonCenterStack} from './stackNavigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TabIcon from 'components/TabIcon'


export default createBottomTabNavigator(
  {LoginStack, DiscoveryStack, PersonCenterStack},
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) =>
        TabIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);
