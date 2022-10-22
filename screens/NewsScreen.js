import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "../constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import PageHeader from "../componets/PageHeader";
import Indicator from "../componets/ActivityIndicator";

import { constants, getInfoFromBackend } from "../util/http";

function Item({ item, onPress }) {
  function onClick() {
    onPress(item);
  }
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.listItem}>
        {/* <View style={{ flex: 1, justifyContent: "center", marginRight: 20 }}>
        <Image
          source={{ uri: item.photo }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
      </View> */}
        <View style={{ flex: 4 }}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.text}></Text>
            <TouchableOpacity>
              <Ionicons
                name="share"
                size={24}
                color={GlobalStyles.colors.accent700}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
function NewsScreen({ navigation }) {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await getInfoFromBackend(constants.endPoints.getEvents);
      console.log(res.data);
      setDataSource(res.data.events);
      setIsLoading(false);
    }
    getData();
  }, []);
  function handleItemPress(item) {
    navigation.navigate("NewsDetailScreen", { item });
  }
  return (
    <View style={styles.container}>
      {isLoading && <Indicator />}
      <PageHeader title="News" navigation={navigation}></PageHeader>
      <FlatList
        style={{ flex: 1 }}
        data={dataSource}
        renderItem={({ item }) => (
          <Item item={item} onPress={handleItemPress} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.accent500,
  },
  listItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#FFF",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  text: {
    color: GlobalStyles.colors.accent700,
  },
});
export default NewsScreen;
