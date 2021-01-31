import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavBar from "../../components/NavBar";
import BlankSquare from "../../components/BlankSquare";
import axios from "axios";
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
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ChooseNumOfTables from "./components/ChooseNumOfTables";
import ChooseForm from "./components/ChooseForm";
import FillForm from "./components/FillForm";
import Table from "./components/Table";
import { autoFill } from "./components/FillForm";
import { useEffect } from "react";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "../../aws-exports";
Amplify.configure(awsconfig);
// { tableNum: 1, choosenNums: [1, 2, 3, 4, 5, 6], strongNum: 7 },

async function signIn() {
  try {
    const user = await Auth.signIn("dlevkovich05@gmail.com", "Dekel1145");
    // console.log(user);
  } catch (error) {
    console.log("error signing in", error);
  }
  Auth.currentSession().then((res) => {
    let accessToken = res.getAccessToken();
    let jwt = accessToken.getJwtToken();
    //You can print them to see the full objects
    console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
    console.log(`myJwt: ${jwt}`);
  });
}

const LottoPage = ({ navigation }) => {
  const [showTable, setshowTable] = useState(false);
  const [tableNum, settableNum] = useState(2);
  const [double, setdouble] = useState(false);
  const [fullTables, setFullTables] = useState([]);
  const [indexOfTable, setIndexOfTable] = useState("");
  const [opendTableNum, setopendTableNum] = useState(0);
  const[tableRowColor,setTableRowColor]=useState('D60617')

  useEffect(() => {
    signIn();
  }, []);

  const autoFillForm = () => {
    let fullTabels1 = [];
    for (let i = 1; i < tableNum * 2 + 1; i++) {
      let numbers = autoFill(6);
      let table = {
        tableNum: i,
        choosenNums: numbers.randomNumbers,
        strongNum: numbers.strongNum,
      };
      fullTabels1 = [...fullTabels1, table];
    }
    setFullTables(fullTabels1);
    setTableRowColor('#78C849')
  };

  const deletForm = () => {
    setFullTables([]);
    setTableRowColor('#D60617')
}
  useEffect(() => {
    axios
      .get("http://52.90.122.190:5000/games/lotto/type/regular/0", {
        headers: {
          //the token is myjwt :
          authorization:
            "eyJraWQiOiI3OTNMc2t1K3lDQ3FtTWlGc3UyWFE2R0dOREFxbDJWaDJDT0JJaWNVS1BrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkMDBlNjUzMC1kN2VhLTQzM2EtYTE2OS01OWU3MjM2MmE5NmEiLCJjb2duaXRvOmdyb3VwcyI6WyJjbGllbnRzIiwiYWRtaW5zIl0sImV2ZW50X2lkIjoiODZkMmQwNzUtNWY4Ny00NTFiLWI2ZGItODczMGRlOGJmNjNiIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTYxMjAyNzMxNSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfODNkUk5tdk5QIiwiZXhwIjoxNjEyMDMwOTE1LCJpYXQiOjE2MTIwMjczMTUsImp0aSI6IjdkMmY4ZGMyLTRiNWYtNDAyOS1hNGYxLWE0ZGJhYjY4NjY4MyIsImNsaWVudF9pZCI6IjFqcGM2NDY2MjZscHVjOWExOG1wamdycDVqIiwidXNlcm5hbWUiOiJkMDBlNjUzMC1kN2VhLTQzM2EtYTE2OS01OWU3MjM2MmE5NmEifQ.T5_doXmlGi_ICR8iu1Tfr4CVaMnfSDDNxsH6FJB60GKaDpbNjuJJI06Gke7JdCASlckMQDZqJ784baWl4WjW-lns9-Ums6keL7OQWQMryNGF7-X56y09wQ3ucWp9GVyjJdECqiJJneeKrD-H_b39oBP72it9B8Ba9YC13i6JW78lJLa09Y-ayl8kTLMUqlQkcZqMS4jMsANDZgm6LeQHyazZe91BtosNgvPU53UQIz4n8y1Ad3sjNBBNBXKDssCwiGQnTHFK3WkilK6mBQRil5Kj0WRSor8BuWkg3qDAifttWRnDVKHS4tGkHsng2dIwzElIkk38kBWTumt7kxX-WQ",
        },
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <>
      <ScrollView>
        <NavBar navigation={navigation} />
        <BlankSquare gameName='הגרלת לוטו' color='#FF0000' />
        <ChooseForm setdouble={setdouble} />
        <View style={{ margin: 15 }}>
          <View style={{ backgroundColor: "#FF0000", paddingBottom: 20,height:730 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 30,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 33,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
                }}
              >
                <Text style={{ fontSize: 20, color: "#FF0000" }}>1</Text>
              </View>
              <Text style={{ fontSize: 17, color: "white" }}>מלא את הטופס</Text>
            </View>

            <ChooseNumOfTables settableNum={settableNum} tableNum={tableNum} />

            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginLeft: 12,
                marginBottom: 10,
              }}
            >
              בחר 6 מספרים וחזק
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                marginLeft: 20,
              }}
            >
              <Button
                // onPress={() =>setFullTables([])}
                onPress={deletForm}
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 70,
                    textAlign: "center",
                  }}
                >
                  מחק טופס אוטומטית
                </Text>
              </Button>

              <Button
                onPress={autoFillForm}
                style={{ borderColor: "white", margin: 5 }}
                small
                rounded
                bordered
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 70,
                    textAlign: "center",
                  }}
                >
                  מלא טופס אוטומטי
                </Text>
              </Button>
            </View>
            {showTable && (
              <FillForm
                opendTableNum={opendTableNum}
                setshowTable={setshowTable}
                fullTables={fullTables}
                setFullTables={setFullTables}
                autoFillForm={autoFillForm}
                tableRowColor={tableRowColor}
                setTableRowColor={setTableRowColor}
              />
            )}
            <View
              style={{
                borderColor: "white",
                borderRadius: 7,
                borderWidth: 1,
                width: "83.7%",
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <List
                style={{
                  alignItems: "flex-start",
                  height: 250,
                  marginLeft: -17,
                  flexWrap: "wrap",
                }}
              >
                <ScrollView>
                  {Array.from(Array(tableNum)).map((x, index) => (
                    <Table
                      fullTables={fullTables}
                      double={double}
                      key={index}
                      index={index + 1}
                      setshowTable={setshowTable}
                      setIndexOfTable={setIndexOfTable}
                      setopendTableNum={setopendTableNum}
                      tableRowColor={tableRowColor}
                setTableRowColor={setTableRowColor}
                    />
                  ))}
                </ScrollView>
              </List>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 25,
                zIndex: 1,
              }}
            >
              <Button
                onPress={() => {
                  let summary = { regularLotto: fullTables };
                  console.log(summary);
                }}
                style={{
                  borderRadius: 17,
                  backgroundColor: "#8CC63F",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 10,
                }}
              >
                <Text style={{ color: "white", fontSize: 28 }}>שלח טופס</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              zIndex: -2,
            }}
          >
            <Text style={{ fontSize: 18 }}>הסבר על הגרלות לוטו</Text>
            <TouchableOpacity>
              <Text>עוד</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default LottoPage;
