import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import PageHeader from "../componets/PageHeader";
import ItemView from "../componets/ItemView";
import Indicator from "../componets/ActivityIndicator";
import { constants, getInfoFromBackend } from "../util/http";

function MusicScreen({ navigation }) {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await getInfoFromBackend(constants.endPoints.getBhajans);
      setDataSource(res.data.bhajans);
      setIsLoading(false);
    }
    getData();
  }, []);
  function handleItemPress(item) {
    Linking.openURL(item.link).catch((err) =>
      console.error("Couldn't load page", err)
    );
  }
  return (
    <View style={styles.container}>
      {isLoading && <Indicator />}
      <PageHeader title="Music" navigation={navigation}></PageHeader>
      <FlatList
        style={{ flex: 1 }}
        data={dataSource}
        renderItem={({ item }) => (
          <ItemView data={item} onPress={handleItemPress} />
        )}
        keyExtractor={(item, index) => index}
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
export default MusicScreen;
