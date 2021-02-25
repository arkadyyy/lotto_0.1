import React from "react";
import { View, Text } from "react-native";
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
                      <Text style={{ fontFamily: "fb-Spacer" }}>{num}</Text>
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
        <View style={{ flexDirection: "row" }}>
          {console.log("card::::::::::::::::::::::::::::::::::::::::::", cards)}
          {/* {cards.map((card, index) => ( */}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {cards.map((num, index) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
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
                {ShapesTitle[indexShapes] === "clover" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>תלתן</Text>
                ) : ShapesTitle[indexShapes] === "diamond" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>יהלום</Text>
                ) : ShapesTitle[indexShapes] === "leaf" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>עלה</Text>
                ) : ShapesTitle[indexShapes] === "heart" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>לב</Text>
                ) : null}
              </View>
            ))}
            {/* <Text style={{
                width: 50,
                height: 30,
                borderRadius: 30,
                backgroundColor: "white",
              margin: 5,
              textAlign: "center",
                textAlignVertical:"center"
            }}
                >{cards}
                  {ShapesTitle}
                </Text> */}
            {console.log("ShapesTitle:", ShapesTitle)}

            {/* <Text> {ShapesTitle[indexShapes]}</Text> */}
          </View>
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
              <View>
                {ShapesTitle[indexShapes] === "clover" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>תלתן</Text>
                ) : ShapesTitle[indexShapes] === "diamond" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>יהלום</Text>
                ) : ShapesTitle[indexShapes] === "leaf" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>עלה</Text>
                ) : ShapesTitle[indexShapes] === "heart" ? (
                  <Text style={{ fontFamily: "fb-Spacer" }}>לב</Text>
                ) : null}
              </View>
              <View style={{ flexDirection: "row", padding: 15 }}>
                {cardsShitati.map((num, index) => (
                  // <View style={{flexDirection:"row"}}>
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

                    {console.log("num:::::::::::::::", num)}
                    {console.log("ShapesTitle:", ShapesTitle)}
                  </View>
                ))}
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default ViewForm;
