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
import Sheva77Liststyles from "./Sheva77ListStyles";
//////////////////////////////////////////////////////////////

const Seva77List = (props) => {
  const { navigation } = props;

  return (
    <>
      <NavBar navigation={navigation} screenName={"Seva77List"} />

      <ScrollView>
        <View style={homestyles.container}>
          <View>
            <BlankSquare color='#CC1D64' gameName='הגרלת 777' />
          </View>

          <List
            style={{
              width: "100%",
            }}
          >
            <ListItem
              style={{
                backgroundColor: "#FF006A",
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
                    777
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
                    onPress={() => navigation.navigate("Sheva77Page")}
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
            <ListItem
              style={{
                backgroundColor: "#E2005B",
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
                    777 שיטתי 8
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
                    onPress={() => navigation.navigate("Sheva778Page")}
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
            <ListItem
              style={{
                backgroundColor: "#E2005B",
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
                    777 שיטתי 9
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
                    onPress={() => navigation.navigate("Sheva779Page")}
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
              הסבר על הגרלות 777
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
             777 – כל אחד זוכה!
הגרלת 777 ייחודית במינה ואחד המשחקים הפופולאריים ביותר. 
להגרלת ה777 מספר יתרונות מובהקים.
•	סיכויי זכייה גבוהים במיוחד. 
•	הזכייה בפרס הראשון הינה קבועה ואינה מתחלקת בין הזוכים, כלומר ניחשתם נכונה שבעה מספרים הסכום קבוע והוא שלכם בלבד. 
•	כל אחד זוכה, ניחשתם נכונה שבעה מספרים זכיתם ב70,000 ש״ח, ניחשתם נכונה 6 מספרים זכיתם ב500 ש״ח, ניחשתם נכונה 5 מספרים זכיתם ב50 ש״ח ניחשתם נכונה 4 מספרים זכיתם ב20 ש״ח, לא ניחשתם אף מספר עדין זכיתם בחמישה שקלים- כן כן לא ניחשתם אף מספר ואילו עדין זכיתם! 
מתי זה קורה? 
ההגרלה מתקיימת שבעה ימים בשבוע, בימים א׳-ה׳ ההגרלה מתקיימת פעמיים ביום (13:30 ו19:30) ביום ו׳ בשעה 13:00 ואילו בצאת השבת בשעה 22:25
איך זה עובד?
ישנה טבלה ובה שבעים מספרים, על המשתמש לבחור שבעה מספרים ולמלא בטבלה. 
ניתן למלא שלוש טבלאות שונות כאשר ממלאים שבעה מספרים בכל טבלה. 
קיימת גם האפשרות של סימון לוטומטי מלא – כל הטופס מתמלא באופן אוטוטמי. 
או מילוי לוטומטי חלקי, כלומר לבחור חלק מהמספרים באופן ידני והיתרה תתמלא בצורה אוטומטית. 
גם מי שאינם אוהבים להשאיר את ידם למזל וסומכים על נתונים וסטטיסטיקות, שכן קיים מידע סטטיסטי אודות המספרים שעלו הכי הרבה בגורל ועל פיהם אפשר למלא את הטופס.
סכומי הזכייה והפרסים הינם קבועים ואינם משתנים מהגרלה להגרלה. 
ישנה גם האפשרות של פיס 777 שיטתי
777 שיטתי 8 (לפיו בוחרים שמונה מספרים ומסמנים בטבלת שבעים המספרים ועל בסיס המספרים שנבחרו יוצר המחשב שמונה צירופים של שבעה מספרים)  הפרס במצב בו כל שמונת המספרים שסימנתם עלו בגורל הינו 560,000!  70,000 ש״ח כפול 8. 
777 שיטתי 9 (לפיו בוחרים תשעה מספרים ומסמנים בטבלת שבעים המספרים ועל בסיס המספרים שנבחרו יוצר המחשב שלושים ושישה צירופים של שבעה מספרים) הפרס במצב בו תשעת המספרים שסימנתם עלו בגורל הינו 2,520,000! 

בכדי לדעת את תוצאות ההגרלה והמספרים שעלו בגורל וכמו כן את תוצאות המשחקים שכבר התקיימו ניתן להיכנס לאתר ולהתעדכן בזמן אמת ובכל רגע נתון.
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
      {/* </Container> */}
    </>
  );
};

export default Seva77List;
