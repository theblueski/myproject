import React from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from '@/routes/index.js';

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return <AppContainer />;
}
module.exports = App;
