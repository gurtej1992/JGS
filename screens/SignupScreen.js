import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";
import { HideKeyboard, showAlert } from "../util/helper";
import qs from "qs";
import { constants, sendInfoToBackend, setClientToken } from "../util/http";
import Indicator from "../componets/ActivityIndicator";
import axios from "axios";

function SignupScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [token, setToken] = useState("");
  function handleSignin() {
    navigation.navigate("Login");
  }

  function handleSignup() {
    let body = {
      otpToken: otpToken,
      OTP: otp,
    };
    setIsLoading(true);
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token,
    };

    axios
      .post(
        constants.base.url + constants.endPoints.verifyRegister,
        qs.stringify(body),
        {
          headers: headers,
        }
      )
      .then((response) => {
        if (response.data.status) {
          setClientToken(response.data.data.jwtToken);
          navigation.navigate("LandingNav");
        } else {
          showAlert("Error", response.data.message);
        }
      })
      .catch((error) => {
        showAlert("Error", error.message);
      });

    setIsLoading(false);
  }

  async function sendOTP() {
    let body = {
      name: name,
      pincode: pincode,
      phone: phone,
    };
    setIsLoading(true);
    const res = await sendInfoToBackend(
      constants.endPoints.register,
      qs.stringify(body)
    );
    setIsLoading(false);
    if (res.data.status) {
      showAlert("Success", res.data.message);
      setOtpToken(res.data.data.otpToken);
      setClientToken(res.data.data.jwtToken);
      setToken(res.data.data.jwtToken);
      // navigation.navigate("LandingNav");
    } else {
      showAlert("Error", res.data.message);
    }
  }

  return (
    <HideKeyboard>
      <View style={styles.container}>
        {isLoading && <Indicator />}
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
              onChangeText={setName}
              placeholderTextColor={GlobalStyles.colors.accent700}
            />
            <TextInput
              style={styles.input}
              placeholder="PHONE"
              keyboardType="phone-pad"
              onChangeText={setPhone}
              maxLength={10}
              placeholderTextColor={GlobalStyles.colors.accent700}
            />
            <TextInput
              style={styles.input}
              placeholder="PIN CODE"
              keyboardType="numeric"
              onChangeText={setPincode}
              maxLength={6}
              placeholderTextColor={GlobalStyles.colors.accent700}
            />
            <TextInput
              style={styles.input}
              placeholder="OTP"
              keyboardType="numeric"
              onFocus={sendOTP}
              onChangeText={setOtp}
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
