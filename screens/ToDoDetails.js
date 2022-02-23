import React, { Component } from "react";
import { StyleSheet, Pressable,Text, View,Button,TextInput,SafeAreaView} from 'react-native';


export default class ToDoDetails extends Component {
  
  render() {
    const { route} = this.props;
    let { item } = route.params;
    
    return (

      <SafeAreaView style={styles.container} >
      <Text>To Do Details</Text>
      <Text> Task: {item.title} </Text>
      <Text> Status: {item.status? "Completed": "Not Completed"} </Text>
      <Text> Description: {item.body} </Text>
      </ SafeAreaView>        
    )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },

});
    

