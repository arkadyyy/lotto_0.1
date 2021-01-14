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

//////////////////////////////////////////////////////////

export default function DrawerContent(props) {
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
          <View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={drawerstyles.text}>שלום משתמש</Text>
              <Text style={drawerstyles.text}>0.00</Text>
            </View>
            <Hr text={null} lineColor='#eee' width={1} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Button transparent>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 0.2,
                    padding: 5,
                  }}
                >
                  <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                    טפסים פעילים
                  </Text>
                </View>
              </Button>
              <Button transparent>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 0.2,
                    padding: 5,
                  }}
                >
                  <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                    היסטורית שליחות
                  </Text>
                </View>
              </Button>
              <Button transparent>
                <View
                  style={{
                    borderBottomColor: "white",
                    borderBottomWidth: 0.2,
                    padding: 5,
                  }}
                >
                  <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                    הגדרות
                  </Text>
                </View>
              </Button>
            </View>

            <ColorLine />
          </View>
        </View>

        <View style={{ marginLeft: 8 }}>
          <DrawerItem
            labelStyle={{
              color: "white",
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
            label='כל המשחקים'
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
            label='תוצאות הגרלה'
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            labelStyle={{
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
            label='עזרה'
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
            label='שאלות ותשובות'
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
            label='אודות'
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            labelStyle={{
              color: "white",
              borderBottomColor: "white",
              borderBottomWidth: 1,
            }}
            label='צור קשר'
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
        </View>
        <ColorLine />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button transparent>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 0.2,

                margin: 15,
              }}
            >
              <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                הצהרת נגישות
              </Text>
            </View>
          </Button>
          <Button transparent>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 0.2,
              }}
            >
              <Text style={[drawerstyles.text, { fontSize: 12 }]}>
                תנאי שימוש באתר
              </Text>
            </View>
          </Button>
          <Button transparent>
            <View
              style={{
                borderBottomColor: "white",
                borderBottomWidth: 0.2,
              }}
            >
              <Text style={[drawerstyles.text, { fontSize: 12 }]}>תקנון</Text>
            </View>
          </Button>
        </View>
        <Button transparent>
          <Text style={drawerstyles.text}>העמוד שלנו בפייסבוק</Text>
        </Button>
        <Button transparent>
          <Text style={drawerstyles.text}>העמוד שלנו באינסטגרם</Text>
        </Button>
      </DrawerContentScrollView>
    </View>
  );
}
