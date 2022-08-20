import { Text, View } from "react-native";

function MusicScreen({navigation}){

    navigation.setOptions({ title: 'Updated!' });
return <View><Text>Music</Text></View>
}
export default MusicScreen;