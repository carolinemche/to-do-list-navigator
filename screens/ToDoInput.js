import React, { Component } from "react";
import {
  CheckBox,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
// Component imports
import ToDoList from "../components/ToDoList";

export default class ToDoInput extends Component {
  state = {
    todoItems: [],
    newItemTitle: "",
    newItemBody: "",
  };

  // Called when pressing "Add To Do" button
  addItem() {
    const newList = this.state.todoItems;
    newList.push([this.state.newItemTitle, this.state.newItemBody]);

    this.setState(
      {
        todoItems: newList,
        newItemTitle: "",
        newItemBody: "",
      },
      () => {}
    );
  }

  // Called when pressing "Clear" button
  clearItems() {
    this.setState(
      {
        todoItems: [],
      },
      () => {}
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>To-Do List</Text>

        <ToDoList navigation={navigation} todoList={this.state.todoItems} />

        <View style={styles.inputsContainer}>
          <Text>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={(item) => {
              this.setState({ newItemTitle: item });
            }}
            value={this.state.newItemTitle}
          />

          <Text>Body</Text>
          <TextInput
            style={styles.input}
            onChangeText={(item) => {
              this.setState({ newItemBody: item });
            }}
            value={this.state.newItemBody}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Add to do"
            onPress={() => {
              this.addItem();
            }}
          />

          <Button
            title="Clear"
            onPress={() => {
              this.clearItems();
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // Horizontal alignment
    justifyContent: "flex-start", // Vertical alignment
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: "10%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputsContainer: {
    width: "90%",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
});
