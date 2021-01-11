import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
import userAreaStyles from "../UserArea/UserAreaStyles";
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

const UserArea = ({ navigation }) => {
  return (
    <>
      <NavBar navigation={navigation} />
      <View>
        <Text>User area page</Text>
      </View>
    </>
  );
};

export default UserArea;
