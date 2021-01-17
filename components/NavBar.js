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
import { useState } from "react";

const NavBar = (props) => {
  const { navigation } = props;
  // let propsTitleText;
  // if (props.titleText === 'הרשם') { propsTitleText = styles.homeNav }
  // else if (props.titleText === 'הרשמה ופרטי תשלום') { propsTitleText = styles.signNav };
  let propsScreenName;
  if (props.screenName === 'home') { propsScreenName = styles.homeNav }
  else if (props.screenName === 'signIn') { propsScreenName = styles.signNav };
  

  return (
    <Header style={styles.navbar}>
      <Left>
        <Button onPress={() => navigation.toggleDrawer()} transparent>
          <Icon name='menu' />
        </Button>
        
      </Left>
      {props.screenName === 'signIn' && (      
        <Body>
            <View>
              <Text
            style={{
              color: "white",
              marginLeft:50
                }}
              >
                הרשמה ופרטי תשלום
            </Text>
            </View>
        </Body>
        
       
)}
      {props.screenName === 'ChooseGame' && (      
        <Body>
            <View>
              <Text
            style={{
              color: "white",
              marginLeft:50
                }}
              >
                הגרלת לוטו
            </Text>
            </View>
        </Body>
        
       
)}
      
      <Right>

        
          <View style={{ flexDirection: 'row' }}>
           
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
            {props.screenName === 'home' && (<Button
              onPress={() => {
                navigation.navigate("SignIn");
              }}
              style={styles.headerBtns}
              small
              light
              transparent
              rounded
            >
              <View>
                <Text
                  style={{
                    color: "white",

                
                  }}
                >
                  הרשם
            </Text>
              </View>
            </Button>)}
          </View>
        

</Right>
    </Header>
  );
};
export default NavBar;