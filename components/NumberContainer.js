import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Colors from "../constants/Colors";

const NumberContainer = props =>
{
    return(
        <View style={styles.txtContainer}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    txtContainer: {
        borderWidth:2,
        borderColor:Colors.resetBtn,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    number:{
        color: Colors.closeBtn,
        fontSize: 22,
    },
});

export default NumberContainer;