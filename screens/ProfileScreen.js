import { View, Image, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/style";

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" }} style={styles.profileImg} />
                <Text style={styles.txtName}>RAJAT JAIN</Text>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-end',marginBottom:10, justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.txtNo}>108</Text>
                        <Text style={styles.txtSub}>SAMAYIK</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.txtNo}>11</Text>
                        <Text style={styles.txtSub}>EKASAN</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.txtNo}>9</Text>
                        <Text style={styles.txtSub}>AYAMBIL</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.txtNo}>10</Text>
                        <Text style={styles.txtSub}>UPWAS</Text>
                    </View>
                </View>
            </View>
            <View style={styles.body}>

            </View>
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
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primaryRed,
    },
    body: {
        flex: 2,
        backgroundColor: 'white',
    },
    profileImg: {
        marginTop:10,
        width: 120,
        height: 120,
        borderColor: GlobalStyles.colors.primaryYellow,
        borderWidth: 2,
        borderRadius: 60
    },
    txtName: {
        marginTop: 10,
        color: 'white',
        fontSize: 30,
    },
    txtNo: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500'
    },
    txtSub: {
        marginTop: 2,
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    }
});
export default ProfileScreen;
