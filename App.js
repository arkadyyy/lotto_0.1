import "react-native-gesture-handler";
import * as React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { I18nManager, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home/Home";
import UserArea from "./pages/UserArea/UserArea";
import SignIn from "./pages/SignIn/SignIn";
import StackWrapper from "./StackWrapper";
import DrawerContent from "./pages/DrawerContent/DrawerContent";
import LottoPage from "./pages/Lotto/LottoPage";
import DoubleLottoPage from "./pages/Lotto/DoubleLottoPage";
import LottoList from "./pages/Lotto/LottoList";
import LottoShitatiPage from "./pages/Lotto/LottoShitatiPage";
import LottoShitatiHazakPage from "./pages/Lotto/LotoShitatiHazak/LottoShitatiHazakPage";
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
import { Provider } from "react-redux";

import store from "./redux/store";
import EStyleSheet from "react-native-extended-stylesheet";
import { withAuthenticator } from "aws-amplify-react-native";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
////////////////////////////////////////////////////////////////////////

Amplify.configure(awsconfig);

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({
  $rem: entireScreenWidth / 380,
});

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  I18nManager.forceRTL(true);

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName='Home'
          >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='UserArea' component={UserArea} />
            <Drawer.Screen name='SignIn' component={SignIn} />
            <Drawer.Screen name='LottoList' component={LottoList} />
            <Drawer.Screen name='LottoPage' component={LottoPage} />
            <Drawer.Screen name='DoubleLottoPage' component={DoubleLottoPage} />
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
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
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
