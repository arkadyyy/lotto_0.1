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

const SeeOrDupilcate = ({ index, open, form }) => {
  const [chanceCards, setChanceCards] = [''];
  if (index === open.index) {
    return (
      <View>
        <View style={{ margin: 10 }}>
          <Text
            style={{
              color: "#263742",
              fontWeight: "bold",
              padding: 10,
            }}
          >
            הצירוף שלי
          </Text>
          <View>
            {/* {console.log("form6666666666666666666666",form)} */}
            {/* {console.log("form.99999999:",form.marks.tables)} */}
            {console.log("form.99999999type:", form.form_type)}
            
            {
              form.form_type === "regular_lotto" ||
              form.form_type === "lotto_shitati" ||
              form.form_type === "lotto_shitati_hazak" 
            ? ( 
              <>
                 {form.marks.tables.map((table, index) => (
              <ViewForm
                numbers={table.numbers}
                strongNum={table.strong_number}
                tableNum={table.table_number}
                form_type={form.form_type}
              />
            ))}
            
                </>
            ):null
            }
            {
              form.form_type === "123"   && ( 
                <>               
                 {form.marks.tables.map((table, index) => (
              <ViewForm
                numbers={table.numbers}
                form_type={form.form_type}
                tableNum={table.table_number}

              />
            ))}
            
                </>
            )
            }
            {
              form.form_type === "777"   && ( 
                <>               
                 {form.marks.tables.map((table, index) => (
              <ViewForm
                numbers={table.numbers}
                form_type={form.form_type}
                tableNum={table.table_number}

              />
            ))}
            
                </>
            )
            }
            
            {
              form.form_type === "regular_chance"
              || form.form_type === "rav_chance"
                ?
                (
                  <View style={{ flexDirection: "row" }}>
                  {Object.values(form.marks.cards).map((cards, indexShapes) => (
                  <>
                   
                      {console.log("regular or rav chance????????????????????????????", cards)}
                    <ViewForm 
                        cards={cards}
                indexShapes={indexShapes}
                    // tableNum={table.table_number}
                    form_type={form.form_type}
                  />
                </>
                ))}
                
                </View>
            ) 
             :null
            }

            {form.form_type === "chance_shitati" 
            && 
              <View style={{ flexDirection: "row" }}>
              {Object.values(form.marks.cards).map((cardsShitati, indexShapes) => (
              <>
               
                  {console.log("cardsShitati????????????????@@@@@@@@", form.marks.cards)}
                  {console.log("cardsShitati????????????????@@@@@@@@", cardsShitati)}
                <ViewForm 
                    cardsShitati={cardsShitati}
            indexShapes={indexShapes}
                // tableNum={table.table_number}
                form_type={form.form_type}
              />
            </>
            ))}
            
            </View>
            }
         
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

const SendHistory = ({ formsHistory }) => {
  const [open, setOpen] = useState({ isOpen: false, index: -1 });

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
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "white",
                      fontFamily: "fb-Spacer",
                    }}
                  >
                    {open.isOpen && index === open.index
                      ? "סגור"
                      : "שכפל או צפה"}
                  </Text>
                </Button>
              </ListItem>
              {open.isOpen && (
                <SeeOrDupilcate form={form} open={open} index={index} />
              )}
            </>
          );
        })}
      </List>
    </>
  );
};

export default SendHistory;
