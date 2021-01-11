import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import singInStyles from "../SignIn/SignInStyles";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
} from "native-base";
import Hr from "react-native-hr-component";
import NavBar from "../../components/NavBar";

const SignIn = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} />
      <View>
        <Text>Sign in page</Text>
      </View>
    </>
  );
};

export default SignIn;
