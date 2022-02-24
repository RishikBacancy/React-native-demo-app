import React, {useState} from "react";
import { View, Text, Button} from "react-native";
import Colors from "../constants/Colors";

const IncrementScreen = ({navigation}) =>
{

    const [data,setData] = useState(0);

    return(

        <View style={{flex:1,flexDirection:"column",justifyContent:"space-around"}}>

            <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>

                <View>
                    <Button
                        title="Decremet"
                        onPress={()=>setData(data-1)}
                        color={Colors.closeBtn}           
                    />
                </View>

                <View>
                    <Text style={{alignItems:"center",fontSize:20}}>{data}</Text>
                </View>

                <View>
                    <Button
                        title="Increment"
                        onPress={()=>setData(data+1)}
                        color={Colors.submitBtn}
                    />
                </View>

            </View>

            <View>
                <Button
                    title="Skip to card"
                    onPress={()=>navigation.navigate("Card")}               
                />
            </View>

        </View>
    );
}


export default IncrementScreen;