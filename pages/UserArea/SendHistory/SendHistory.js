import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, Touchable, View } from "react-native";
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

const SeeOrDupilcate = ({
  navigation, index, open, setOpen,
  form, hagralaName, setHagralaName,
hagralaNameHebrew, setHagralaNameHebrew,
gameType,setGameType,screenName,setScreenName
}) => {

  if (index === open.index) {
      // console.log("!!!!!!!!!!!!!!!!!",form);
  // console.log("!!!!!!!!!!!!!!!!!",form.form_type);
    if (form.form_type.includes("lotto")){
      setHagralaName("Lotto");
      setHagralaNameHebrew("לוטו");
    } else if (form.form_type.includes("chance")) {
      setHagralaName("Chance");
      setHagralaNameHebrew("צ'אנס")

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
    return (
      <View style={{flexDirection:"column"}}>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingTop:7}}>
        
        <TouchableOpacity
             onPress={() => {
              navigation.navigate(`SumPage${ hagralaName }`,{
              
                screenName: hagralaNameHebrew,
                tableNum: form.marks.tables.length,
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
                    : hagralaName === "123" ? (
                      
                        form.marks.tables.map((table,index)=>(
                          {
                            choosenNums: Object.values(table.numbers),
                            tableNum:table.table_number
                          }
                        ))
                            
                  ) :null ,
                gameType: gameType,  
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
            // onPress=
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
                    tableNum={table.table_number}
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

                <Button
                  // disabled={index === open.index ? false : true}
                  style={{ borderColor: "white", padding: 5, flex: 1.2 }}
                  small
                  bordered
                  onPress={() => {
                    setOpen({ isOpen: !open.isOpen, index: index });
                    console.log("????????????form:",form);
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
