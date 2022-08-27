import { View, TextInput, StyleSheet, Image } from "react-native";
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";
import { fetchPictures } from "../util/http";

function LoginScreen({ navigation }) {
  async function handleSignin() {
    const res = await fetchPictures("2022-03-05", "2022-03-10");
    console.log(res);
    //navigation.navigate('LandingNav', { screen: 'MyTabs' })
  }
  function handleSignup() {
    navigation.navigate("Signup");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <View style={styles.imgContainer2}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="PHONE"
            keyboardType="numeric"
            maxLength={10}
            placeholderTextColor={GlobalStyles.colors.accent700}
          />
          <TextInput
            style={styles.input}
            placeholder="OTP"
            keyboardType="numeric"
            placeholderTextColor={GlobalStyles.colors.accent700}
          />
        </View>

        <Button onPress={handleSignin}>SIGN IN</Button>
        <Button onPress={handleSignup} mode={"flat"} style={{ marginTop: 20 }}>
          Not a member yet? Sign up
        </Button>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: GlobalStyles.colors.primaryYellow,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //  backgroundColor: 'purple',
  },
  buttonContainer: {
    flex: 1.3,
    paddingHorizontal: 50,
    justifyContent: "flex-start",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "cover",
  },
  imgContainer2: {
    overflow: "hidden",
    // backgroundColor: 'purple',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 3,
    borderBottomColor: "red",
    padding: 10,
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 75,
    marginBottom: 75,
  },
});
