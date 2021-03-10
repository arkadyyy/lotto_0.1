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

export default function HowItWorks({ navigation }) {
  return (
    <>
      <NavBar navigation={navigation} screenName={"aboutUs"} />
          <ScrollView >
          <Image
                  style={{ width: 70, height: 30 }}
                  source={require("../../lottoMatic/assets/home/logo.png")}
              />
              <View style={{ backgroundColor: "lightblue", width: "80%", height: 600, alignSelf: "center", margin: 10 }}>
                  <Text style={{fontSize: EStyleSheet.value("$rem") * 30,}}>איך זה עובד? 
</Text>
                  <Text style={{direction: "rtl",fontSize: EStyleSheet.value("$rem") * 20}}>
                      
            לאחר התשלום אנו בלוטומטיק מקבלים את הטופס שמילאתם ושולחים אותו עבורכם בנקודת מכירה מורשית של מפעל הפיס.
                  </Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>

            את הטופס ששלחנו עבורכם בנקודה אנו סורקים ומעבירים לכם לתיבת הדואר האלקטרוני, ובנוסף מעלים את הטופס הסרוק לאזור האישי שלכם באפליקציה.
                       </Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>

                      הטופס המקורי יישמר אצלנו במשרדי החברה ובמידה וזכיתם בסכום  העולה על 11,000 ש״ח יימסר לכם הטופס באופן אישי. 
</Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>
 
                      במידה וסכום הזכייה שלכם הינו מ11,000 ש״ח או נמוך ממנו החשבון שלכם באתר יזוכה באופן אוטומטי ותקבלו על כך הודעה, אתם תוכלו למשוך את הכסף מהחשבון שכלם באתר לתוך חשבון הבנק שלכם או שתבחרו לנצל את היתרה לשליחת טפסים חדשים. 
</Text>
                      <Text style={{ direction: "rtl", fontSize: EStyleSheet.value("$rem") * 20 }}>

                      אנו מאחלים לכם חווית שימוש והנאה מרבית מהשירות שלנו ומלאי תקווה שנביא לכם את המזל. 
</Text>
                   
                  <Text style={{direction: "rtl",fontSize: EStyleSheet.value("$rem") * 20}}>

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
