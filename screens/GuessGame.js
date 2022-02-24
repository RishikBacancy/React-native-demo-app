import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, TextInput, Alert} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import CustomButton from "../components/CustomButton";

const GuessGame = props =>
{
    const [getValue, setGetValue] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [selectNum, setSelectNum] = useState();
    
    const inputNumber = inputText =>
    {
        setGetValue(inputText.replace(/[^0-9]/g, ""));
    }

    const resetHandler = () =>
    {
        setGetValue("");
        setSubmitted(false);
    }

    const submitHandler = () =>
    {

        const chosenNum = parseInt(getValue);

        if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
            Alert.alert("Invalid Number!!", 
                "Number must be in between 0 to 99.",
                [{text:"Okay", style:"destructive", onPress: resetHandler}])
            return;
        }

        setSubmitted(true);
        setGetValue("");
        setSelectNum(chosenNum);
    }

    let submittedOutput;

    if(submitted){
        submittedOutput = (
            <Card style={styles.submittedContainer}>
                <Text style={{fontFamily:"Dosis-Bold", fontSize:15}}> Your chosen Number</Text>
                <NumberContainer>{selectNum}</NumberContainer>
                <CustomButton onPress={()=>props.onStartGame(selectNum)}>
                    START GAME
                </CustomButton>
            </Card>
        );
    }

    return(
        <TouchableWithoutFeedback onPress={()=> {
                Keyboard.dismiss();
                }}>
            <View style={{flex:1,alignItems:"center"}}>
                <Text style={styles.txtContainer,{fontFamily:"Dosis-ExtraBold", fontSize:20, marginBottom:10,marginTop:10}}>
                    Start a new Game!
                </Text>

                <Card style={styles.cardContainer}>

                    <View style={styles.txtContainer}>
                        <Text style={{fontFamily:"Dosis-Bold",fontSize:15}}>Select a number</Text>
                    </View>

                    
                    <Input style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize="none" 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        onChangeText={inputNumber}
                        value={getValue}/>
                    

                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>

                        <View style={styles.btnContainer}>
                            <Button
                                title="Reset"
                                onPress={resetHandler}
                                color={Colors.resetBtn}
                            />
                        </View>
                        
                        <View style={styles.btnContainer}>
                            <Button
                                title="Submit"
                                onPress={submitHandler}
                                color={Colors.submitBtn}
                            />
                        </View>

                    </View>

                </Card>

                {submittedOutput}
                    
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    btnContainer:{
        width:100,
        marginTop: 20,
    },
    txtContainer: {
        alignItems:"center",
    },
    cardContainer:{
        width:"80%",
    },
    input:{
        width:50,
        alignSelf: "center",
        height:50,
        textAlign: "center",
    },
    submittedContainer:
    {
        marginTop:10,
        alignItems: "center",
    }
});

export default GuessGame;