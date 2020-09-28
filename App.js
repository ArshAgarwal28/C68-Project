import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FacebookPage from './screens/Facebook';
import InstagramPage from './screens/Instagram';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
  },
});

const BottomTab = createBottomTabNavigator({
  Facebook: FacebookPage,
  Instagram: InstagramPage
})

const AppContainer = createAppContainer(BottomTab)