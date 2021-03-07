import React from "react";
import { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
import ColorLine from "../../components/ColorLine";
import BlankSquare from "../../components/BlankSquare.js";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import LottoListstyles from "../Lotto/LottoListStyles";
//////////////////////////////////////////////////////////////

const One23List = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"One23List"} />

      <Container>
        <ScrollView>
          <View style={homestyles.container}>
            <View>
              <BlankSquare color={"#FF5F00"} gameName='הגרלת 123' />
            </View>

            <List
              style={{
                width: "100%",
                marginTop: "10%",
              }}
            >
              <ListItem
                style={{
                  backgroundColor: "#FF5F00",
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
                        marginHorizontal: 20,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      123
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
                      onPress={() => navigation.navigate("One23Page")}
                    >
                      <Text
                        style={{
                          color: "red",
                          fontSize: 10,
                          padding: 15,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        שחק עכשיו
                      </Text>
                    </Button>
                  </View>
                </Right>
              </ListItem>
            </List>
            <View style={{ flexDirection: "row", margin: 12 }}>
              <View style={{ height: "50%", backgroundColor: "white" }}></View>
              <Text
                style={{
                  flex: 4,
                  fontSize: 16,
                  fontFamily: "fb-Spacer",
                  alignSelf: "flex-start",
                  paddingHorizontal: 8,
                }}
              >
                הסבר על הגרלות 123
              </Text>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <TouchableOpacity
                  style={{
                    width: 20,
                    height: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "baseline",
                    borderRadius: 100,
                    backgroundColor: "#1F3842",
                  }}
                >
                  <Text style={{ fontSize: 20, color: "white" }}>+</Text>
                </TouchableOpacity>

                <Text
                  style={{
                    flex: 1,
                    fontFamily: "fb-Spacer",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  עוד...
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 1,
                backgroundColor: "#F2F2F2",
                marginHorizontal: 8,
                fontFamily: "fb-Spacer",
              }}
            >
              <Text
                style={{ fontSize: 10, fontFamily: "fb-Spacer", padding: 10 }}
              >
הגרלת 123 הכי פשוט הכי קליל 
הגרלת 123 הינה אחד המשחקים הכי פשוטים נוחים וקלים שיש. 
סיכויי הזכייה ב123 הינם אדירים
כל שעליך לעשות הוא לנחש שלושה מספרים מתוך עשרה (מ0 ועד 9) וכמו כן את סדר עלייתם בגורל משמאל לימין.  
מתי זה קורה? 
ההגרלה מתקיימת כל יום פעם ביום. בימים א׳-ה׳ בשעה 21:00. ביום ו׳ בשעה 13:00 ואילו בצאת השבת בשעה 22:25. 
איך זה עובד?
ההגרלה נערכת על ידי שלוש מכונות, כאשר המכונה השמאלית מגרילה את המספר הראשון המכונה האמצעית מגרילה את המספר השני ואילו המכונה הימנית מגרילה את המספר השלישי. 
בהגרלה זו עליך לנחש את המספרים שיעלו בגורל ובהתאם לסדר שעלו משמאל לימין. 
את המספרים יש לבחור מתוך עשרה מספרים מהספרה 0 ועד הספרה 9. 
בכל טופס של 123 ישנם חמש טבלאות כאשר בכל טבלה שלוש שורות כאשר בכל שורה מופיעות הספרות 0 עד 9. 
ניתן למלא בכל טופס מטבלה אחת ועד חמש, בכל טבלה ישנם שלוש שורות- עליך לסמן בכל שורה ספרה אחת- סה״כ שלוש ספרות בטבלה לפי הסדר שלדעתך יעלה בגורל. כאשר הספרה שנבחרה בשורה הראשונה תהיה המספר השמאלי ביותר ואילו השורה השניה תהיה המספר האמצעי ואילו השורה השלישית תהיה המספר הימני. 
סכום הזכייה מורכב מסכום ההשקעה כפול 600. ניתן למלא בכל סכום משקל בודד ועד 500 ש״ח. 
אין זכייה חלקית או פרס ביניים אלא זכייה מלאה בלבד. בכדי לזכות עליך לנחש את שלושת המספרים שיעלו בגורל על פי סדרם. 
מלבד סימון ידני קיימת האפשרות גם לסימון לוטומטי מלא או חלקי ( כלומר חלק לסמן ידני ואת השאר לתת למכונה להשלים).
אפשרות הרב הגרלתי- השתתפות במספר הגרלות מראש על פי בחירה,  המספרים שסימנתם בטופס יוכלו להשתתף באופן אוטומטי גם בהגרלות הבאות ומספרם יקבע על פי החלטתכם. 

אז 1..2.. ו3 מהרו לשלוח טופס המזל איתכם!              </Text>
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

export default One23List;
