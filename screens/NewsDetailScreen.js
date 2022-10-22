import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import PageHeader from "../componets/PageHeader";
import { WebView } from "react-native-webview";
import React, { useState, useEffect } from "react";
import { GlobalStyles } from "../constants/style";
import Indicator from "../componets/ActivityIndicator";

function NewsDetailScreen({ navigation, route }) {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataToUI();
  }, []);

  function setDataToUI() {
    setDataSource(route.params.item);
  }

  return (
    <View style={styles.container}>
      <PageHeader title={"News"} navigation={navigation} backButton={true} />
      <WebView source={{ html: dataSource.content }} />
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
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primaryRed,
  },
  body: {
    margin: 20,
    padding: 5,
    flex: 2,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  profileImg: {
    marginTop: 10,
    width: 110,
    height: 110,
    borderColor: GlobalStyles.colors.primaryYellow,
    borderWidth: 5,
    borderRadius: 55,
  },
  txtName: {
    marginTop: 10,
    color: "white",
    fontSize: 25,
    marginBottom: 5,
  },
  txtNo: {
    color: "white",
    fontSize: 23,
    fontWeight: "500",
  },
  txtSub: {
    marginTop: 2,
    color: "white",
    fontWeight: "300",
    fontSize: 16,
  },
  fields: {
    marginBottom: 10,
    backgroundColor: GlobalStyles.colors.accent200,
  },
});
export default NewsDetailScreen;
