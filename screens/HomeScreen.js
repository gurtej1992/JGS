import { View, StyleSheet, ScrollView } from "react-native";
import { Divider, Text } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { GlobalStyles } from "../constants/style";

function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 10 }}>
                        <View style={{ alignSelf: 'flex-start', flex: 1, padding: 10 }}>
                            <Text style={styles.txtHindi}>सूर्योदय:</Text>
                        </View>
                        <View style={{ backgroundColor: 'black', width: 1, height: '100%' }}></View>
                        <View style={{ alignSelf: 'flex-start', flex: 1, padding: 10 }}>
                            <Text style={styles.txtHindi}>सूर्यास्त:</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'black', width: '100%', height: 1 }}></View>
                    <View style={{ alignItems: 'center', padding: 10 }}>
                        <Text style={styles.txtHindi}>आज का विचार</Text>
                    </View>
                    <View style={{ backgroundColor: GlobalStyles.colors.accent1000, width: '100%', height: 1 }}></View>
                </View>
                <View style={styles.body}>
                    <Card>
                        
                        
                        <Card.Content>
                            <Title>त्याग पच्चखाण</Title>
                            <Paragraph>आज के त्याग / पच्चखाण *👉अरवी, अंजीर ,अंजीर की बरफी* 👉आज की माला श्री अभिननदन नमः 👉आज का विशेष पच्चखाण आलस नही करना 👉हो सके तो दिन छिपने से पहले भोजन कर ले। </Paragraph>
                        </Card.Content>
                    </Card>
                    <Card style={{marginTop:20}}>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Content>
                            <Title>गुरुजी लोकेशन</Title>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.footer}>
                <Avatar.Icon size={24} icon="whatsapp" />
                </View>

            </ScrollView>
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
        backgroundColor: GlobalStyles.colors.primaryYellow,
    },
    body: {
        margin: 20,
        padding: 5,
        flex: 2,
        backgroundColor: GlobalStyles.colors.accent500,
    },
    footer: {
        margin: 20,
        padding: 5,
        flex: 2,
        backgroundColor: 'green',
    },
    txtHindi: {
        marginTop: 2,
        fontWeight: '400',
        fontSize: 20,
    },
});
export default HomeScreen;