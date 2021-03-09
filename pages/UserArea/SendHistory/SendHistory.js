import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, Touchable, View,Dimensions,Share } from "react-native";
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
  Content,
} from "native-base";

import ViewForm from "../ViewForm";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { Auth } from "aws-amplify";
import * as FileSystem from 'expo-file-system';
import * as WebBrowser from 'expo-web-browser';
import { useSelector, useDispatch } from "react-redux";
import CameraRoll from "@react-native-community/cameraroll";
import * as Permissions from 'expo-permissions';
// import * as MediaLibrary from 'expo-media-library';
import { WebView } from 'react-native-webview';
import * as Linking from 'expo-linking';
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const SeeOrDupilcate = ({
  navigation, index, open, setOpen,
  form, hagralaName, setHagralaName,
hagralaNameHebrew, setHagralaNameHebrew,
  gameType, setGameType, screenName, setScreenName,
  formNum, choosenCards, setChoosenCards, store,
  webView,setWebView,webViewUri,setWebViewUri
}) => {

  if (index === open.index) {
      // console.log("!!!!!!!!!!!!!!!!!",form);
  // console.log("!!!!!!!!!!!!!!!!!",form.form_type);
    if (form.form_type.includes("lotto")) {
      setHagralaName("Lotto");
      setHagralaNameHebrew("לוטו");
    } else if (form.form_type.includes("chance")) {
      setHagralaName("Chance");
      setHagralaNameHebrew("צ'אנס");

     

    }
  else if (form.form_type.includes("123")) {
      setHagralaName("123");
      setHagralaNameHebrew("123")

  }
else if (form.form_type.includes("777")) {
      setHagralaName("777");
      setHagralaNameHebrew("777");

    }
    
    if (form.form_type === "regular_lotto") {
      setGameType("regular");      
    }
   
    else if (form.form_type === "regular_double_lotto") {
      setGameType("double");      
    }
    else if (form.form_type === "lotto_shitati") {
      setGameType("shitati");      
      setScreenName("לוטו שיטתי");      
    }
    else if (form.form_type === "double_lotto_shitati") {
      setGameType("double_shitati");      
    }
    else if (form.form_type === "lotto_shitati_hazak") {
      setGameType("shitati_hazak"); 
      setScreenName("לוטו שיטתי חזק")
    }
    else if (form.form_type === "double_lotto_shitati_hazak") {
      setGameType("double_shitati_hazak");      
    }
    else if (form.form_type ==="regular_chance") {
      setGameType("regular");      
      for (const [key, value] of Object.entries(form.marks.cards)) {
        console.log("+++++++");
        console.log(`{${ key }: ${ value }}`);
        const obj = {};
        obj[key] =value;
        if (choosenCards.length<4) {
          choosenCards.push(obj);
        }}
      console.log("55555555",choosenCards);
    }
    else if (form.form_type ==="rav_chance") {
      setGameType("rav_chance");      
      for (const [key, value] of Object.entries(form.marks.cards)) {
        console.log("+++++++");
        console.log(`{${ key }: ${ value }}`);
        const obj = {};
        obj[key] =value;
        if (choosenCards.length<4) {
          choosenCards.push(obj);
        }}
      console.log("55555555",choosenCards);
    }
    else if (form.form_type ==="chance_shitati") {
      setGameType("chance_shitati");      
      for (const [key, value] of Object.entries(form.marks.cards)) {
        console.log("+++++++");
        console.log(`{${ key }: ${ value }}`);
        const obj = {};
        obj[key] =value;
        if (choosenCards.length<4) {
          choosenCards.push(obj);
        }}
      console.log("55555555",choosenCards);
    }
    else if (form.marks.form_type === "8") {
      setGameType("778");
    }
    else if (form.marks.form_type === "7") {
      setGameType("777");
    }
    else if (form.marks.form_type === "9") {
      setGameType("779");
    }
    
    return (
      <View style={{flexDirection:"column"}}>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingTop:7}}>
        
        <TouchableOpacity
             onPress={() => {
              navigation.navigate(`SumPage${ hagralaName }`,{
              
                screenName: hagralaNameHebrew,
                tableNum: hagralaName !== "Chance" ? form.marks.tables.length
                  : hagralaName === "Chance" ? form.form_type
                    : null,
                formNum:formNum,
                investNum: form.marks.participant_amount,
                fullTables:
                  hagralaName === "Lotto" ? (
                    [
                form.marks.tables.map((table,index)=>(
                  {
                    choosenNums:table.numbers,
                    strongNum:table.strong_number,
                    tableNum:table.table_number
                  }
                ))
                    ]
                  )
                    : hagralaName === "123" ||
                    hagralaName === "777"
                    ? (
                      
                        form.marks.tables.map((table,index)=>(
                          {
                            choosenNums: Object.values(table.numbers),
                            tableNum:table.table_number
                          }
                        ))
                            
                      )
                      : hagralaName === "Chance" 
                      ? (
                        
                        {
                          tableNum:" ",
                          choosenCards: choosenCards,
                        }
                              
                        )
                      : null,
                gameType: gameType,
                formType:form.marks.form_type,
              // {gameType==="shitati" &&
          tzerufimNumber: (gameType==="shitati" ? form.marks.tables[0].numbers.length : null),
              // }
                hazakimNumber:(gameType==="shitati_hazak" ? form.marks.tables[0].strong_number.length : null),
                }
              );
            }}
                    >
            <Text style={{
              color: "white",
            borderColor: "white",
              borderWidth: 1,
              borderRadius: 7,
            paddingVertical:5
            }}>
              שכפל טופס
            </Text>     
          </TouchableOpacity>
        
          <TouchableOpacity
            onPress={() => {
              axios
                .get(`http://52.90.122.190:5000/admin/download/${form.id}`, {
                  headers: {
                    Authorization: store.jwt,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                })
                .then((res) => {
              console.log("axios res:", res);
              console.log("parse????????",JSON.parse(res.data));
              // console.log("res url:",res.config.url);                   
                  const fileUri = FileSystem.documentDirectory + 'toffes.pdf';
                  FileSystem.downloadAsync(
                    // 'http://techslides.com/demos/sample-videos/small.mp4',
                    res.config.url,                  
                    FileSystem.documentDirectory + `downloadfile.pdf`,
                    // fileUri,                    
                    {
                      headers: {
                        Authorization:"eyJraWQiOiI3OTNMc2t1K3lDQ3FtTWlGc3UyWFE2R0dOREFxbDJWaDJDT0JJaWNVS1BrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmMzIyNTYyMy1mYWZkLTQxYWEtOGYwMi1kYzIzNzYzNGVmY2MiLCJjb2duaXRvOmdyb3VwcyI6WyJjbGllbnRzIiwiYWRtaW5zIl0sImV2ZW50X2lkIjoiZDA5N2FjMzctOTgzMC00NDBiLTg2NTYtZjIwZDE4OGRlOWUyIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTYxNTEyNDc5MCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfODNkUk5tdk5QIiwiZXhwIjoxNjE1MTI4MzkwLCJpYXQiOjE2MTUxMjQ3OTAsImp0aSI6IjIyZjQ4MTU1LWE2NGYtNDE2OS1hNjEyLTEwYjgzOTM2Mjc1MiIsImNsaWVudF9pZCI6IjFqcGM2NDY2MjZscHVjOWExOG1wamdycDVqIiwidXNlcm5hbWUiOiJmMzIyNTYyMy1mYWZkLTQxYWEtOGYwMi1kYzIzNzYzNGVmY2MifQ.PEdRSezMakZUeTK06solelWBFbZsRNPW8BQwIXUNn6qRCYVIdSDWEKcFbqxDxo3u11T4yh9ND23P7B9ddwxnq3kCTbeNJ5fnCKPizRGgzq3C626ZtKt_M7TWwm-u_8x01W0W4HXH4LleK-q5Jl-zZUvwBRfRhUwBlSI3o6BOOgMMlNjiJFXjhZohMtxLN4DFBMnUhM8S8aaltqaaLMBXuqCJQLhJm3stqFIq72BNc9G_aMIEBV-WgvzTzksROedgqI3QkfnvZd6ke3vBx8CNgc096GT1EuI0ptEP7cywiXmuHEs0tufiVJMIzJR1XROVgoI11ObhDyNFjy2ZCcaO0Q"
                        ,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                       },
                    }
                 )
                  .then(({ uri }) => {
                    console.log('Finished downloading to ', uri);
                    // FileSystem.getInfoAsync(uri)
                      // .then((res) => {
                        // console.log('resCamera', res)
                        // CameraRoll.saveToCameraRoll(uri, 'pdf')
                        // CameraRoll.save(res.uri);
                        // console.log("uriiiiii:",res.uri);
                  //       // ca
                      // })
                    
                  })
                  .catch(error => {
                    console.error(error);
                   });
                })
                .catch((err) => console.log(err));

            }}
          >
            <Text style={{
              color: "white",
            borderColor: "white",
              borderWidth: 1,
              borderRadius: 7,
            padding:5
            }}>
              צפה בטופס
              </Text>     
          </TouchableOpacity>
          <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(`Result${hagralaName}`);
                    }}
          >
            <Text style={{
              color: "white",
              borderColor: "white",
                borderWidth: 1,
                borderRadius: 7,
              padding:5
            }}>
              תוצאות הגרלה
              </Text>       
        </TouchableOpacity>
          <TouchableOpacity
                        onPress={() => {
                          setOpen({ isOpen: !open.isOpen, index: index });
                        }}
          >
            <Text style={{
              color: "white",
              // borderColor: "white",
                // borderWidth: 1,
                borderRadius: 7,
              padding: 5,
              backgroundColor:"black"
            }}>
              סגור
              </Text>       
        </TouchableOpacity>
          
        </View>
        <View style={{ marginBottom: 10,marginHorizontal:10 }}>
          <Text
            style={{
              color: "#263742",

              paddingVertical: 10,
              fontFamily: "fb-Spacer-bold",
            }}
          >
            הצירוף שלי
          </Text>
          <View>
            {/* {console.log("form6666666666666666666666",form)} */}
            {/* {console.log("form.99999999:",form.marks.tables)} */}
            {console.log("form.99999999type:", form.form_type)}

            {form.form_type === "regular_lotto" ||
            form.form_type === "lotto_shitati" ||
            form.form_type === "lotto_shitati_hazak" ? (
              <>
                {form.marks.tables.map((table, index) => (
                  <ViewForm
                    key={index}
                    numbers={table.numbers}
                    strongNum={table.strong_number}
                    tableNum={table.numbers.length? table.table_number : null}
                    form_type={form.form_type}
                  />
                ))}
              </>
            ) : null}
            {form.form_type === "123" && (
              <>
                {form.marks.tables.map((table, index) => (
                  <ViewForm
                  key={index}

                    numbers={table.numbers}
                    form_type={form.form_type}
                    tableNum={table.table_number}
                  />
                ))}
              </>
            )}
            {form.form_type === "regular_777" ||
              (form.form_type === "shitati_777" && (
                <>
                  {form.marks.tables.map((table, index) => (
                    <ViewForm
                    key={index}

                      numbers={table.numbers}
                      form_type={form.form_type}
                      tableNum={table.table_number}
                    />
                  ))}
                </>
              ))}

            {form.form_type === "regular_chance" ||
            form.form_type === "rav_chance" ? (
              <View style={{ flexDirection: "row" }}>
                {Object.values(form.marks.cards).map((cards, indexShapes) => (
                  <>
                    {console.log(
                      "regular or rav chance????????????????????????????",
                      cards
                    )}
                    <ViewForm
                      key={indexShapes}
                      cards={cards}
                      indexShapes={indexShapes}
                      ShapesTitle={Object.keys(form.marks.cards)}
                      form_type={form.form_type}
                    />
                  </>
                ))}
              </View>
            ) : null}

            {form.form_type === "chance_shitati" && (
              <View style={{ flexDirection: "column" }}>
                {Object.values(form.marks.cards).map(
                  (cardsShitati, indexShapes) => (
                    <>
                      {console.log(
                        "cardsShitati????????????????@@@@@@@@",
                        form.marks.cards
                      )}
                      {console.log(
                        "cardsShitati????????????????@@@@@@@@",
                        cardsShitati
                      )}
                      <ViewForm
                        key={indexShapes}
                        cardsShitati={cardsShitati}
                        indexShapes={indexShapes}
                        ShapesTitle={Object.keys(form.marks.cards)}
                        // tableNum={table.table_number}
                        form_type={form.form_type}
                      />
                    </>
                  )
                )}
              </View>
            )}
          </View>
        </View>
        {webView ?
 <WebView
 source={{ uri: webViewUri }}
 style={{ marginTop: 20, backgroundColor:"red",padding:100 }}
/>  :null}
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
      </View>
    );
  } else {
    return null;
  }
};

