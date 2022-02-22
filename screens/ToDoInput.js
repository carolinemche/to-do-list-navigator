import React,{Component} from 'react';
import {  CheckBox, StyleSheet, Text, View,Button,TextInput,SafeAreaView} from 'react-native';



export default class ToDoInput extends Component {
  state = {
    title: "",
    body: "",
    todos:[]

  };

  addToDoItem(){

  }



render(){
 
    return(
        <SafeAreaView style={styles.container}>


        <Text>To Do List</Text>

        {/* INPUTS */}

        <TextInput style = {styles.input} 
        onChangeText={(txt)=>
        {this.setState({title:txt});}}/>

        <TextInput style = {styles.input} 
        onChangeText={(txt)=>
        {this.setState({body:txt});}}/>

        


        </SafeAreaView>

        
// // Text Inputs
// <TextInput 
// style={styles.input}
// onChangeText={(title)=>this.newTitle(title)}
// />

// <TextInput 
// style={styles.input}
// onChangeText={(body)=>this.newBody(body)}
// />

// {/* ADD TO DO BUTTON */}
//   <Button 
//     title="Add to do"
//     onPress={()=>{
//       console.log("hey");
//     }}
//   />

// {/* CLEAR TO DO BUTTON */}
// <Button 
//     title="Clear all"
//     onPress={()=>{
//       console.log("hey");
//     }}
//   />
    );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      marginVertical: 32,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    header:{
      fontSize:24,
      fontWeight:'bold',
      margin:24
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:'90%'
    },
    checkbox: {
      margin: 8,
    },
  });
