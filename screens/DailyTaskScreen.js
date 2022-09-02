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
function DailyTaskScreen({ navigation }) {
  const [isAkasanEnabled, setAkasanEnabled] = useState(false);
  const [isAmbilEnabled, setAmbilEnabled] = useState(false);
  const [isUpwasEnabled, setUpwasEnabled] = useState(false);
  const [isChauviharEnabled, setChauviharEnabled] = useState(false);
  const [isTiviharEnabled, setTiviharEnabled] = useState(false);
  const [getSamayik, setSamayik] = useState("0");
  function saveInfo() {
    console.log("saved");
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
            <TextInput style={styles.input}>0</TextInput>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल एकासन</Text>
            <TextInput style={styles.input}>0</TextInput>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल आयम्बिल</Text>
            <TextInput style={styles.input}>0</TextInput>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <Text style={[styles.text, { color: "black" }]}>कुल उपवास</Text>
            <TextInput style={styles.input}>0</TextInput>
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
