import "react-native-gesture-handler";
import * as React from "react";
import drawerstyles from "./DrawerContentStyles";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Hr from "react-native-hr-component";
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
  Drawer,
} from "native-base";
import ColorLine from "../../components/ColorLine";
import { useSelector, useDispatch } from "react-redux";

//////////////////////////////////////////////////////////

export default function DrawerContent(props) {
  const { navigation } = props;

  const store = useSelector((state) => state);
  return (
    <View style={{ flex: 1, backgroundColor: "#263742" }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            marginTop: 70,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          {store.name === "אורח" ? (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={drawerstyles.text}>שלום {store.name}</Text>
              </View>
              <Hr text={null} lineColor='#eee' width={1} />

              <ColorLine />
            </View>
          ) : (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={drawerstyles.text}>שלום {store.name}</Text>
                <Text style={drawerstyles.text}>0.00</Text>
              </View>
              <Hr text={null} lineColor='#eee' width={1} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity>
                  <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                    טפסים פעילים
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                    היסטורית שליחות
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                    הגדרות
                  </Text>
                </TouchableOpacity>
              </View>

              <ColorLine />
            </View>
          )}
        </View>

        <View style={{ marginLeft: 8 }}>
          <DrawerItem
            labelStyle={drawerstyles.labelStyle}
            label='כל המשחקים'
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          {store.name !== "אורח" && (
            <DrawerItem
              labelStyle={drawerstyles.labelStyle}
              label='תוצאות הגרלה'
              onPress={() => {
                props.navigation.navigate("ResultList");
              }}
            />
          )}
          <DrawerItem
            labelStyle={drawerstyles.labelStyle}
            label='עזרה'
            onPress={() => {
              props.navigation.navigate("Help");
            }}
          />
          <DrawerItem
            labelStyle={drawerstyles.labelStyle}
            label='שאלות ותשובות'
            onPress={() => {
              props.navigation.navigate("QuestionsAndAnswers");
            }}
          />
          <DrawerItem
            labelStyle={drawerstyles.labelStyle}
            label='אודות'
            onPress={() => {
              props.navigation.navigate("About");
            }}
          />
          <DrawerItem
            labelStyle={drawerstyles.labelStyle}
            label='צור קשר'
            onPress={() => {
              props.navigation.navigate("GetInTouch");
            }}
          />
        </View>
        <ColorLine />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            style={{
              borderBottomColor: "white",
              borderBottomWidth: 0.2,

              margin: 15,
            }}
          >
            <Text style={[drawerstyles.text, { fontSize: 12 }]}>
              הצהרת נגישות
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
                              onPress={() => navigation.navigate("TermsOfUse")}

            style={{
              borderBottomColor: "white",
              borderBottomWidth: 0.2,

              margin: 15,
            }}
          >
            <Text style={[drawerstyles.text, { fontSize: 12 }]}>
              תנאי שימוש באתר
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
                                          onPress={() => navigation.navigate("StatuteTakanon")}

            style={{
              borderBottomColor: "white",
              borderBottomWidth: 0.2,

              margin: 15,
            }}
          >
            <Text style={[drawerstyles.text, { fontSize: 12 }]}>תקנון</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 15 }}>
          <TouchableOpacity style={{ marginBottom: 7 }}>
            <Text style={drawerstyles.text}>העמוד שלנו בפייסבוק</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={drawerstyles.text}>העמוד שלנו באינסטגרם</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
