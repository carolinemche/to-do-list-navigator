import React, {Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,SafeAreaView} from 'react-native';
import Checkbox from 'expo-checkbox';
import ToDoDetails from '../screens/ToDoDetails'

export default class ToDoItem extends Component {
  render () {
    const { navigation, route } = this.props;

    return (
      <SafeAreaView style={styles.container}>
      
    

      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: "center",
          }
 
});
