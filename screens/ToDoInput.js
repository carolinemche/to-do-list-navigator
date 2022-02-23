import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,FlatList,SafeAreaView} from 'react-native';
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
    let todolist = this.state.todos

    
    
    let item ={
      title: currentTitle ,
      body: currentBody,
      // completion task
      status: false
    }

    //add task to the to do list
    todolist.push(item);
    this.setState({todos: todolist,title:'',body:''})

    }
   
    onPress(item){

      //change to opposite status depending on current status
      item.status = !item.status;
      this.setState({todos:this.state.todos});
    }


  
  


  render() {
    const { navigation, route,task } = this.props;
    let {todos } = this.state;
  

 
    return(
        <SafeAreaView style={styles.container}>


        {/* CURRENT TO DOS */}
        <Text style = {styles.header}>To Do List</Text>

        <View style = {styles.section}>
        <FlatList
            data={todos}
            renderItem={({ item }) => (
            <ToDoItem item={item} navigation = {navigation}
              onPress={(item) => this.onPress(item)} />
            )}
          />



      </View>

        
        {/* INPUTS */}

        <Text>Title</Text>
        <TextInput style = {styles.input} 
        onChangeText={(txt)=>
        {this.setState({title:txt});}}/>

        <Text>Description</Text>
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
      marginBottom: 20
    },
    header:{
      fontSize:24,
      fontWeight:'bold',
      marginBottom: 10
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:'90%'
    },
  
  });
