import {
  TextInput,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { GlobalStyles } from "../constants/style";
import { Switch, Divider, Avatar } from "react-native-paper";
import PageHeader from "../componets/PageHeader";
import qs from "qs";
import { constants, getInfoFromBackend } from "../util/http";
import Indicator from "../componets/ActivityIndicator";
import axios from "axios";
import { getToken, showAlert } from "../util/helper";
import moment from "moment";
function DailyTaskScreen({ navigation }) {
  const [isAkasanEnabled, setAkasanEnabled] = useState(false);
  const [isAmbilEnabled, setAmbilEnabled] = useState(false);
  const [isUpwasEnabled, setUpwasEnabled] = useState(false);
  const [isChauviharEnabled, setChauviharEnabled] = useState(false);
  const [isTiviharEnabled, setTiviharEnabled] = useState(false);
  const [getSamayik, setSamayik] = useState("0");
  const [getTotalSamayik, setTotalSamayik] = useState("0");
  const [getTotalAmbil, setTotalAmbil] = useState("0");
  const [getTotalAkasan, setTotalAkasan] = useState("0");
  const [getTotalUpwas, setTotalUpwas] = useState("0");
  const [getTotalChauvihar, setTotalChauvihar] = useState("0");
  const [getTotalTivihar, setTotalTivihar] = useState("0");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    async function getTokens() {
      let response = await getToken();
      if (response != null) {
        setToken(response);
        getData(response);
      }
    }
    async function getData(ntoken) {
      setIsLoading(true);
      const res = await getInfoFromBackend(
        constants.endPoints.getTasks,
        ntoken
      );
      setDataSource(res.data);
      setIsLoading(false);
    }
    getTokens();
  }, []);

  useEffect(() => {
    setDataToUI();
  }, [dataSource]);

  function setDataToUI() {
    if (dataSource.todaysTask != null) {
      console.log("-------" + dataSource);
      setAkasanEnabled(dataSource.todaysTask.akasana == 1 ? true : false);
      setAmbilEnabled(dataSource.todaysTask.ayambil == 1 ? true : false);
      setChauviharEnabled(dataSource.todaysTask.chauvihaar == 1 ? true : false);
      setTiviharEnabled(dataSource.todaysTask.tivihaar == 1 ? true : false);
      setUpwasEnabled(dataSource.todaysTask.upvaas == 1 ? true : false);
      setSamayik(dataSource.todaysTask.samayik_count);

      setTotalAkasan(dataSource.taskCounts.akasana.toString());
      setTotalAmbil(dataSource.taskCounts.ayambil.toString());
      setTotalChauvihar(dataSource.taskCounts.chauvihaar.toString());
      setTotalTivihar(dataSource.taskCounts.tivihaar.toString());
      setTotalUpwas(dataSource.taskCounts.upvaas.toString());
      setTotalSamayik(dataSource.taskCounts.samayik_count.toString());
    }
  }

  function saveInfo() {
    let body = {
      samayik_count: getSamayik,
      akasana: isAkasanEnabled ? 1 : 0,
      ayambil: isAmbilEnabled ? 1 : 0,
      upvaas: isUpwasEnabled ? 1 : 0,
      chauvihaar: isChauviharEnabled ? 1 : 0,
      tivihaar: isTiviharEnabled ? 1 : 0,
      task_date: moment(new Date()).format("YYYY-MM-D"),
    };
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token,
    };
    console.log(body);
    axios
      .post(
        constants.base.url + constants.endPoints.saveTasks,
        qs.stringify(body),
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.data.status) {
          console.log(response.data);
          showAlert("Success", response.data.message);
        } else {
          showAlert("Error", response.data.message);
        }
      })
      .catch((error) => {
        showAlert("Error", error.message);
      });

    setIsLoading(false);
  }
  function toggleSwitch(value) {
    switch (value) {
      case "Akasan":
        setAkasanEnabled((previousState) => !previousState);
        break;
      case "Ambil":
        setAmbilEnabled((previousState) => !previousState);
        break;
      case "Upwas":
        setUpwasEnabled((previousState) => !previousState);
        break;
      case "Chauvihar":
        setChauviharEnabled((previousState) => !previousState);
        break;
      case "Tivihar":
        setTiviharEnabled((previousState) => !previousState);
        break;
      default:
        break;
    }
  }
  return (
    <View style={styles.container}>
      {isLoading && <Indicator />}
      <PageHeader
        title="Daily Tasks"
        rightIcon={"save"}
        rightButtonAction={saveInfo}
        navigation={navigation}
      ></PageHeader>
      <ScrollView bounces={false}>
        <View style={styles.header}>
          <View style={styles.textView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar.Image
                size={48}
                style={{ marginRight: 10 }}
                source={require("../assets/samayik.png")}
              />
              <Text style={styles.text}>कितनी सामायिक की?</Text>
            </View>

            <TextInput
              style={styles.input}
              onChangeText={setSamayik}
              value={getSamayik}
            ></TextInput>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar.Image
                size={48}
                style={{ marginRight: 10 }}
                source={require("../assets/ekasan.png")}
              />
              <Text style={styles.text}>एकासन किया?</Text>
            </View>
            <Switch
              status="unchecked"
              color="red"
              onValueChange={toggleSwitch.bind(this, "Akasan")}
              value={isAkasanEnabled}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar.Image
                size={48}
                style={{ marginRight: 10 }}
                source={require("../assets/ayambil.png")}
              />
              <Text style={styles.text}>आयम्बिल किया?</Text>
            </View>
            <Switch
              status="unchecked"
              color="red"
              onValueChange={toggleSwitch.bind(this, "Ambil")}
              value={isAmbilEnabled}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar.Image
                size={48}
                style={{ marginRight: 10 }}
                source={require("../assets/upwas.png")}
              />
              <Text style={styles.text}>उपवास किया?</Text>
            </View>
            <Switch
              status="unchecked"
              color="red"
              onValueChange={toggleSwitch.bind(this, "Upwas")}
              value={isUpwasEnabled}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar.Image
                size={48}
                style={{ marginRight: 10 }}
                source={require("../assets/chovihar.png")}
              />
              <Text style={styles.text}>चौविहार किया?</Text>
            </View>
            <Switch
              status="unchecked"
              color="red"
              onValueChange={toggleSwitch.bind(this, "Chauvihar")}
              value={isChauviharEnabled}
            />
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar.Image
                size={48}
                style={{ marginRight: 10 }}
                source={require("../assets/tivihar.png")}
              />
              <Text style={styles.text}>तिविहार किया?</Text>
            </View>
            <Switch
              status="unchecked"
              color="red"
              onValueChange={toggleSwitch.bind(this, "Tivihar")}
              value={isTiviharEnabled}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल सामायिक</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={getTotalSamayik}
            ></TextInput>
          </View>
          <Divider style={styles.divider2} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल एकासन</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={getTotalAkasan}
            ></TextInput>
          </View>
          <Divider style={styles.divider2} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल आयम्बिल</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={getTotalAmbil}
            ></TextInput>
          </View>
          <Divider style={styles.divider2} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल उपवास</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={getTotalUpwas}
            ></TextInput>
          </View>
          <Divider style={styles.divider2} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल चौविहार</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={getTotalChauvihar}
            ></TextInput>
          </View>
          <Divider style={styles.divider2} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल तिविहार</Text>
            <TextInput
              style={styles.input}
              editable={false}
              value={getTotalTivihar}
            ></TextInput>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  header: {
    padding: 10,
    flex: 1,
    backgroundColor: "white",
  },
  body: {
    padding: 10,

    flex: 2,
    backgroundColor: GlobalStyles.colors.primaryYellow,
  },
  textView: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    backgroundColor: GlobalStyles.colors.accent500,
  },
  divider2: {},
  text: {
    fontSize: 15,
    fontWeight: "400",
    color: GlobalStyles.colors.accent1000,
  },
  input: {
    height: 40,
    width: 40,
    textAlign: "center",
    borderWidth: 1,
    padding: 10,
  },
});
export default DailyTaskScreen;
