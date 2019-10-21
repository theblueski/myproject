import React from 'react'
import { View, Text } from 'react-native'
import { IconFont } from '#/font'

class MyPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>myPage</Text>
        <IconFont name='icon-info' size={25} color='red' />
      </View>
    );
  }
}

export default MyPage