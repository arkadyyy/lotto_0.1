import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
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
  Content,
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { faUnderline } from "@fortawesome/free-solid-svg-icons";


const ActiveForms = ({ navigation,activeforms }) => {
  useEffect(() => {
    console.log("activeforms : ", activeforms);
  }, []);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            fontFamily: "fb-Spacer",
            flex: 1,
          }}
        >
          מספר
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,

            fontFamily: "fb-Spacer",
            flex: 1.1,
          }}
        >
          תאריך ושעה
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 1.1,
            fontFamily: "fb-Spacer",
          }}
        >
          עלות הטופס
        </Text>
      
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            fontFamily: "fb-Spacer",
            flex: 1,
          }}
        >
          סטטוס
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            fontFamily: "fb-Spacer",
            flex: 1,
          }}
        >
          טופס
        </Text>
      </View>

     
        {activeforms ?
           <List
           style={{
             marginLeft: 20,
             marginRight: 20,
             backgroundColor: "#00AEEF",
   
             width: "98%",
             marginTop: 10,
           }}
         >
          {activeforms.map((form, index) => {
            return (
              <>
            <ListItem key={index} style={{right:11,justifyContent:"space-between"}}>
                  <View style={{
                    width: EStyleSheet.value("$rem") * 53 
                  }}>

                            <Text
                             style={{
                              fontSize: 12,
                              color: "white",
                              fontFamily: "fb-Spacer",
                            }}
                    >{form["מספר"]}
                    </Text>
                </View>
                  <View style={{
                    width: EStyleSheet.value("$rem") * 53 
                  }}>

                            <Text
                             style={{
                              fontSize: 12,
                              color: "white",
                        fontFamily: "fb-Spacer",
                              right:EStyleSheet.value("$rem") * 13
                            }}
                    >{form["תאריך ושעה"]}
                    </Text>
                </View>
                  <View style={{
                    width: EStyleSheet.value("$rem") * 23 
                    
                  }}>

                            <Text
                             style={{
                              fontSize: 12,
                              color: "white",
                              fontFamily: "fb-Spacer",
                            }}
                    >{form["עלות הטופס"]}
                    </Text>
                </View>
                  <View style={{
                    width: EStyleSheet.value("$rem") * 28 
                  }}>

                            <Text
                             style={{
                              fontSize: 12,
                              color: "white",
                        fontFamily: "fb-Spacer",
                        left:EStyleSheet.value("$rem") * 13

                            }}
                    >{form["סטטוס"]}
                    </Text>
                </View>
                {/* <View style={{ marginRight: 45, flex: 2.2 }}> */}
                  <TouchableOpacity
                    style={{
                    borderColor: "white",
                    width: EStyleSheet.value("$rem") * 55,
                    backgroundColor: "transparent",
                    left:EStyleSheet.value("$rem") * 23

                  }}>
                            <Text
                             style={{
                              fontSize: 12,
                              color: "white",
                        fontFamily: "fb-Spacer",
                              textDecorationLine:"underline"
                            }}
                    >הורד קבלה
                    </Text>
                    </TouchableOpacity>
                {/* </View> */}
                          </ListItem>
          </>
            )
            
          }
           
         )}
          </List>
:
<View
style={{
  marginLeft: 20,
  marginRight: 20,
  backgroundColor: "#00AEEF",
  height: 200,
  width: "98%",
  marginTop: 10,
  justifyContent: "center",
  alignItems: "center",
}}
>
<Text
              style={{
                color: "white",
                fontSize: 20,
                borderBottomWidth: 1,
                borderBottomColor: "white",
                marginBottom: 10,
                fontFamily: "fb-Spacer",
              }}
            >
              אין ברשותך טפסים פעילים.
        </Text>
            <Button
              rounded
              style={{
                backgroundColor: "#FBB03B",
                borderColor: "white",
                borderWidth: 2,
                flex: 1,

                marginHorizontal: 70,
              }}
              onPress={navigation.navigate("Home")}
            >
              <Text
                style={{
                  color: "white",
                  flex: 1,
                  fontSize: 30,
                  textAlign: "center",
                  fontFamily: "fb-Spacer-bold",
                }}
              >
                שלח טופס
          </Text>
            </Button>
          
      </View>
        
}
    </>
  );
};

export default ActiveForms;
