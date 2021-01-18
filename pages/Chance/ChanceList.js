import React from "react";

import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
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
import NavBar from "../../components/NavBar";

import ColorLine from "../../components/ColorLine";
import BlankSquare from "../../components/BlankSquare.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import ChanceListstyles from "./ChanceListStyles";
//////////////////////////////////////////////////////////////

const ChanceList = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"ChanceList"} />
      <View
        style={{ width: "100%", height: "1%", backgroundColor: "#009C4A" }}
      ></View>
      <Container>
        <ScrollView>
          <View style={homestyles.container}>
            <View
              style={{
                width: "100%",
                height: "15%",
                backgroundColor: "#F2F2F2",
              }}
            ></View>

            <View>
              <BlankSquare />
            </View>

            <View
              style={{
                width: "100%",
                height: "1%",
                backgroundColor: "#009C4A",
              }}
            ></View>

            <List
              style={{
                width: "100%",
              }}
            >
              <ListItem
                style={{
                  backgroundColor: "#009C4B",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: "2%",
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: 33,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      צ'אנס רגיל
                    </Text>
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
                      onPress={() => navigation.navigate("ChancePage")}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#009C4B",
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
              <ListItem
                style={{
                  backgroundColor: "#009C4B",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: "2%",
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: 33,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      רב צ'אנס
                    </Text>
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
                          color: "#009C4B",
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
              <ListItem
                style={{
                  backgroundColor: "#00552B",
                  width: "100%",
                  marginLeft: null,
                  marginVertical: "2%",
                }}
              >
                <Left>
                  <View>
                    <Text
                      style={{
                        fontSize: 33,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      צ'אנס שיטתי
                    </Text>
<<<<<<< HEAD
                  </View>
                </Left>
=======
                  </Button>
                </View>
              </Right>
            </ListItem>
           
          </List>
                      <View style={{ flexDirection: "row" }}>
                          <View style={{height:'50%',backgroundColor:"white"}}></View>
            <Text style={{flex:3, fontSize:25,}}>הסבר על הגרלת צ'אנס</Text>
            <TouchableOpacity
        style={ChanceListstyles.roundButton1}>
                <Text style={{ fontSize: 20, color: "white"}}>+</Text>
      </TouchableOpacity>
              
            <Text style={{flex:1}}>   עוד..</Text>
          </View>
          <View
            style={{  padding: 1,backgroundColor:"#F2F2F2"}}
          >
            <Text style={{fontSize: 10}}>
            לאחר התשלום אנו בלוטומטיק מקבלים את הטופס שמילאתם ושולחים אותו עבורכם בנקודת מכירה מורשית של מפעל הפיס, את הטופס שמילאנו עבורגם בנקודה אנו סורקים ושולחים לכם לתיבת הדואר האלקטרוני ומעלים את הטופס הסרוק לאזור האישי שלכם באפליקציה. הטופס מהקורי יישמר אצלנו במשרדי החברה ובמידה וזכיתם בסכום העולה על 11,000 ש"ח יימסר לכם הטופס באופן אישי.
            </Text>
          </View>
          <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        padding: 30,
      }}
    >
      <View style={{ width: '25%', height: 1, backgroundColor: "#EB2874" }}></View>
      <View style={{ width: '25%', height: 1, backgroundColor: "#009943" }}></View>
      <View style={{ width: '25%', height: 1, backgroundColor: "#E62321" }}></View>
      <View style={{ width: '25%', height: 1, backgroundColor: "#FF6B00" }}></View>
    </View>
    </View>
      
          
>>>>>>> 8e4f3fe9de10178ba11eb15491ccdfa55a2a1a74

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
                          color: "#009C4B",
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
            </List>
            <View style={{ flexDirection: "row" }}>
              <View style={{ height: "50%", backgroundColor: "white" }}></View>
              <Text style={{ flex: 3, fontSize: 25 }}>הסבר על הגרלת צ'אנס</Text>
              <TouchableOpacity style={ChanceListstyles.roundButton1}>
                <Text style={{ fontSize: 20, color: "white" }}>+</Text>
              </TouchableOpacity>

              <Text style={{ flex: 1 }}> עוד..</Text>
            </View>
            <View style={{ padding: 1, backgroundColor: "#F2F2F2" }}>
              <Text style={{ fontSize: 10 }}>
                לאחר התשלום אנו בלוטומטיק מקבלים את הטופס שמילאתם ושולחים אותו
                עבורכם בנקודת מכירה מורשית של מפעל הפיס, את הטופס שמילאנו עבורגם
                בנקודה אנו סורקים ושולחים לכם לתיבת הדואר האלקטרוני ומעלים את
                הטופס הסרוק לאזור האישי שלכם באפליקציה. הטופס מהקורי יישמר אצלנו
                במשרדי החברה ובמידה וזכיתם בסכום העולה על 11,000 ש"ח יימסר לכם
                הטופס באופן אישי.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: 30,
              }}
            >
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#EB2874" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#009943" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#E62321" }}
              ></View>
              <View
                style={{ width: "25%", height: 1, backgroundColor: "#FF6B00" }}
              ></View>
            </View>
          </View>
        </ScrollView>
      </Container>
    </>
  );
};

export default ChanceList;
