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
  function saveInfo() {}
  return (
    <View style={styles.container}>
      <PageHeader
        title="Daily Tasks"
        rightIcon={"save"}
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

            <TextInput style={styles.input}>0</TextInput>
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
            <Switch status="unchecked" color="red" />
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
            <Switch status="unchecked" color="red" />
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
            <Switch status="unchecked" color="red" />
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
            <Switch status="unchecked" color="red" />
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
            <Switch status="unchecked" color="red" />
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
