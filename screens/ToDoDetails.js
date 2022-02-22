import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import ToDoItem from  '../components/ToDoItem';

export default class ToDoDetails extends Component {
  
  render() {
    const { navigation, route } = this.props;
    let { toDoTitle, toDoStatus, toDoBody } = route.params;
    return (
      <View>
        <Text>To Do Details</Text>
      </View>
    );
  }
}
