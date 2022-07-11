import { View,Text, StyleSheet, Image } from "react-native";
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";

function WelcomeScreen({ navigation }) {
  function handleSignin(){
    navigation.navigate('Login')
  }
  function handleSignup(){
    navigation.navigate('Signup')
  }
  return <View style={styles.container}>
    <View  style={styles.imgContainer}>
      <View style={styles.imgContainer2}>
      <Image style={styles.image} source={require('../assets/logo.png')}/>
      </View>
      <View>
      <View style={styles.imgContainer2}>
      <Image style={styles.tagline} source={require('../assets/tagline.png')}/>
      </View>
      </View>
    </View>
    <View style = {styles.buttonContainer}>
      <Button onPress={handleSignin}>SIGN IN</Button>
      <Text style={styles.textOR}>OR</Text>
      <Button onPress={handleSignup}>SIGN UP</Button>
    </View>
    </View>;
}



export default WelcomeScreen;

const styles = StyleSheet.create({

    container: {
        flex : 1,
        width: "100%",
        backgroundColor: GlobalStyles.colors.primaryYellow,
        justifyContent: "center",
        alignItems: "center",
    },
    imgContainer: {
      flex : 2,
      justifyContent: "flex-end",
      alignItems: "center",
    //  backgroundColor: 'purple',
      paddingBottom : 120,
  },
    textOR:{
      marginVertical : 15,
      color: GlobalStyles.colors.primaryRed,
      fontSize : 18,
      fontWeight : 'bold' ,
      textAlign : 'center'
    },
    
    buttonContainer:{
      flex : 1,
      justifyContent : 'center',
    //  backgroundColor : 'green',
      padding : 20,
      width : '80%',
      marginBottom : 50,
    },
    tagline:{
      marginTop : 20, 
      width : 250,
      height : 50,
      resizeMode : 'center',
    },
    image :{
      width : 180,
      height : 180,
      resizeMode: 'cover',
    },
    imgContainer2: {
      overflow : 'hidden',
     // backgroundColor: 'purple',
  },
});