import React from "react";
import { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import logInStyles from "./LogInStyles";
import {
  Container,
  Item,
  Content,
  Header,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Radio,
  ListItem,
  CheckBox,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "../../components/NavBar";
import { color } from "react-native-reanimated";
import ColorLine from "../../components/ColorLine";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";

import { LogIn } from "../../redux/actions/actions";
Amplify.configure(awsconfig);

const LogInPage = ({ navigation }) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    dispatch(LogIn("dlevkovich05@gmail.com", "Dekel1145"));
  }, []);

  return (
    <>
      <NavBar navigation={navigation} screenName={"signIn"} />

      <View
        style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
      ></View>
      <ScrollView style={{ flex: 1 }}>
        <View style={logInStyles.container}>
          <View style={logInStyles.blanksquare}></View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{ width: "100%", height: 7, backgroundColor: "#00ADEF" }}
            ></View>
            {/* 00ADEF Deep Sky Blue*/}

            <View
              style={[
                logInStyles.detailsSquare,
                { height: "80%", padding: 20 },
              ]}
            >
              <Text
                style={{ color: "white", fontSize: 28, marginVertical: 10 }}
              >
                התחבר
              </Text>
              <Item last rounded style={logInStyles.signInPageInput}>
                <Input
                  fontSize={12}
                  placeholder='שם משתמש'
                  onChangeText={(text) => setusername(text)}
                />
              </Item>
              <Item last rounded style={logInStyles.signInPageInput}>
                <Input
                  fontSize={12}
                  placeholder='סיסמה'
                  onChangeText={(text) => setpassword(text)}
                />
              </Item>

              <Button
                rounded
                style={{
                  backgroundColor: "#FBB03B",
                  borderColor: "white",
                  borderWidth: 2,
                  borderRadius: 17,
                  flex: 1,
                  marginVertical: 20,
                  marginHorizontal: 70,
                }}
                onPress={async () => {
                  console.log(username, password);
                  await dispatch(LogIn(username, password));
                  if (store.user !== -1) {
                    navigation.navigate("UserArea");
                    navigation;
                  } else {
                    alert("login failed");
                  }
                }}
              >
                <Text
                  style={{
                    color: "white",
                    flex: 1,
                    fontSize: 30,
                    textAlign: "center",
                  }}
                >
                  התחבר
                </Text>
              </Button>
            </View>
          </View>

          <ColorLine />
        </View>
      </ScrollView>
    </>
  );
};

export default LogInPage;
