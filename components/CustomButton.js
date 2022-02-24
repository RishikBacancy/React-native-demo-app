import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

const CustomButton = props =>
{
    return(
        <TouchableOpacity activeOpacity={0.9} onPress={props.onPress}>
            <View style={styles.btnContainer}>
                <Text style={styles.btnTxt}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor: Colors.simpleBtn,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    btnTxt:{
        color:"white",
        fontFamily:"Dosis-Bold",
        fontSize: 20,
    },
});

export default CustomButton;