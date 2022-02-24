import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";

const Header = props =>
{
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerTxt}>
          {props.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer:{
        width: "100%",
        height: 39,
        backgroundColor: "#DDD",
        alignItems:"center",
    },
    headerTxt:{
        fontSize: 20,
    }
});

export default Header;