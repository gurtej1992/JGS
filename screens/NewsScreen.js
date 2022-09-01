import React, { useState } from "react";
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

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={{ flex: 1, justifyContent: "center", marginRight: 20 }}>
        <Image
          source={{ uri: item.photo }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
      </View>
      <View style={{ flex: 4 }}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>17-May-2022</Text>
          <TouchableOpacity>
            <Ionicons
              name="share"
              size={24}
              color={GlobalStyles.colors.accent700}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3 }}>
          <Text style={styles.text}>{item.position}</Text>
        </View>
      </View>
    </View>
  );
}
var data = [
  {
    name: "Miyah Myles",
    email: "miyah.myles@gmail.com",
    position:
      "आज के  ाग / प खाण आज के  ाग / प खाण आज के  ाग / प खाण आज के  ाग / प खाण आज के  ाग / प खाण आज के  ाग / प खाण",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  },
  {
    name: "June Cha",
    email: "june.cha@gmail.com",
    position: "Sales Manager",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Iida Niskanen",
    email: "iida.niskanen@gmail.com",
    position: "Sales Manager",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Renee Sims",
    email: "renee.sims@gmail.com",
    position: "Medical Assistant",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Jonathan Nu\u00f1ez",
    email: "jonathan.nu\u00f1ez@gmail.com",
    position: "Clerical",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Sasha Ho",
    email: "sasha.ho@gmail.com",
    position: "Administrative Assistant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
  },
  {
    name: "Abdullah Hadley",
    email: "abdullah.hadley@gmail.com",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f",
  },
  {
    name: "Thomas Stock",
    email: "thomas.stock@gmail.com",
    position: "Product Designer",
    photo:
      "https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg",
  },
  {
    name: "Veeti Seppanen",
    email: "veeti.seppanen@gmail.com",
    position: "Product Designer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
  },
  {
    name: "Bonnie Riley",
    email: "bonnie.riley@gmail.com",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
  },
];
function NewsScreen() {
  const [data2, setData] = React.useState(data);
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={data2}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.email}
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
