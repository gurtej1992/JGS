import {
  TextInput,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { GlobalStyles } from "../constants/style";
import { Switch, Divider, Avatar } from "react-native-paper";

function DailyTaskScreen() {
  return (
    <View style={styles.container}>
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
              <Text>कितनी सामायिक की?</Text>
            </View>

            <TextInput>0</TextInput>
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
              <Text>एकासन किया?</Text>
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
              <Text>आयम्बिल किया?</Text>
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
              <Text>उपवास किया?</Text>
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
              <Text>चौविहार किया?</Text>
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
              <Text>तिविहार किया?</Text>
            </View>
            <Switch status="unchecked" color="red" />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.textView}>
            <Text>कुल सामायिक</Text>
            <TextInput>0</TextInput>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <Text>कुल एकासन</Text>
            <TextInput>0</TextInput>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <Text>कुल आयम्बिल</Text>
            <TextInput>0</TextInput>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.textView}>
            <Text>कुल उपवास</Text>
            <TextInput>0</TextInput>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default DailyTaskScreen;
