import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { I18nManager, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home/Home";
import UserArea from "./pages/UserArea/UserArea";
import SignIn from "./pages/SignIn/SignIn";
import StackWrapper from "./StackWrapper";
import DrawerContent from "./pages/DrawerContent/DrawerContent";
import LottoPage from "./pages/Lotto/LottoPage";
import LottoList from "./pages/Lotto/LottoList";
import ChanceList from "./pages/Chance/ChanceList";
import Sheva77List from "./pages/Sheva77/Sheva77List";


// import { Provider } from "react-redux";
// import { store } from "./redux/store";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  I18nManager.forceRTL(true);
  return (
    <>
      {/* <Provider store={store} > */}
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName='Home'
        >
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='UserArea' component={UserArea} />
          <Drawer.Screen name='SignIn' component={SignIn} />
          <Drawer.Screen name='LottoPage' component={LottoPage} />
          <Drawer.Screen name='ChancePage' component={LottoPage} />
          <Drawer.Screen name='Sheva77Page' component={LottoPage} />
          <Drawer.Screen name='One23Page' component={LottoPage} />
          <Drawer.Screen name='LottoList' component={LottoList} />
          <Drawer.Screen name='ChanceList' component={ChanceList} />
          <Drawer.Screen name='Sheva77List' component={Sheva77List} />
          {/* <Drawer.Screen name='One23List' component={One23List} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
      {/* </Provider> */}
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
