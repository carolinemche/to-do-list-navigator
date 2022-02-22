import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,SafeAreaView} from 'react-native';
import ToDoItem from  '../components/ToDoItem';



export default class ToDoInput extends Component {
  state = {
    title: "",
    body: "",
    todos:[]

  };

  addToDoItem(){

    let currentTitle = this.state.title;
    let currentBody = this.state.body;
    let todolist = this.state.todos;
    
    
    let task ={
      id: todolist.length,
      title: currentTitle ,
      body: currentBody,
      // completion task
      status: false
    }

    //add task to the to do list
    todolist.push(task);

    }
   

  



  render() {
    const { navigation, route } = this.props;
    let { title,body,todos } = this.state;
  

 
    return(
        <SafeAreaView style={styles.container}>


        {/* CURRENT TO DOS */}
        <Text style = {styles.header}>To Do List</Text>
        
        {/* INPUTS */}

        <Text>Title</Text>
        <TextInput style = {styles.input} 
        onChangeText={(txt)=>
        {this.setState({title:txt});}}/>

        <Text>Body</Text>
        <TextInput style = {styles.input} 
        onChangeText={(txt)=>
        {this.setState({body:txt});}}/>

          {/* BUTTONS */}

        <Button 
          title="Add To Do Item"
          onPress={()=> this.addToDoItem()}
        />

        <Button 
          title="Clear All To Dos"
          onPress={()=> {this.setState({todos:[]});}}/>



        </SafeAreaView>

  

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
  
  });
