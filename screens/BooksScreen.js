import { Text, View } from "react-native";
import React, { useEffect } from "react";

function BooksScreen({navigation}){
    useEffect(() => {
        navigation.setOptions({
          title: "Books",
        });
      }, [navigation]);
return <View><Text>Books</Text></View>
}
export default BooksScreen;