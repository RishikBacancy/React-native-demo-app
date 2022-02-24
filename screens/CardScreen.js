import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const CardScreen = ({navigation})=>
{
    return(
        <View style={{padding:20,alignItems:"center"}}>

            <Card style={styles.cardContainer}>
                
                <View style={styles.txtContainer}>
                    <Text style={{fontSize:18}}>
                        Are you Happy ??
                    </Text>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <View style={styles.btnContainer}>
                        <Button
                            title="Yes"
                            onPress={()=>console.log("Owner is happy!")}
                            color={Colors.submitBtn}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <Button
                            title="No"
                            onPress={()=>console.log("Owner is not happy!")}
                            color={Colors.closeBtn}
                        />
                    </View>

                </View>
                
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        width: "80%",
    },
    btnContainer:{
        width:60,
        marginTop: 20,
    },
    txtContainer: {
        alignItems:"center",
    }
});

export default CardScreen;