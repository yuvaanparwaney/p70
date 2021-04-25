import React from 'react';
import { StyleSheet, Text, View, Image, Header, createAppContainer } from 'react-native';
import {createBottomTabNavigator} from 'react-native-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen'



const TabNavigator = createBottomTabNavigator ({
  Read:{screen: ReadStoryScreen},
  Write:{screen: WriteStoryScreen},
},

{
defaultNavigationOptions: ({navigation}) =>({
  tabBarIcon: () => {
    const routeName = navigation.state.routeName
     if (routeName == 'Read'){
      return (
        <Image source = {require("./assets/read.png")}
        style = {{width: 40, height: 40}}/>
      )
     }

     else if (routeName == 'Write'){
      return (
        <Image source = {require("./assets/write.png")}
        style = {{width: 40, height: 40}}/>
      )
     }
  }
})
})

const AppContainer = createAppContainer(TabNavigator)