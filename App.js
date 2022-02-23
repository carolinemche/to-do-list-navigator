import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// Component imports
import ToDoInput from "./screens/ToDoInput.js";
import ToDoDetails from "./screens/ToDoDetails.js";
import Account from "./screens/Account.js";
import { TouchableOpacity } from "react-native-gesture-handler";

// Initialize Navigations
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class ToDoStack extends Component {
  render() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "black",
          headerStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="toDoInput"
          component={ToDoInput}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="toDoDetails"
          component={ToDoDetails}
          options={{
            title: "To-Do Details",
            headerRight: ({ focused, color, size }) => (
              <TouchableOpacity>
                <Ionicons
                  name={
                    focused ? "checkmark-circle" : "checkmark-circle-outline"
                  }
                  size={30}
                  color={color}
                  style={styles.iconContainer}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "To-Dos") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Account") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "blue",
            tabBarInactiveTintColor: "black",
            tabBarStyle: [
              {
                display: "flex",
              },
            ],
            headerShown: false,
          })}
        >
          <Tab.Screen name="To-Dos" component={ToDoStack} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: "10%",
  },
});
