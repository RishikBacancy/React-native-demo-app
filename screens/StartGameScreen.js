import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Button, Alert} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";

const generateRandomNumber = (min, max, exclude) =>
{
    console.log("minBefore: "+min);
    min = Math.ceil(min);
    console.log("minAfter: "+min);
    console.log("maxBefore: "+max);
    max = Math.floor(max);
    console.log("maxAfter: "+max);
    const rn = Math.random();
    console.log("generate num: "+rn);
    const rNum = Math.floor(rn * (max - min)) + min;
    if(rNum === exclude){
        return generateRandomNumber(min, max, exclude);
    } else {
        return rNum;
    }

};

const StartGameScreen = props =>
{
    const [guessNum, setGuessNum] = useState(
        generateRandomNumber(1, 100, props.userChoice)
    );

    const [rounds,setRounds] = useState(0);
    const lowNum = useRef(1);
    const highNum = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(()=>{
        if(guessNum === props.userChoice){
            props.onGameOver(rounds);
        }
    },[guessNum, userChoice, onGameOver]);


    const nextGuessHandler = direction => 
    {
        if((direction === "lower" && guessNum < props.userChoice) || (direction === "grater" && guessNum > props.userChoice)){
            Alert.alert("Valar Morghulis","You know nothing as JonSnow",[
                {text:"Return", style:"cancel"}
            ]);
            return;
        }

        if(direction === "lower"){
            highNum.current = guessNum;
        } else {
            lowNum.current = guessNum;
        }
        
        const nextGuessNum = generateRandomNumber(lowNum.current, highNum.current, guessNum);
        setGuessNum(nextGuessNum);
        setRounds(curRound=>curRound+1);
    };

    return(
        <View style={styles.screen}>
            <Text style={{fontFamily:"Dosis-ExtraBold", fontSize:20}}>Opponent's Guess</Text>
            <NumberContainer>{guessNum}</NumberContainer>
            <Card style={styles.btnContainer}>
                <CustomButton onPress={nextGuessHandler.bind(this,"lower")}>
                    <Icon name="less-than"  size={25}/>
                </CustomButton>
                <CustomButton onPress={nextGuessHandler.bind(this,"greater")}>
                    <Icon name="greater-than" size={25}/>
                </CustomButton>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding:10,
        flex:1,
        alignItems:"center",
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 20,
        width: 300,
        maxWidth: "80%",
    }
});

export default StartGameScreen;