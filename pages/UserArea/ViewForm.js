import React from "react";
import { View, Text } from "react-native";
import ViewFormStyles from "./ViewFormStyles.js"
const ViewForm = ({ numbers, strongNum, tableNum,form_type,cards,indexShapes,cardsShitati }) => {
{console.log("numbers:",numbers)}
{console.log("strongnumbers:",strongNum)}
  return (
<>
  
  
    {/* <View style={{ flexDirection: "row" }}> */}
     {/* <Text>טבלה {tableNum}</Text> */}
      {/* <View */}
       {/* style={{ */}
    {/* //       width: 30, */}
    {/* //       height: 30, */}
    {/* //       borderRadius: 30, */}
    {/* //       backgroundColor: "orange", */}
    {/* //       borderColor: "white", */}
    {/* //       borderWidth: 1, */}
    {/* //       margin: 5, */}
    {/* //       justifyContent: "center", */}
    {/* //       alignItems: "center", */}
    {/* //     }} */}
    {/* //   > */}
    {/* //     <Text style={{ color: "white" }}>{strongNum}</Text> */}
    {/* //   </View> */}
      {
        form_type === "regular_lotto" ||
        form_type === "lotto_shitati" ||
        form_type === "lotto_shitati_hazak" ||
        form_type === "regular_lotto" 
          ?
        (
      <>
              
      <View style={
                form_type === "lotto_shitati_hazak"
                  ? { flexDirection: "column" }
                  :{flexDirection: "row",flexWrap:"wrap"}
        }>
                
                {form_type === "lotto" &&
                  <Text>טבלה {tableNum}</Text>
                }

      <View style={

        { flexDirection: "row",flexWrap:"wrap" }
        }>
      <View style={

        { flexDirection: "row",flexWrap:"wrap" }}>
           {strongNum.map((strongNumber, index) => (
      
      <View key={index}
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
      )
                  )}    
                  </View>
      <View style={{ flexDirection: "row",flexWrap:"wrap" }}>
                  
           {numbers.map((num, index) => (
      
      <View key={index}
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
      )
                    )}
          </View>
          </View>
          </View>
        </>
      ) :null}
      {
        form_type === "regular_chance"
        ||
        form_type === "rav_chance" 
        ? (
        <View style={{flexDirection:"row"}}>
          {console.log("card::::::::::::::::::::::::::::::::::::::::::",cards)}
           {/* {cards.map((card, index) => ( */}
      
      <View
      style={{
      
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
            <Text style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                backgroundColor: "white",
              margin: 5,
              textAlign: "center",
                textAlignVertical:"center"
            }}
            >{cards}
            </Text>
            {
              indexShapes === 0 ?
              (
              <Text>תלתן</Text>
                ) :
                indexShapes === 1 ?
                (
                <Text>יהלום</Text>
                  ) :
                  indexShapes === 2 ? 
              (
              <Text>לב</Text>
                    ) :
                    indexShapes === 3 ?
              (
              <Text>עלה</Text>
                ) 
:null
              
            }

    </View>
    
        </View>
      ):null}
      {
        form_type === "chance_shitati" 
        &&
        (
          <View style={{ flexDirection: "column",padding:10 }}>
          
          {
              indexShapes === 0 ?
              (
              <Text>תלתן</Text>
                ) :
                indexShapes === 1 ?
                (
                <Text>יהלום</Text>
                  ) :
                  indexShapes === 2 ? 
              (
              <Text>לב</Text>
                    ) :
                    indexShapes === 3 ?
              (
              <Text>עלה</Text>
                ) 
:null
              
            }
           
            {cardsShitati.map((num, index) => (
      
      <View key={index}
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
      )
          )}   


          {/* <Text>סוג צירוף {tableNum}</Text> */}
          
               {/* {numbers.map((num, index) => (
          
          <View key={index}
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
          )
              )}     */}
              </View>
        )
      }
     
     
    
    
    </>
  );
};

export default ViewForm;
