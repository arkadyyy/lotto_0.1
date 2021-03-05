import React from "react";
import { View, Text,Image } from "react-native";
import ViewFormStyles from "./ViewFormStyles.js";
const ViewForm = ({
  numbers,
  strongNum,
  tableNum,
  form_type,
  cards,
  indexShapes,
  cardsShitati,
  ShapesTitle,
}) => {
  {
    console.log("numbers:", numbers);
  }
  {
    console.log("strongnumbers:", strongNum);
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      {form_type === "regular_lotto" ||
      form_type === "lotto_shitati" ||
      form_type === "lotto_shitati_hazak" ? (
        <View
          style={
            form_type === "lotto_shitati_hazak"
              ? { flexDirection: "column" }
              : {
                  flexDirection: "row",
                  flexWrap: "wrap",

                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          {form_type === "regular_lotto" && tableNum < 10 ? (
            <Text style={{ marginRight: 7, fontFamily: "fb-Spacer" }}>
              טבלה {tableNum}
            </Text>
          ) : (
            <Text style={{ fontFamily: "fb-Spacer" }}>טבלה {tableNum}</Text>
          )}

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {strongNum.map((strongNumber, index) => (
                  <View
                    key={index}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "orange",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>{strongNumber}</Text>
                  </View>
                ))}
              </View>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {numbers.map((num, index) => (
                  <View
                    key={index}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      backgroundColor: "white",
                      margin: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontFamily: "fb-Spacer" }}>{num}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      ) : null}

      {form_type === "123" && (
        <>
          <View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text style={{ fontFamily: "fb-Spacer" }}>טבלה {tableNum}</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  {Object.values(numbers).map((num, index) => (
                    <View
                      key={index}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30,
                        backgroundColor: "white",
                        margin: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontFamily: "fb-Spacer" }}>
                        {num === -1 ? " " : num}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </>
      )}
      {form_type === "regular_777" ||
        (form_type === "shitati_777" && (
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {Object.values(numbers).map((num, index) => (
                <View
                  key={index}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontFamily: "fb-Spacer" }}>{num}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

      {form_type === "regular_chance" || form_type === "rav_chance" ? (
        // <View style={{ flexDirection: "row" }}>
         
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {cards.map((num, index) => (
              <View style={{ justifyContent: "center", alignItems: "center",paddingHorizontal:5 }}>
                {/* <View
                  key={index}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    backgroundColor: "white",
                    margin: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    //  position: "absolute",
                        // top: "50%",
                  }}
                > */}
                
                {/* </View> */}
                {ShapesTitle[indexShapes] === "clover" ? (
                  // <Text style={{ fontFamily: "fb-Spacer" }}>תלתן</Text>
                  <Image
                  style={{ width: 50, height: 70, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenClubs.png")}
               
                  />
                ) : ShapesTitle[indexShapes] === "diamond" ? (
                  // <Text style={{ fontFamily: "fb-Spacer" }}>יהלום</Text>
                  <Image
                  style={{  width: 50, height: 70, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenDiamond.png")}
                />
                ) : ShapesTitle[indexShapes] === "leaf" ? (
                  // <Text style={{ fontFamily: "fb-Spacer" }}>עלה</Text>
                  <Image
                  style={{  width: 50, height: 70, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenSpade.png")}
                />
                ) : ShapesTitle[indexShapes] === "heart" ? (
                  // <Text style={{ fontFamily: "fb-Spacer" }}>לב</Text>
                  <Image
                  style={{ width: 50, height: 70, borderRadius: 7 }}
                  source={require("C:/fullstack/lottoMatic/assets/chance/choosenHeart.png")}
                />
                      ) : null}
                  <Text
                  key={index}
                    
                    style={{
                      includeFontPadding: false,
                                      position: "absolute",
                                      alignSelf:"center",
                                      top: "50%",
                                                fontSize: 20,
                                      color:"black"
                  }}>{num}</Text>
              </View>
            ))}
          
            {console.log("ShapesTitle:", ShapesTitle)}

            {/* <Text> {ShapesTitle[indexShapes]}</Text> */}
          {/* </View> */}
        </View>
      ) : null}

      <View
        style={{
          alignItems: "center",

          flexDirection: "row",
        }}
      >
        <View>
          {form_type === "chance_shitati" && (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <View
                  style={{
                    width: "25%",
                    alignItems: "flex-start",
                  }}
                >
                  {ShapesTitle[indexShapes] === "clover" ? (
                    <Text style={{ fontFamily: "fb-Spacer" }}>תלתן</Text>
                  ) : ShapesTitle[indexShapes] === "diamond" ? (
                    <Text style={{ fontFamily: "fb-Spacer" }}>יהלום</Text>
                  ) : ShapesTitle[indexShapes] === "leaf" ? (
                    <Text style={{ fontFamily: "fb-Spacer" }}>עלה</Text>
                  ) : ShapesTitle[indexShapes] === "heart" ? (
                    <Text style={{ fontFamily: "fb-Spacer" }}>לב</Text>
                  ) : null}
                
                </View> */}
                <View
                  style={{
                    flexDirection: "row",
                    padding: 20,

                    // marginHorizontal: 10,
                  }}
                >
                  {cardsShitati.map((num, index) => (
                  //   {
                  //     setNameTourl(
                  //       capitalizeFirstLetter(ShapesTitle[indexShapes]);
                  // )}
            // <View style={{flexDirection:"row"}}>
                    <View
                      key={index}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 30,
                        backgroundColor: "white",
                        marginVertical: 15,
                        marginHorizontal: 13,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {ShapesTitle[indexShapes] === "clover" &&
                        <Image
                        style={{ width: 50, height: 70, borderRadius: 7,marginRight:30 }}
                        source={require(`C:/fullstack/lottoMatic/assets/chance/choosenClubs.png`)}
                          />
                      }
                      {ShapesTitle[indexShapes] === "diamond" &&
                        <Image
                        style={{ width: 50, height: 70, borderRadius: 7 }}
                        source={require(`C:/fullstack/lottoMatic/assets/chance/choosenDiamond.png`)}
                          />
                      }
                      {ShapesTitle[indexShapes] === "leaf" &&
                        <Image
                        style={{ width: 50, height: 70, borderRadius: 7 }}
                        source={require(`C:/fullstack/lottoMatic/assets/chance/choosenSpade.png`)}
                          />
                      }
                      {ShapesTitle[indexShapes] === "heart" &&
                        <Image
                        style={{ width: 50, height: 70, borderRadius: 7 }}
                        source={require(`C:/fullstack/lottoMatic/assets/chance/choosenHeart.png`)}
                          />
                      }
                     
                      <Text style={{
                        fontFamily: "fb-Spacer",
                        top: -20,
                        fontSize: num === "Q" || num === "K" || num === "A" || num === "J" ? 20 : 25,
                        
                      }}>{num}</Text>

                      {console.log("num:::::::::::::::", num)}
                      {console.log("ShapesTitle:", ShapesTitle)}
                    </View>
                  ))}
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default ViewForm;
