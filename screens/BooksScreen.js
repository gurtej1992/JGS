import { StyleSheet, Text, View, FlatList, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../constants/style";
import PageHeader from "../componets/PageHeader";
import { constants, getInfoFromBackend } from "../util/http";
import ItemView from "../componets/ItemView";
import Indicator from "../componets/ActivityIndicator";

function BooksScreen({ navigation }) {
  const [dataSource, setDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await getInfoFromBackend(constants.endPoints.getBooks);
      setDataSource(res.data.books);
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
      <PageHeader title="Books" navigation={navigation}></PageHeader>
      <FlatList
        style={{ flex: 1 }}
        data={dataSource}
        renderItem={({ item }) => (
          <ItemView data={item} onPress={handleItemPress} />
        )}
        keyExtractor={(item) => item.link}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.accent500,
  },
});
export default BooksScreen;
