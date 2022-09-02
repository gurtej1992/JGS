import { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider, Text } from "react-native-paper";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Indicator from "../componets/ActivityIndicator";
import PageHeader from "../componets/PageHeader";
import { GlobalStyles } from "../constants/style";
import { constants, getInfoFromBackend } from "../util/http";

function HomeScreen({ navigation }) {
  const [dataSourceSocial, setDataSourceSocial] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await getInfoFromBackend(constants.endPoints.getSocialLinks);
      setDataSourceSocial(res.data.links);
      setIsLoading(false);
    }
    getData();
  }, []);

  function handleOpenUrl(type) {
    if (type == "w") {
      Linking.openURL(
        `whatsapp://send?text=hello&phone=${dataSourceSocial.whatsapp}`
      );
    } else {
      var link = "";
      switch (type) {
        case "t":
          link = dataSourceSocial.twitter;
          break;
        case "i":
          link = dataSourceSocial.instagram;
          break;
        case "f":
          link = dataSourceSocial.facebook;
          break;
        case "y":
          link = dataSourceSocial.youtube;
          break;

        default:
          break;
      }
      Linking.openURL(link).catch((err) =>
        console.error("Couldn't load page", err)
      );
    }
  }
  return (
    <View style={styles.container}>
      {isLoading && <Indicator />}
      <PageHeader title="Home" navigation={navigation}></PageHeader>
      <ScrollView>
        <View style={styles.header}>
          <View style={{ flex: 1, flexDirection: "row", marginHorizontal: 10 }}>
            <View style={{ alignSelf: "flex-start", flex: 1, padding: 10 }}>
              <Text style={styles.txtHindi}>सूर्योदय:</Text>
            </View>
            <View
              style={{ backgroundColor: "black", width: 1, height: "100%" }}
            ></View>
            <View style={{ alignSelf: "flex-start", flex: 1, padding: 10 }}>
              <Text style={styles.txtHindi}>सूर्यास्त:</Text>
            </View>
          </View>
          <View
            style={{ backgroundColor: "black", width: "100%", height: 1 }}
          ></View>
          <View style={{ alignItems: "center", padding: 10 }}>
            <Text style={styles.txtHindi}>आज का विचार</Text>
          </View>
          <View
            style={{
              backgroundColor: GlobalStyles.colors.accent1000,
              width: "100%",
              height: 1,
            }}
          ></View>
        </View>
        <View style={styles.body}>
          <Card>
            <Card.Content>
              <Title>त्याग पच्चखाण</Title>
              <Paragraph>
                आज के त्याग / पच्चखाण *👉अरवी, अंजीर ,अंजीर की बरफी* 👉आज की
                माला श्री अभिननदन नमः 👉आज का विशेष पच्चखाण आलस नही करना 👉हो
                सके तो दिन छिपने से पहले भोजन कर ले।{" "}
              </Paragraph>
            </Card.Content>
          </Card>
          <Card style={{ marginTop: 20 }}>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Content>
              <Title>गुरुजी लोकेशन</Title>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleOpenUrl.bind(this, "f")}>
            <Avatar.Icon style={styles.icon} size={52} icon="facebook" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenUrl.bind(this, "i")}>
            <Avatar.Icon style={styles.icon} size={52} icon="instagram" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenUrl.bind(this, "w")}>
            <Avatar.Icon style={styles.icon} size={52} icon="whatsapp" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenUrl.bind(this, "t")}>
            <Avatar.Icon style={styles.icon} size={52} icon="twitter" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenUrl.bind(this, "y")}>
            <Avatar.Icon style={styles.icon} size={52} icon="youtube" />
          </TouchableOpacity>
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
    flex: 1,
    backgroundColor: GlobalStyles.colors.primaryYellow,
  },
  body: {
    margin: 20,
    padding: 5,
    flex: 2,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  footer: {
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 5,
    flex: 2,
  },
  txtHindi: {
    marginTop: 2,
    fontWeight: "400",
    fontSize: 20,
  },
  icon: {
    backgroundColor: GlobalStyles.colors.primaryRed,
    borderColor: GlobalStyles.colors.accent1000,
    borderWidth: 2,
  },
});
export default HomeScreen;
