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
        <>
          <View
            style={
              form_type === "lotto_shitati_hazak"
                ? { flexDirection: "column" }
                : { flexDirection: "row", flexWrap: "wrap" }
            }
          >
            {form_type === "regular_lotto" && <Text>טבלה {tableNum}</Text>}

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
                    <Text>{num}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </>
      ) : null}

      {form_type === "123" && (
        <>
          <View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text>טבלה {tableNum}</Text>
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
                      <Text>{num}</Text>
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
                  <Text>{num}</Text>
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
                <Text>{num}</Text>
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

            {ShapesTitle[indexShapes] === "clover" ? (
              <Text>תלתן</Text>
            ) : ShapesTitle[indexShapes] === "diamond" ? (
              <Text>יהלום</Text>
            ) : ShapesTitle[indexShapes] === "leaf" ? (
              <Text>עלה</Text>
            ) : ShapesTitle[indexShapes] === "heart" ? (
              <Text>לב</Text>
            ) : null}

            {/* <Text> {ShapesTitle[indexShapes]}</Text> */}
          </View>
        </View>
      ) : null}
      {form_type === "chance_shitati" && (
        <View style={{ flexDirection: "column", padding: 15 }}>
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
              <Text>{num}</Text>

              {console.log("num:::::::::::::::", num)}
              {console.log("ShapesTitle:", ShapesTitle)}
            </View>
          ))}
          {ShapesTitle[indexShapes] === "clover" ? (
            <Text>תלתן</Text>
          ) : ShapesTitle[indexShapes] === "diamond" ? (
            <Text>יהלום</Text>
          ) : ShapesTitle[indexShapes] === "leaf" ? (
            <Text>עלה</Text>
          ) : ShapesTitle[indexShapes] === "heart" ? (
            <Text>לב</Text>
          ) : null}
        </View>
      )}
    </>
  );
};

export default ViewForm;
