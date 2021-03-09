import React, { useEffect, useState } from "react";

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
  const [openExplnation, setOpenExplnation] = useState(false);
 
  useEffect(() => {
    setOpenExplnation(false) 
  }, [navigation.onGoBack])
  
  return (
    <>
      <NavBar navigation={navigation} screenName={"ChanceList"} />

      <ScrollView>
        <View>
          <BlankSquare color='#009C4A' gameName="הגרלת צ'אנס" />
        </View>

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
                    marginHorizontal: 20,
                    fontFamily: "fb-Spacer-bold",
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
                  onPress={() => {
                    navigation.navigate("ChancePage");
                  setOpenExplnation(false);
                }}
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
                    marginHorizontal: 20,
                    fontFamily: "fb-Spacer-bold",
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
                  onPress={() => {
                    navigation.navigate("RavChancePage");
                    setOpenExplnation(false);
                  }
                  }>
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
                    marginHorizontal: 20,
                    fontFamily: "fb-Spacer-bold",
                  }}
                >
                  צ'אנס שיטתי
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
                  onPress={() => {
                    navigation.navigate("ChanceShitatiPage")
                    setOpenExplnation(false);
                  }}
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
          הסבר על הגרלות צ'אנס
          </Text>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <TouchableOpacity
            onPress={() =>{setOpenExplnation(true)} }

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
          <Text style={{ fontSize: 10, fontFamily: "fb-Spacer", padding: 10 }}>
          הרגע הזה שפשוט לוקחים צ׳אנס וזוכים- איזה אושר! `
הגרלת צ׳אנס הינה הגרלת כדורים מבוססת קלפים. 
הגרלת הצא׳נס נחשקת במיוחד ואחד מהמשחקים המועדפים על פני רבים וזאת ממספר סיבות
•	אפשרויות זכייה רבות. 
•	סיכויי זכייה משמעותיים של פרסים שווים הנעים בין עשרות שקלים לעשרות אלפי שקלים. 
•	מספר רב של טפסים/ משחקים ואופציות בחירה. 
•	תדירות גבוה של הגרלות ביום.
מתי זה קורה?
ההגרלה מתקיימת שבעה ימים בשבוע. בימים א׳-ה׳ ההגרלה מתקיימת שבע פעמים ביום (מ10:00 עד 22:00 כל שעתיים). 
ביום ו׳ ההגרלה מתקיימת שלוש פעמים ואילו בצאת השבת ההגרלה מתקיימת פעמיים. 
איך זה עובד? 
צ׳אנס הינו משחק קלפים, בו משתתפת חפיסה בת 32 קלפים. 
במשחק ארבעה סוגי סדרות ( עלה, תלתן, לב ויהלום). בכל סדרה ישנם שמונה קלפים משבע ועד אס. 
בכל הגרלה עולים ארבעה קלפים, אחד מכל סדרה. על השחקן לנחש אילו ארבעה קלפים עלו בגורל. 
חישובי סכומי הזכייה מושפעים מסכום ההשקעה וסוג טופס הצ׳אנס שאותו משחקים שכן לכל טופס ישנם מכפלות פרסים שונות. 
`</Text>
          
{openExplnation && <Text
              style={{ fontSize: 10, fontFamily: "fb-Spacer" }}
              >
סוגי הטפסים הינם: 
צ׳אנס 1 
במשחק זה עליך לנחש קלף אחד מסדרה אחת בלבד ואותו לסמן בטופס. 
במידה וניחשת נכונה וזה הקלף שעלה בגורל- זכית! 
סכום הזכייה הינו סכום ההשקעה בטופס כפול חמש. 
צ׳אנס 2 
במשחק זה עליך לנחש שני קלפים משתי סדרות שונות ולסמנם בטופס. 
במידה ושני הקלפים שניחשתם משתי הסדרות עלו בגורל- זכיתם בפרס שווה במיוחד שמורכב מסכום ההשקעה כפול 30. 
במידה וניחשתם קלף אחד נכונה עדין זכיתם בפרס, כאשר הפרס מורכב מסכום ההשקעה כפול 0.5 
צ׳אנס 3 
במשחק זה עליך לנחש שלושה קלפים משלוש סדרות שונות ולסמנם בטופס. 
במידה ושלושת הקלפים שניחשתם משלושת הסדרות עלו בגורל- זכיתם בפרס שווה בטירוף שמורכב מסכום ההשקעה כפול 300. 
במידה וניחשתם שני קלפים נכונה משתי סדרות שונות נכונה זכיתם בפרס, כאשר הפרס מורכב מסכום ההשקעה כפול 7/10.
במידה וניחשת קלף אחד נכונה עדין זכיתם בפרס כאשר הפרוס מורכב מסכום ההשקעה כפול 3/10. 
צ׳אנס 4 
במשחק זה עליך לנחש ארבעה קלפים מארבע סדרות שונות ולסמנם בטופס. 
במידה וכל ארבעת הקלפים שניחשתם מארבעת הסדרות השונות עלו בגורל- זכיתם בפרס בלתי נתפס שמורכב מסכום ההשקעה בטופס כפול 2,000!! 
במידה וניחשתם שלושה קלפים נכונה משלוש סדרות שונות גם זכיתם בפרס, כאשר הפרס מורכב מסכום ההשקעה בטופס כפול 8/10. 
במידה וניחשתם שני קלפים נכונה משתי סדרות שונות גם זכיתם בפרס, כאשר הפרס מורכב מסכום ההשקעה בטופס כפול 5/10. 
במידה וניחשתם קלף אחד נכונה עדין זכיתם בפרס, כאשר הפרס מורכב מסכום ההשקעה בטופס כפול 2/10. 

אז מהרו לקחת צ׳אנס ותתחילו לזכות!
          </Text>}
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
        {/* </View> */}
      </ScrollView>
      {/* </Container> */}
    </>
  );
};

export default ChanceList;
