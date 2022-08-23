import { Text, View } from "react-native";
import React, { useEffect } from "react";
function MusicScreen({navigation}){
    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Music",
        });
        console.log(navigation)
      }, [navigation]);

return (<View><Text>Music</Text></View>);
}
export default MusicScreen;