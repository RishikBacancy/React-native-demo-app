import React, { useState } from "react";
import { View, Modal, StyleSheet, Button, TextInput, Text} from "react-native";
import Colors from "../constants/Colors";

const ModalScreen = ({navigation}) => 
{
    const [modalBtn,setModalBtn] = useState(false);
    const [comment,setComment] = useState("");

    const inputHandler = enteredText =>
    {
        setComment(enteredText);
    }

    const getComment = () =>
    {
        if(comment.length === 0){
            return;
        } 
        console.log(comment);
        setComment("");
    }

    return(
        <View style={styles.modalConntainer}>
            <View style={[styles.btnContainer,{alignSelf:"center"}]}>
                <Button
                    title="click me!"
                    onPress={()=>setModalBtn(true)}
                />
            </View>

            <View>
                <Modal visible={modalBtn} animationType="slide">
                    <View style={styles.modalConntainer}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Add a comment!"
                                onChangeText={inputHandler}
                                value={comment}
                            />
                        </View>
                        <View style={styles.btnFrame}>
                            <View style={styles.btnContainer}>
                                <Button
                                    title="submit"
                                    onPress={getComment}
                                    color={Colors.submitBtn}
                                />
                            </View>
                            <View style={styles.btnContainer}>
                                <Button
                                    title="close"
                                    onPress={()=>setModalBtn(false)}
                                    color={Colors.closeBtn}
                                />
                            </View>
                        </View>

                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalConntainer:{
        flex:1,
        padding: 20,
        justifyContent:"center",
        fontFamily: "Dosis-semiBold",
    },
    inputContainer:{
        borderWidth: 1,
        width: "80%",
        alignItems:"center",
        alignSelf:"center",
        borderColor: "black",
    },
    btnFrame:{
        flexDirection:"row",
        justifyContent:"space-around",
    },
    btnContainer:{
        marginTop: 10,
        width:100,
    }

});

export default ModalScreen;