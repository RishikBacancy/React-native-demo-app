import React from "react";
import { View, Text, StyleSheet, Button, Image} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import CustomButton from "../components/CustomButton";

const GameoverScreen = props =>
{
    return(
        <View style={styles.screen}>
            <Card style={styles.cardContainer}>
                <Text style={styles.txtContainer}>Game is Over !!</Text>
                <View style={styles.imgContainer}>
                    <Image
                        //fadeDuration={500}
                        source={require('../assets/success.png')}
                        style={styles.img}
                        resizeMode="cover"
                    />
                </View>
                <Text style={styles.txtContainer}>Number guessed in <Text style={styles.highlight}>{props.userRounds}</Text> rounds.</Text>
                <Text style={styles.txtContainer}>The number was <Text style={styles.highlight}>{props.userNumber}</Text>.</Text>
                <View style={styles.btnContainer}>
                    <CustomButton onPress={props.restartGame}>
                        New Game
                    </CustomButton>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    cardContainer:{
        alignItems:"center",
        width:"80%",
    },
    txtContainer:{
        fontSize:20,
        marginTop:20,
        fontFamily:"Dosis-Bold",
    },
    btnContainer:{
        marginTop:20,
    },
    imgContainer:{
        width:200,
        height:200,
        borderRadius: 10,
        borderWidth:3,
        borderColor:"black",
        overflow:"hidden",
        marginVertical:10,
        padding:5,
    },
    img:{
        width:"100%",
        height:"100%",
    },
    highlight:{
        color:Colors.closeBtn,
    }
});

export default GameoverScreen;