const SendHistory = ({ navigation,formsHistory }) => {
  const [open, setOpen] = useState({ isOpen: false, index: -1 });
  const [hagralaName, setHagralaName] = useState("");
  const [hagralaNameHebrew, setHagralaNameHebrew] = useState(" ");
  const [gameType, setGameType] = useState(" ");
  const [screenName, setScreenName] = useState(" ");
  const [investNum, setInvestNum] = useState(" ");
  const formNum = "1";
  const [choosenCards,setChoosenCards] = useState([]);
  const [webView,setWebView] = useState();
  const [webViewUri,setWebViewUri] = useState();
  // const [permission, askForPermission] = usePermissions(Permissions.CAMERA, { ask: true });

  const store = useSelector((state) => state);

  useEffect(() => {
    console.log("formsHistory : ", formsHistory);
  }, []);


  return (
    <>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 2,
            fontFamily: "fb-Spacer",
          }}
        >
          משחק ומס' הגרלה
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 2,
            fontFamily: "fb-Spacer",
          }}
        >
          תאריך ושעה
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 1,
            fontFamily: "fb-Spacer",
          }}
        >
          עלות הטופס
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            backgroundColor: "#263742",
            padding: 7,
            marginLeft: 2,
            marginRight: 2,
            flex: 1,
            fontFamily: "fb-Spacer",
          }}
        >
          שכפול הטופס
        </Text>
      </View>

      <List
        style={{
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: "#00AEEF",

          width: "98%",
          marginTop: 10,
        }}
      >
        {formsHistory.map((form, index) => {
          let isOpen = false;
          return (
            <>
              <ListItem key={index}>
                <View style={{ marginRight: 45, flex: 2.2 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontFamily: "fb-Spacer",
                    }}
                  >
                    {form["משחק ומס׳ הגרלה"]}
                  </Text>
                </View>
                <View style={{ marginRight: 40, flex: 3 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontFamily: "fb-Spacer",
                    }}
                  >
                    {form["תאריך ושעה"]}
                  </Text>
                </View>
                <View style={{ marginRight: 40, flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontFamily: "fb-Spacer",
                    }}
                  >
                    {form["עלות הטופס"]}
                  </Text>
                </View>
                {!open.isOpen ?
                  <Button
                    // disabled={index === open.index ? true : false}
                  
                    style={{ borderColor: "white", padding: 5, flex: 1.2 }}
                    small
                    bordered
                    onPress={() => {
                      setOpen({ isOpen: !open.isOpen, index: index });
                      console.log("????????????form:", form);
                      // console.log("tableNum:", form.marks.tables.length);
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontFamily: "fb-Spacer",
                      }}
                    >
                      {/* {open.isOpen && index === open.index */}
                      {/* ? "סגור" : */}
                      שכפל או צפה
                    {/* } */}
                    </Text>
                  </Button>
                  :
                  
                    open.isOpen && index === open.index ?
                  <Text style={{  padding: 5, flex: 1.2 }}></Text>
                  :
                  <Button
                    disabled
                    style={{ borderColor: "#f4f4f4", padding: 5, flex: 1.2 }}
                    small
                    bordered
                    onPress={() => {
                      setOpen({ isOpen: !open.isOpen, index: index });
                      console.log("????????????form:", form);
                      // console.log("tableNum:", form.marks.tables.length);
                    }}
                  >
                
                      <Text
                        style={{
                          fontSize: 10,
                          color: "white",
                          fontFamily: "fb-Spacer",
                        }}
                      >
                        שכפל או צפה
                  </Text>
                    
                  </Button>
                  
                  
                }
            
              
              </ListItem>
              {open.isOpen && (
                <SeeOrDupilcate
                  navigation={navigation}
                  form={form}
                  open={open} setOpen={setOpen}
                  index={index}
                  hagralaName={hagralaName} setHagralaName={setHagralaName} hagralaNameHebrew={hagralaNameHebrew} setHagralaNameHebrew={setHagralaNameHebrew}
                  gameType={gameType} setGameType={setGameType}
                  screenName={screenName} setScreenName={setScreenName}
                  formNum={formNum}
                  investNum={investNum}
                  setInvestNum={setInvestNum}
                  choosenCards={choosenCards}
                  setChoosenCards={setChoosenCards}
                  store={store}
                  webView={webView} setWebView={setWebView}
                  webViewUri={webViewUri} setWebViewUri={setWebViewUri}
                />
              )}
            </>
          );
        })}
      </List>
    </>
  );
};

export default SendHistory;
