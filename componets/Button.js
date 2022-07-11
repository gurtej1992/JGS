import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../constants/style';


function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 12,
    width: "100%",
    backgroundColor: GlobalStyles.colors.primaryRed,
  },
  flat: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize : 18,
    textAlign: 'center',
  },
  flatText: {
    color: 'black',
  },
  pressed: {
    opacity: 0.70,
    backgroundColor: GlobalStyles.colors.primaryRedDark,
    borderRadius: 20,
  },
});