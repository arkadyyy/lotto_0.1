import "react-native-gesture-handler";
import * as React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { I18nManager, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home/Home";
import UserArea from "./pages/UserArea/UserArea";
import SignIn from "./pages/SignIn/SignIn";
import Payment from "./pages/SignIn/Payment";
import PaymentAnnouncment from "./pages/SignIn/PaymentAnnouncment";
import LogInPage from "./pages/LogIn/LogInPage";
import StackWrapper from "./StackWrapper";
import DrawerContent from "./pages/DrawerContent/DrawerContent";
import LottoPage from "./pages/Lotto/LottoPage";
import SumPageLotto from "./pages/Lotto/SumPageLotto";
import DoubleLottoPage from "./pages/Lotto/DoubleLottoPage";
import LottoList from "./pages/Lotto/LottoList";
import LottoShitatiPage from "./pages/Lotto/LottoShitatiPage";
import LottoShitatiHazakPage from "./pages/Lotto/LotoShitatiHazak/LottoShitatiHazakPage";
import ResultList from "./pages/Result/ResultList.js";
import ResultLotto from "./pages/Result/ResultLotto.js";
import ResultChance from "./pages/Result/ResultChance.js";
import Result123 from "./pages/Result/Result123.js";
import Result777 from "./pages/Result/Result777.js";

import ChanceList from "./pages/Chance/ChanceList";
import ChancePage from "./pages/Chance/ChancePage";
import Sheva77List from "./pages/Sheva77/Sheva77List";
import One23List from "./pages/One23/One23List";
import One23Page from "./pages/One23/One23Page";
import Sheva77Page from "./pages/Sheva77/Sheva77Page";
import Sheva778Page from "./pages/Sheva77/Sheva778Page";
import Sheva779Page from "./pages/Sheva77/Sheva779Page";
import RavChancePage from "./pages/Chance/RavChancePage";
import ChanceShitatiPage from "./pages/Chance/ChanceShitatiPage";
import SumPageChance from "./pages/Chance/SumPageChance";
import SumPage777 from "./pages/Sheva77/SumPage777";
import SumPage123 from "./pages/One23/SumPage123";
// import AboutUs from "./pages/AboutUs";
import HowItWork from "./components/HowItWork";
import Help from "./components/Help";
import GetInTouch from "./components/GetInTouch";
import About from "./components/About";
import QuestionsAndAnswers from "./components/questionsANDanswers";
import TermsOfUse from "./components/TermsOfUse";
import congratulation  from "./pages/congratulation";
import StatuteTakanon from "./components/StatuteTakanon";
import AccessibilityDeclaration from "./components/AccessibilityDeclaration";
import { Provider } from "react-redux";
import { Root } from "native-base";
import store from "./redux/store";
import EStyleSheet from "react-native-extended-stylesheet";
import { withAuthenticator } from "aws-amplify-react-native";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
////////////////////////////////////////////////////////////////////////

Amplify.configure(awsconfig);

const fetchFonts = () => {
  return Font.loadAsync({
    "fb-Spacer": require("./assets/fonts/FbSpacerRegular.otf"),
    "fb-Spacer-Bold": require("./assets/fonts/FbSpacerBold.otf"),
  });
};
const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({
  $rem: entireScreenWidth / 380,
});

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [dataLoaded, setdataLoaded] = useState(false);

  I18nManager.forceRTL(true);

  if (dataLoaded === false) {
    return (
      <>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => {
            setdataLoaded(true);
          }}
          onError={(err) => {
            return err;
          }}
        />
      </>
    );
  }
  return (
    <>
      <Provider store={store}>
        <Root>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
              initialRouteName='Home'
            >
              <Drawer.Screen name='Home' component={Home} />
              <Drawer.Screen name='UserArea' component={UserArea} />
              <Drawer.Screen name='SignIn' component={SignIn} />
              <Drawer.Screen name='LogInPage' component={LogInPage} />
              <Drawer.Screen name='LottoList' component={LottoList} />
              <Drawer.Screen name='LottoPage' component={LottoPage} />
              <Drawer.Screen
                name='DoubleLottoPage'
                component={DoubleLottoPage}
              />
              <Drawer.Screen
                name='LottoShitatiPage'
                component={LottoShitatiPage}
              />
              <Drawer.Screen
                name='LottoShitatiHazakPage'
                component={LottoShitatiHazakPage}
              />
              <Drawer.Screen name='ChanceList' component={ChanceList} />
              <Drawer.Screen name='ChancePage' component={ChancePage} />
              <Drawer.Screen name='RavChancePage' component={RavChancePage} />
              <Drawer.Screen
                name='ChanceShitatiPage'
                component={ChanceShitatiPage}
              />
              <Drawer.Screen name='Sheva77List' component={Sheva77List} />
              <Drawer.Screen name='Sheva77Page' component={Sheva77Page} />
              <Drawer.Screen name='Sheva778Page' component={Sheva778Page} />
              <Drawer.Screen name='Sheva779Page' component={Sheva779Page} />
              <Drawer.Screen name='One23List' component={One23List} />
              <Drawer.Screen name='One23Page' component={One23Page} />
              <Drawer.Screen name='SumPageChance' component={SumPageChance} />
              <Drawer.Screen name='SumPage123' component={SumPage123} />
              <Drawer.Screen name='SumPage777' component={SumPage777} />
              {/* <Drawer.Screen name='AboutUs' component={AboutUs} /> */}
              <Drawer.Screen name='HowItWork' component={HowItWork} />
              <Drawer.Screen name='ResultLotto' component={ResultLotto} />
              <Drawer.Screen name='ResultChance' component={ResultChance} />
              <Drawer.Screen name='Result123' component={Result123} />
              <Drawer.Screen name='Result777' component={Result777} />
              <Drawer.Screen name='Payment' component={Payment} />
              <Drawer.Screen name='PaymentAnnouncment' component={PaymentAnnouncment} />
              <Drawer.Screen name='Help' component={Help} />
              <Drawer.Screen name='GetInTouch' component={GetInTouch} />
              <Drawer.Screen name='About' component={About} />
              <Drawer.Screen name='QuestionsAndAnswers' component={QuestionsAndAnswers} />
              <Drawer.Screen name='TermsOfUse' component={TermsOfUse} />
              <Drawer.Screen name='StatuteTakanon' component={StatuteTakanon} />
              <Drawer.Screen name='AccessibilityDeclaration' component={AccessibilityDeclaration} />

              <Drawer.Screen name='SumPageLotto' component={SumPageLotto} />
              <Drawer.Screen name='ResultList' component={ResultList} />
              <Drawer.Screen name='congratulation' component={congratulation}/>
            </Drawer.Navigator>
          </NavigationContainer>
        </Root>
      </Provider>
    </>
  );

  // return (
  //   <>
  //     <Provider store={store}>
  //       <NavigationContainer>
  //         <Drawer.Navigator
  //           drawerContent={(props) => <DrawerContent {...props} />}
  //           initialRouteName='Home'
  //         >
  //           <Drawer.Screen name='Home' component={Home} />
  //           <Drawer.Screen name='UserArea' component={UserArea} />
  //           <Drawer.Screen name='SignIn' component={SignIn} />
  //           <Drawer.Screen name='LogInPage' component={LogInPage} />
  //           <Drawer.Screen name='LottoList' component={LottoList} />
  //           <Drawer.Screen name='LottoPage' component={LottoPage} />
  //           <Drawer.Screen name='DoubleLottoPage' component={DoubleLottoPage} />
  //           <Drawer.Screen
  //             name='LottoShitatiPage'
  //             component={LottoShitatiPage}
  //           />
  //           <Drawer.Screen
  //             name='LottoShitatiHazakPage'
  //             component={LottoShitatiHazakPage}
  //           />
  //           <Drawer.Screen name='ChanceList' component={ChanceList} />
  //           <Drawer.Screen name='ChancePage' component={ChancePage} />
  //           <Drawer.Screen name='RavChancePage' component={RavChancePage} />
  //           <Drawer.Screen
  //             name='ChanceShitatiPage'
  //             component={ChanceShitatiPage}
  //           />
  //           <Drawer.Screen name='Sheva77List' component={Sheva77List} />
  //           <Drawer.Screen name='Sheva77Page' component={Sheva77Page} />
  //           <Drawer.Screen name='Sheva778Page' component={Sheva778Page} />
  //           <Drawer.Screen name='Sheva779Page' component={Sheva779Page} />
  //           <Drawer.Screen name='One23List' component={One23List} />
  //           <Drawer.Screen name='One23Page' component={One23Page} />
  //           <Drawer.Screen name='SumPageChance' component={SumPageChance} />
  //           {/* <Drawer.Screen name='SumPage123' component={SumPage123} /> */}
  //           <Drawer.Screen name='SumPage777' component={SumPage777} />

  //           <Drawer.Screen name='ExtraFormPage' component={ExtraFormPage} />
  //         </Drawer.Navigator>
  //       </NavigationContainer>
  //     </Provider>
  //   </>
  // );
}

{
  /* <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName='Home'
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='UserArea' component={UserArea} />
          <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator> */
}

// async function signIn() {
//   try {
//     const user = await Auth.signIn("dlevkovich05@gmail.com", "Dekel1145");
//     // console.log(user);
//   } catch (error) {
//     console.log("error signing in", error);
//   }
//   Auth.currentSession().then((res) => {
//     let accessToken = res.getAccessToken();
//     let jwt = accessToken.getJwtToken();
//     //You can print them to see the full objects
//     console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
//     console.log(`myJwt: ${jwt}`);
//   });
// }
