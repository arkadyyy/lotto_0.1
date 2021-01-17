import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
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

const LottoPage = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare color='#E62321' />
        <View
          style={{
            backgroundColor: "blue",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: 15,
            }}
          >
            <Text>בחר סוג טופס</Text>
            <View>
              <Button
                style={{ backgroundColor: "white", margin: 10 }}
                small
                rounded
              >
                <Text>רגיל</Text>
              </Button>
            </View>

            <View>
              <Button
                style={{ backgroundColor: "#E62321", margin: 10 }}
                small
                rounded
              >
                <Text>דאבל</Text>
              </Button>
            </View>
          </View>
          <View style={{ backgroundColor: "#E62321", padding: 3 }}>
            <Button
              style={{ backgroundColor: "white", margin: 10 }}
              small
              rounded
            >
              <Text style={{ color: "#E62321" }}>שלח טופס</Text>
            </Button>
          </View>
        </View>
        <Container style={{ margin: 20 }}>
          <View style={{ backgroundColor: "#E62321" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 33,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "#E62321" }}>1</Text>
              </View>
              <Text>מלא את הטופס</Text>
            </View>
            <View
              style={{
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 7,
                width: "90%",
                margin: 10,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 15, color: "white" }}>
                בחר מספר טבלאות למילוי
              </Text>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "#263742",
                      borderColor: "white",
                      borderWidth: 1,
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>7</Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "white",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>6</Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "#FFFF00",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>5</Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "white",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>4</Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "white",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>3</Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "white",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>2</Text>
                  </View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "white",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>1</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={{ color: "white", fontSize: 15 }}>
              בחר 6 מספרים וחזק
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button style={{ borderColor: "white" }} small rounded bordered>
                <Text style={{ color: "white" }}>מלא טבלה אוטומטית</Text>
              </Button>
              <Button style={{ borderColor: "white" }} small rounded bordered>
                <Text style={{ color: "white" }}>מחק טבלה אוטומטית</Text>
              </Button>
              <Button style={{ borderColor: "white" }} small rounded bordered>
                <Text style={{ color: "white" }}>מלא טופס אוטומטי</Text>
              </Button>
            </View>
            <View
              style={{
                height: 200,
                borderColor: "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "90%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <List
                style={{
                  alignItems: "flex-start",
                }}
              >
                <ListItem
                  style={{
                    backgroundColor: "#8CC63F",

                    marginTop: 4,
                  }}
                >
                  <Text>טבלה 1</Text>
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: "#263742",
                        borderColor: "white",
                        borderWidth: 1,
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ color: "white" }}>7</Text>
                    </View>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: "white",
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>6</Text>
                    </View>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: "#FFFF00",
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>5</Text>
                    </View>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: "white",
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>4</Text>
                    </View>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: "white",
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>3</Text>
                    </View>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: "white",
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>2</Text>
                    </View>
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 30,
                        backgroundColor: "white",
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text>1</Text>
                    </View>
                  </View>
                </ListItem>
              </List>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  borderRadius: 17,
                  backgroundColor: "#8CC63F",
                  borderColor: "white",
                  borderWidth: 2,
                }}
              >
                <Text style={{ color: "white", fontSize: 28 }}>שלח טופס</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>הסבר על הגרלות לוטו</Text>
            <TouchableOpacity>
              <Text>עוד</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </ScrollView>
    </>
  );
};
export default LottoPage;
