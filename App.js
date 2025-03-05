import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import các màn hình
import WelcomeScreen from "./src/login/WelcomeScreen";
import LoginScreen from "./src/login/LoginScreen";
import RegisterScreen from "./src/login/RegisterScreen";
import WelcomeQuizScreen from "./src/quizwelcome/WelcomeQuizScreen";
import LevelQuizScreen from "./src/quizwelcome/LevelQuizScreen";
import HomeScreen from "./src/home/HomeScreen ";
import ListeningScreen from "./src/skills/ListeningScreen";
import ReadingScreen from "./src/skills/ReadingScreen";
import SpeakingScreen from "./src/skills/SpeakingScreen";
import WritingScreen from "./src/skills/WritingScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="WelcomeQuizScreen" component={WelcomeQuizScreen} />
        <Stack.Screen name="LevelQuizScreen" component={LevelQuizScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListeningScreen" component={ListeningScreen} />
        <Stack.Screen name="ReadingScreen" component={ReadingScreen} />
        <Stack.Screen name="SpeakingScreen" component={SpeakingScreen} />
        <Stack.Screen name="WritingScreen" component={WritingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
