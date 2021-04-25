import React from 'react';
import { StyleSheet, Text, View, Image, Header, TextInput } from 'react-native';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
        <View>
            <Header
                backgroundColor={'#e11050'}
                centerComponent={{
                    text: 'Story Hub',
                    style: { color: '#fff', fontSize: 20 },
                }}
            />
            <TextInput/>
            
            <TextInput/>

            <TextInput multiline = {true}/>

            <TouchableOpacity>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
  }
}