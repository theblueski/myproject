import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {

   static navigationOptions = {
    title: 'Home'
   }

  componentDidMount() {
    console.log('come into Home')
  }

  componentWillUnmount() {
    console.log('will leave Home')
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title='Go to Details'
            onPress={() => navigation.navigate('Details', {
                title: 'archie',
                id: 1
            })}
        />
      </View>
    );
  }
}

export default HomeScreen