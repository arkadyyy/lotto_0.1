import React from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";

import styles from "../styles";
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
import Sidebar from "../components/SideBar";

const NavBar = ({ navigation }) => {
  return (
    <Header style={styles.navbar}>
      <Left>
        <Button onPress={() => navigation.toggleDrawer()} transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body></Body>
      <Right>
        <Button
          onPress={() => {
            navigation.navigate("UserArea");
          }}
          style={styles.headerBtns}
          small
          light
          bordered
          rounded
        >
          <Text style={[{ color: "white" }, styles.userAreaBtn]}>
            אזור אישי
          </Text>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("SignIn");
          }}
          style={styles.headerBtns}
          small
          light
          transparent
          rounded
        >
          <View style={styles.signIn}>
            <Text
              style={{
                color: "white",
              }}
            >
              הירשם
            </Text>
          </View>
        </Button>
      </Right>
    </Header>
  );
};
export default NavBar;
