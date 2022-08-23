import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from "react";
import { GlobalStyles } from '../constants/style';
import Ionicons from '@expo/vector-icons/Ionicons';


function Item({ item }) {
    return (
        <View style={styles.listItem}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
        </View>
    );
}

function MusicScreen({ navigation }) {
    var data = [
        {
            "name": "Veeti Seppanen",
            "link": "veeti.seppanen@gmail.com"
        },
        {
            "name": "Jenny",
            "link": "veeti.seppanen@fgmail.com"
        }
    ]
    const [data2, setData] = React.useState(data);

    return (
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={data2}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.link}
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
        borderRadius: 5
    },
    text: {
        color: GlobalStyles.colors.accent700
    }
});
export default MusicScreen;