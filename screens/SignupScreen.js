import axios from "axios";
import { View, TextInput, StyleSheet, Image } from "react-native";
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";
import { HideKeyboard } from "../util/helper";
import qs from "qs";

function SignupScreen({ navigation }) {
  function handleSignin() {
    navigation.navigate("Login");
  }
  async function handleSignup() {
    // navigation.navigate('LandingNav')
    const loginData = { name: "Lary", pincode: "132001", phone: "9034011012" };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    const res = await axios.post(
      "http://app.jainmunisudarshan.com/Codeigniter-User-Panel-Management/apis/user/register",
      qs.stringify(loginData),
      config
    );
    console.log(res.data);
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <View style={styles.imgContainer2}>
            <Image
              style={styles.image}
              source={require("../assets/logo.png")}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="FULL NAME"
              placeholderTextColor={GlobalStyles.colors.accent700}
            />
            <TextInput
              style={styles.input}
              placeholder="PHONE"
              keyboardType="phone-pad"
              maxLength={10}
              placeholderTextColor={GlobalStyles.colors.accent700}
            />
            <TextInput
              style={styles.input}
              placeholder="PIN CODE"
              keyboardType="numeric"
              maxLength={6}
              placeholderTextColor={GlobalStyles.colors.accent700}
            />
          </View>
          <Button onPress={handleSignup}>SIGN UP</Button>
          <Button
            onPress={handleSignin}
            mode={"flat"}
            style={{ marginTop: 20 }}
          >
            Already have an account? Sign In
          </Button>
        </View>
      </View>
    </HideKeyboard>
  );
}

export default SignupScreen;

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
    marginTop: 50,
    marginBottom: 50,
  },
});
