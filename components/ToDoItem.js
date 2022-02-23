import React, {Component} from 'react';
import { StyleSheet, Pressable,Text, View,Button,TextInput,SafeAreaView} from 'react-native';
import Checkbox from 'expo-checkbox';
import ToDoDetails from '../screens/ToDoDetails';

export default class ToDoItem extends Component {
  render () {
    const { navigation,item,route} = this.props;

    return (
      <SafeAreaView style={styles.container}>
    
      <Checkbox style={styles.checkbox}
     value={item.status} onValueChange={() => { this.props.onPress(item);}}
     />



      <Pressable onPress={()=>{
         navigation.navigate('ToDoDetails',{item:item})
        }}>

<Text style ={styles.text}>{item.title}</Text>

        </Pressable>
    

      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
            flex:1,

            // have the check box and text be in the same row
            flexDirection: "row",
            
          },
          checkbox: {
            margin: 5
          },
          text:{
              margin:6
          }
});
