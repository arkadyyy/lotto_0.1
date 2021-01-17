import React from "react";
import { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
  Image,
} from "react-native";
import homestyles from "../Home/HomeStyles";
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
  List,
  ListItem,
} from "native-base";
import Hr from "react-native-hr-component";
import NavBar from "../../components/NavBar";
import styles from "../../styles";
import BlankSquare from "../../components/BlankSquare";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
//////////////////////////////////////////////////////////////
 
  const ChooseGame = (props) => {
    const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"ChooseGame"} />
      <View
        style={{ width: "100%", height: "2%", backgroundColor: "red" }}
      ></View>
      <Container>
        <ScrollView>
          <View style={homestyles.container}>
            <View>
            <BlankSquare/>
            </View>
            <View
              style={{ width: "100%", height: '7%' }}>
              <Text> Timer component will be here</Text>
            
            </View>
            
          </View>
          <View
        style={{ width: "100%", height: "2%", backgroundColor: "red" }}
          ></View>
          
          <List
        style={{
          width: "100%",
          marginTop: '10%',
        }}
      >
            <ListItem style={{
            backgroundColor: "red",width:"100%",marginLeft:null,marginVertical:"2%"
            }}>
              <Left>
              <View>
            <Text style={{ fontSize: 24, color: "white" }}>לוטו רגיל</Text>
          </View>
              </Left>
         
              <Right>
              <View>
          <Button
                  small
                  style={{
                    borderRadius: 13,
                    backgroundColor: "white",
                  }}
                  // onPress={() => navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      fontSize: 10,
                      padding: 15,
                    }}
                  >
                    שחק עכשיו
                  </Text>
                </Button>
          </View>
              </Right>
        </ListItem>
        <ListItem style={{
            backgroundColor: "red",width:"100%",marginLeft:null,marginVertical:"2%"
            }}>
              <Left>
              <View>
            <Text style={{ fontSize: 24, color: "white" }}>דאבל לוטו</Text>
          </View>
              </Left>
         
              <Right>
              <View>
          <Button
                  small
                  style={{
                    borderRadius: 13,
                    backgroundColor: "white",
                  }}
                  // onPress={() => navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      fontSize: 10,
                      padding: 15,
                    }}
                  >
                    שחק עכשיו
                  </Text>
                </Button>
          </View>
              </Right>
        </ListItem>
        <ListItem style={{
            backgroundColor: "red",width:"100%",marginLeft:null, marginVertical:"2%"
            }}>
              <Left>
              <View>
            <Text style={{ fontSize: 24, color: "white" }}>לוטו שיטתי</Text>
          </View>
              </Left>
         
              <Right>
              <View>
          <Button
                  small
                  style={{
                    borderRadius: 13,
                    backgroundColor: "white",
                  }}
                  // onPress={() => navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      fontSize: 10,
                      padding: 15,
                    }}
                  >
                    שחק עכשיו
                  </Text>
                </Button>
          </View>
              </Right>
        </ListItem>
        <ListItem style={{
            backgroundColor: "red",width:"100%",marginLeft:null,marginVertical:"2%"
            }}>
              <Left>
              <View>
            <Text style={{ fontSize: 24, color: "white" }}>לוטו שיטתי חזק</Text>
          </View>
              </Left>
         
              <Right>
              <View>
          <Button
                  small
                  style={{
                    borderRadius: 13,
                    backgroundColor: "white",
                  }}
                  // onPress={() => navigation.navigate("Home")}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      fontSize: 10,
                      padding: 15,
                    }}
                  >
לוטו שיטתי חזק                  </Text>
                </Button>
          </View>
              </Right>
        </ListItem>
        
        

       

        </List>
<View style={{backgroundColor:"red"}}><Text>הסבר על הגרת הלוטו</Text></View>

         
        </ScrollView>
      </Container>
      </>
  );
};

export default ChooseGame;
