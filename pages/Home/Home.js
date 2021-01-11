import React from "react";
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
//////////////////////////////////////////////////////////////

export default function Home({ navigation }) {
  return (
    <>
      <NavBar navigation={navigation} />
      <Container>
        <ScrollView>
          <View style={homestyles.container}>
            <View style={homestyles.toplogo}>
              <Image
                style={{ width: 220, height: 100 }}
                source={require("C:/fullstack/lottoMatic/assets/home/logo.png")}
              />
            </View>
            <View style={homestyles.blanksquare}></View>
            <View style={homestyles.openingPageBtns}>
              <View style={homestyles.btnWrapper}>
                <Button
                  style={[
                    homestyles.openingPageBtn,
                    { backgroundColor: "#E62321" },
                  ]}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>
                    הגרלת לוטו
                  </Text>
                </Button>
                <Image
                  style={{ width: 70, height: 30 }}
                  source={require("C:/fullstack/lottoMatic/assets/home/Lotto-sml_1.png")}
                />
              </View>

              <View style={homestyles.btnWrapper}>
                <Button
                  style={[
                    homestyles.openingPageBtn,
                    { backgroundColor: "#FF6B00" },
                  ]}
                  large
                  success
                  block
                >
                  <Text style={{ color: "white", fontSize: 18 }}>
                    הגרלת 123
                  </Text>
                </Button>
                <Image
                  style={{ width: 70, height: 30 }}
                  source={require("C:/fullstack/lottoMatic/assets/home/_123_sml.png")}
                />
              </View>
              <View
                style={[
                  homestyles.btnWrapper,
                  {
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  },
                ]}
              >
                <Button
                  style={[
                    homestyles.openingPageBtn,
                    { backgroundColor: "#009943" },
                  ]}
                  large
                  success
                  block
                >
                  <Text style={{ color: "white", fontSize: 18 }}>
                    הגרלת צ'אנס
                  </Text>
                  {/* <Image
                    style={{ width: 70, height: 30 }}
                    source={require("C:/fullstack/lottoMatic/assets/home/Chance_sml.png")}
                  /> */}
                </Button>
              </View>

              <Button
                style={[
                  homestyles.openingPageBtn,
                  homestyles.openingPageBtnLastBtns,
                ]}
                large
                success
                block
              >
                <Text style={{ color: "white" }}>איך זה עובד</Text>
              </Button>
              <View style={homestyles.btnWrapper}>
                <Button
                  style={[
                    homestyles.openingPageBtn,
                    { backgroundColor: "#EB2874" },
                  ]}
                  large
                  success
                  block
                >
                  <Text style={{ color: "white", fontSize: 18 }}>
                    הגרלת 777
                  </Text>
                </Button>
                <Image
                  style={{ width: 70, height: 30 }}
                  source={require("C:/fullstack/lottoMatic/assets/home/_777_sml.png")}
                />
              </View>
              <View style={homestyles.btnWrapper}>
                <Button
                  style={[
                    homestyles.openingPageBtn,
                    homestyles.openingPageBtnLastBtns,
                  ]}
                  large
                  success
                  block
                >
                  <Text style={{ color: "white" }}>קצת עלינו</Text>
                </Button>
              </View>
            </View>
          </View>
          <Hr lineColor='#eee' width={1} />
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
