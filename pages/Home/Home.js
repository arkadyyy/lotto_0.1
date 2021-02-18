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
} from "native-base";
import Hr from "react-native-hr-component";
import NavBar from "../../components/NavBar";
import styles from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCoffee,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
//////////////////////////////////////////////////////////////

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    "fb-Spacer": require("../../assets/fonts/FbSpacerRegular.otf"),
    "fb-Spacer-bold": require("../../assets/fonts/FbSpacerBold.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <NavBar navigation={navigation} screenName={"home"} />
        <Container>
          <ScrollView>
            <View style={homestyles.container}>
              <View style={homestyles.toplogo}>
                <Image
                  style={{ width: 220, height: 100 }}
                  source={require("../../assets/home/logo.png")}
                />
              </View>
              <View style={homestyles.blanksquare}></View>
              <View style={homestyles.openingPageBtns}>
                <View style={homestyles.btnWrapper}>
                  <Button
                    onPress={() => {
                      navigation.navigate("LottoList");
                    }}
                    style={[
                      homestyles.openingPageBtn,
                      {
                        backgroundColor: "#E62321",
                      },
                    ]}
                  >
                    <View style={homestyles.openingPageBtnBorder}>
                      <Image
                        style={homestyles.openingPageTopIcon}
                        source={require("../../assets/home/red_ball.png")}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        הגרלת
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        לוטו
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        עד
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        10,000,000
                      </Text>
                    </View>
                  </Button>
                  <Image
                    style={{ width: 70, height: 30 }}
                    source={require("../../assets/home/logoLotto.png")}
                  />
                </View>
                <View style={[homestyles.btnWrapper]}>
                  <Button
                    onPress={() => {
                      navigation.navigate("ChanceList");
                    }}
                    style={[
                      homestyles.openingPageBtn,
                      { backgroundColor: "#009943" },
                    ]}
                  >
                    <View style={homestyles.openingPageBtnBorder}>
                      <Image
                        style={homestyles.openingPageTopIcon}
                        source={require("../../assets/home/spade.png")}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        הגרלת
                      </Text>

                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        צ'אנס
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        כל שעתיים
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        עד 120,000
                      </Text>
                    </View>
                  </Button>
                  <Image
                    style={{ width: 80, height: 30 }}
                    // source={require("C:/fullstack/lottoMatic/assets/home/Chance_sml.png")}
                    source={require("../../assets/home/logoChance.png")}
                  />
                </View>
                <View style={homestyles.btnWrapper}>
                  <Button
                    onPress={() => {
                      navigation.navigate("Sheva77List");
                    }}
                    style={[
                      homestyles.openingPageBtn,
                      { backgroundColor: "#EB2874" },
                    ]}
                  >
                    <View style={homestyles.openingPageBtnBorder}>
                      <Image
                        resizeMode='contain'
                        style={[homestyles.openingPageTopIcon]}
                        source={require("../../assets/home/seven.png")}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        הגרלת
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        777
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        פעמיים ביום
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        עד 70,000
                      </Text>
                    </View>
                  </Button>
                  <Image
                    style={{ width: 70, height: 30 }}
                    source={require("../../assets/home/logo777.png")}
                  />
                </View>
              </View>
              <View style={homestyles.openingPageBtns}>
                <View style={homestyles.btnWrapper}>
                  <Button
                    onPress={() => {
                      navigation.navigate("One23List");
                    }}
                    style={[
                      homestyles.openingPageBtn,
                      {
                        backgroundColor: "#FF6B00",
                      },
                    ]}
                  >
                    <View style={homestyles.openingPageBtnBorder}>
                      <Image
                        style={homestyles.openingPageTopIcon}
                        source={require("../../assets/home/orange_ball.png")}
                      />
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        הגרלת
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 18,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        123
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        בכל טופס עד
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        120,000
                      </Text>
                    </View>
                  </Button>
                  <Image
                    style={{ width: 70, height: 30 }}
                    source={require("../../assets/home/logo123.png")}
                  />
                </View>
                <View style={[homestyles.btnWrapper, { marginBottom: 25 }]}>
                  <Button
                    onPress={() => {
                      navigation.navigate("HowItWork");
                    }}
                    style={[
                      homestyles.openingPageBtn,
                      homestyles.openingPageBtnLastBtns,
                    ]}
                    large
                    success
                    block
                  >
                    <Text
                      style={{
                        color: "white",
                        marginBottom: 10,
                        fontFamily: "fb-Spacer-bold",
                      }}
                    >
                      איך זה עובד
                    </Text>
                    <FontAwesomeIcon
                      color='white'
                      border={true}
                      inverse
                      icon={faPlus}
                    />
                  </Button>
                </View>

                <View style={homestyles.btnWrapper}>
                  <View>
                    <Button
                      onPress={() => {
                        navigation.navigate("About");
                      }}
                      style={[
                        homestyles.openingPageBtn,
                        homestyles.openingPageBtnLastBtns,
                      ]}
                      large
                      success
                      block
                    >
                      <Text
                        style={{
                          color: "white",
                          marginBottom: 10,
                          fontFamily: "fb-Spacer-bold",
                        }}
                      >
                        קצת עלינו
                      </Text>
                      <FontAwesomeIcon
                        color='white'
                        border={true}
                        inverse
                        icon={faPlus}
                      />
                    </Button>
                    <Image
                      style={{
                        width: 100,
                        height: 18,
                        position: "relative",
                        right: "2%",
                        top: 3,
                        resizeMode: "contain",
                      }}
                      source={require("../../assets/home/toppng.com_visa_mastercard_american_express_logos_american_express_1530x261.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Hr text={undefined} lineColor='#eee' width={1} />
            <View style={homestyles.footerMsg}>
              <Text style={homestyles.footerText}>
                אתר זה מעניק שירות של משלוח טפסי הגרלה של מפעל הפיס כגוף עצמאי.
              </Text>
              <Text style={homestyles.footerText}>
                אסורה מכירה למי שטרם מלאו לו 18.
              </Text>
            </View>
          </ScrollView>
        </Container>
      </>
    );
  }
}
