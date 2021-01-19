import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";

const Num = ({ num }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 23,
          margin: 3,
        }}
      >
        <Text>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

const StrongNum = ({ num }) => {
  return (
    <>
      <TouchableOpacity
        style={{
          width: 35,
          height: 35,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          margin: 2,
        }}
      >
        <Text style={{ color: "white" }}>{num}</Text>
      </TouchableOpacity>
    </>
  );
};

const FillForm = ({ setshowTable, double }) => {
  var myMap = new Map();
  myMap.size = 4;
  return (
    <>
      <View
        style={{
          backgroundColor: "#263742",
          width: "100%",
          top: "39%",
          height: 420,
          position: "absolute",
          zIndex: 2000,
        }}
      >
        {/* {top 90 deg box} */}
        <View
          style={{
            backgroundColor: "#263742",
            width: "55%",
            height: 70,
            position: "relative",
            top: -40,
            left: "35.4%",
            zIndex: 2001,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <FontAwesomeIcon
                color='white'
                border={true}
                inverse
                icon={faArrowAltCircleRight}
              />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 13 }}>טבלאות</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                color='white'
                border={true}
                inverse
                icon={faArrowAltCircleLeft}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 25,
              padding: 7,
              backgroundColor: "white",
              borderRadius: 13,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setshowTable(false);
            }}
          >
            <Text style={{ color: "red" }}>סגור חלון</Text>
          </TouchableOpacity>
        </View>
        {/* {fill numbers} */}
        <View
          style={{
            borderColor: "white",
            width: "90%",
            height: "65%",
            borderWidth: 1,
            borderRadius: 8,
            alignSelf: "center",
            position: "relative",
            top: -40,
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              marginBottom: 7,
            }}
          >
            <Text style={{ color: "white", marginBottom: 5, fontSize: 10 }}>
              מלא את טבלה 1
            </Text>
            <Button small rounded>
              <Text style={{ fontSize: 10 }}>מלא טבלה אוטומטית</Text>
            </Button>
            <Button small rounded>
              <Text style={{ fontSize: 10 }}>מחק טבלה אוטומטית</Text>
            </Button>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Array.from(Array(37)).map((x, index) => (
              <Num num={index + 1} key={index} />
            ))}
          </View>
        </View>
        <View style={{ marginTop: -16 }}>
          <Text style={{ color: "white", marginHorizontal: 15 }}>
            בחר מספר חזק
          </Text>
          <View
            style={{
              width: "90%",
              height: 50,
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 7,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              alignSelf: "center",
              margin: 2,
            }}
          >
            {Array.from(Array(7)).map((x, index) => (
              <StrongNum num={index + 1} key={index} />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default FillForm;
