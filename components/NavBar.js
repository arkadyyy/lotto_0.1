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
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LogIn from "../redux/actions/actions";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../aws-exports";
import EStyleSheet from "react-native-extended-stylesheet";
import { TouchableOpacity } from "react-native-gesture-handler";

Amplify.configure(awsconfig);

const NavBar = (props) => {
  const { navigation } = props;
  const { screenName } = props;
  const route = useRoute();
  const [navBarTitle, setNavBarTitle] = useState("");
  const [btnText, setbtnText] = useState("אזור אישי");

  const store = useSelector((state) => state);

  useEffect(() => {
    if (route.name === "LottoList") setNavBarTitle("הגרלת לוטו");
    else if (route.name === "ChanceList" || route.name === "ChancePage") {
      setNavBarTitle(`הגרלת צ'אנס`);
    } else if (route.name === "RavChancePage") {
      setNavBarTitle(`רב צ'אנס`);
    } else if (route.name === "ChanceShitatiPage") {
      setNavBarTitle(`צ'אנס שיטתי`);
    } else if (route.name === "SumPageChance") {
      setNavBarTitle(`הגרלות צ'אנס- שליחת טופס`);
    } else if (route.name === "SumPage123") {
      setNavBarTitle(`הגרלת 123- שליחת טופס`);
    } else if (route.name === "SumPage777") {
      setNavBarTitle(`הגרלות 777- שליחת טופס`);
    } else if (route.name === "Sheva77List") {
      setNavBarTitle(`הגרלות 777`);
    } else if (route.name === "One23List") {
      setNavBarTitle(`הגרלות 123`);
    } else if (route.name === "One23Page") {
      setNavBarTitle(`הגרלת 123`);
    } else if (route.name === "SignIn") {
      setNavBarTitle(`הרשמה ופרטי תשלום`);
    } else if (route.name === "LottoPage") {
      setNavBarTitle(`לוטו`);
    } else if (route.name === "DoubleLottoPage") {
      setNavBarTitle(`דאבל לוטו`);
    } else if (route.name === "LottoShitatiPage") {
      setNavBarTitle(`לוטו שיטתי`);
    } else if (route.name === "LottoShitatiHazakPage") {
      setNavBarTitle("לוטו שיטתי חזק");
    } else if (route.name === "Sheva77Page") {
      setNavBarTitle(`הגרלת 777 `);
    } else if (route.name === "Sheva778Page") {
      setNavBarTitle(`הגרלת 778`);
    } else if (route.name === "Sheva779Page") {
      setNavBarTitle(`הגרלת 779`);
    } else if (route.name === "One23Page") {
      setNavBarTitle(`123`);
    } else if (route.name === "SumPageLotto") {
      setNavBarTitle(`הגרלות לוטו- שליחת טופס`);
    } else if (route.name === "ResultList") {
      setNavBarTitle(`תוצאות הגרלות`);
    } else if (route.name === "ResultLotto") {
      setNavBarTitle(`תוצאות הגרלת לוטו`);
    } else if (route.name === "Help") {
      setNavBarTitle(`עזרה`);
    } else if (route.name === "GetInTouch") {
      setNavBarTitle(`צור קשר`);
    }
     else if (route.name === "About") {
      setNavBarTitle(`אודות לוטומטיק`);
    }
     else if (route.name === "HowItWork") {
      setNavBarTitle(`איך זה עובד`);
    }
     else if (route.name === "QuestionsAndAnswers") {
      setNavBarTitle(`שאלות ותשובות`);
    }
     else if (route.name === "TermsOfUse") {
      setNavBarTitle(`תנאי שימוש באתר`);
    }
     else if (route.name === "StatuteTakanon") {
      setNavBarTitle(`תקנון`);
    }
     else if (route.name === "AccessibilityDeclaration") {
      setNavBarTitle(`הצהרת נגישות`);
    }
     else if (route.name === "congratulation") {
      setNavBarTitle(`הטופס נשלח בהצלחה`);
    }
  }, [route.name, screenName]);

  const dispatch = useDispatch();

  return (
    <Header
      style={{
        backgroundColor: "#263742",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Button
        style={{ right: EStyleSheet.value("$rem") * 45 }}
        onPress={() => navigation.toggleDrawer()}
        transparent
      >
        <Icon name='menu' />
      </Button>

      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            textAlignVertical: "center",
            paddingHorizontal: EStyleSheet.value("$rem") * 4,
            fontSize: EStyleSheet.value("$rem") * 15,
            fontFamily: "fb-Spacer",
            right: EStyleSheet.value("$rem") * 25,
          }}
        >
          {navBarTitle}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "yellow",
          alignSelf: "center",
          left: 15,
        }}
      >
        <Button
          onPress={() => {
            if (store.user === "LOGIN_FAILED") {
              navigation.navigate("LogInPage");
            } else if (store.user === -1) {
              navigation.navigate("LogInPage");
            } else {
              navigation.navigate("UserArea");
            }
          }}
          style={[
            styles.headerBtns,
            {
              marginHorizontal: 7,
            },
          ]}
          small
          light
          bordered
          rounded
        >
          <Text
            style={[
              {
                color: "white",
                fontSize: EStyleSheet.value("$rem") * 13,
                fontFamily: "fb-Spacer",
              },
            ]}
          >
            {store.user.attributes ? "אזור אישי" : "התחבר"}
          </Text>
        </Button>
        {props.screenName === "home" && (
          <Button
            onPress={() => {
              navigation.navigate("SignIn");
            }}
            style={[
              styles.headerBtns,
              {
                marginHorizontal: 7,
              },
            ]}
            small
            light
            transparent
            rounded
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontFamily: "fb-Spacer",
                  fontSize: EStyleSheet.value("$rem") * 15,
                }}
              >
                הרשם
              </Text>
            </View>
          </Button>
        )}
      </View>
    </Header>
  );
};
export default NavBar;
