import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createStackNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/stack";
import Home from "./pages/Home/Home";
import UserArea from "./pages/UserArea/UserArea";
import SignIn from "./pages/SignIn/SignIn";
import StackWrapper from "./StackWrapper";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// function CustomDrawerContent(props) {
//   return (
//     <View>
//       <Text>this is the drawer comp !</Text>
//     </View>
//   );
// }

// function MyDrawer() {
//   return (
//     <Drawer.Navigator drawerContent={<CustomDrawerContent {...props} />}>
//       <Drawer.Screen name='Home' component={Home} />
//       <Drawer.Screen name='UserArea' component={UserArea} />
//       <Drawer.Screen name='SignIn' component={SignIn} />
//     </Drawer.Navigator>
//   );
// }
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='UserArea' component={UserArea} />
          <Drawer.Screen name='SignIn' component={SignIn} />
        </Drawer.Navigator>
      </NavigationContainer>
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
