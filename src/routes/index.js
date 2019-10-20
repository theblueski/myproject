import routeMap from './routeConfig.js'
import { createStackNavigator } from 'react-navigation-stack';

export default createStackNavigator(routeMap,{
    initialRouteName: 'Home'
});