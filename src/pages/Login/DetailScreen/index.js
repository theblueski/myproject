import React from 'react';
import { View, Text, Button } from 'react-native';

class DetailScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Detail/${navigation.getParam('id', 'null')}`,
        headerRight: (
            <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="red"
                  />
        )
    })

    componentDidMount() {
        console.log('come into detail')
    }

    componentWillUnmount() {
        console.log('will leave detail')
    }

    render() {
        const { navigation } = this.props
        return (
           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                   <Text>Details Screen</Text>
                   <View>
                    <Text>{navigation.getParam('id')}</Text>
                   </View>
                   <View>
                    <Text>{navigation.getParam('title')}</Text>
                   </View>
                   <Button title='go Home'
                    onPress={() => navigation.navigate('Home')}
                    />
                    <Button title='go Detail again'
                     onPress={() => navigation.push('Details', {
                        title: 'tony',
                        id: 2
                     })}
                     />
           </View>
        )
    }
}

export default DetailScreen