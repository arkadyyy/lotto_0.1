import React from "react";
import { useState } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  View,
  Image,
} from "react-native";
import homestyles from "../pages/Home/HomeStyles";
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
import Hr from "react-native-hr-component";
import NavBar from "../components/NavBar";
import styles from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

//////////////////////////////////////////////////////////////

export default function Home({ navigation }) {
  const {
    pageComeFrom
  } = route.params;
  return (
    <>
      <NavBar navigation={navigation} screenName={"aboutUs"} />
          <ScrollView >
          <Image
                  style={{ width: 70, height: 30 }}
                  source={require("../../lottoMatic/assets/home/logo.png")}
              />
              <View style={{ backgroundColor: "lightblue", width: "80%", height: 600, alignSelf: "center", margin: 10 }}>
                  <Text style={{fontSize: EStyleSheet.value("$rem") * 30,}}>קצת עלינו...</Text>
                  <Text style={{direction: "rtl",fontSize: EStyleSheet.value("$rem") * 20}}>
                      
                      לוטומטיק - פשוט לשלוח בקליק, מכל מקום, בכל מצב, ובכל רגע נתון. 
</Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>

                      העיקרון המנחה שלנו הינו הנוחות שלכם.
</Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>
 
                      כלומר, אנו בלוטומטיק נעשה כל שביכולתנו כדי לספק לכם את החוויה למלא טפסי לוטו, צ׳אנס, 777, ו- 123, מבלי להטריח את עצמכם, ונעניק לכם את האפשרות לעשות זאת מכל מקום בכל שעה, וכל זה בלחיצת כפתור, בלי ללכת לנקודה של מפעל הפיס, בלי לעמוד בתור, בלי לצאת מהבית, ובלי להיות מוגבלים בזמן, הכל נעשה באפליקציה או דרך אתר האינטרנט שלנו. 
</Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>

                      כל שלכם נותר לעשות הוא פשוט להיכנס לאתר או לאפליקציה שלנו, להזין את הפרטים שלכם, לבחור את סוג הטופס שבו אתם חפצים, לבחור את המספרים שלכם ו/או לבחור באפשרות של מילוי טופס באופן אוטומטי, ללחוץ על שליחת טופס, לשלם בכרטיס האשראי, והינה הטופס שמילאתם כבר נסרק, ובדרך לתיבת המייל שלכם ולאיזור האישי שלכם באפליקציה.
</Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>
 
                  </Text>
                  <Text style={{direction: "rtl",fontSize: EStyleSheet.value("$rem") * 20}}>

אנו מאחלים לכם חווית שימוש והנאה מרבית מהשירות שלנו ומלאי תקווה שנביא לכם את המזל. 
בהצלחה! 

           </Text>
           
          </View>
          {/* <Hr text={undefined} lineColor='#eee' width={1} /> */}
          
        <View style={homestyles.footerMsg}>
            <Text style={homestyles.footerText}>
              אתר זה מעניק שירות של משלוח טפסי הגרלה של מפעל הפיס כגוף עצמאי.
            </Text>
            <Text style={homestyles.footerText}>
              אסורה מכירה למי שטרם מלאו לו 18.
            </Text>
          </View>
        </ScrollView>
    </>
  );
}
