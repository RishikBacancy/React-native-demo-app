import React from "react";
import { View, Text, Button, FlatList, StyleSheet} from "react-native";

const HomeScreen = ({navigation}) =>
{

  const screenNames = ["Increment","Card","Modal","Game"];

  return(
    <View style={styles.listContainner}>
      <FlatList data={screenNames} renderItem={itemData =>
        (
          <View style={styles.btnContainer}>
            <Button 
                title={itemData.item}
                onPress={()=>navigation.navigate(itemData.item)}
            />
        </View>
        )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer:{
    margin:10,
    width:"50%",
    alignSelf:"center",
  },
  listContainner:{
    padding:10,
    marginTop:5,
  },
});

export default HomeScreen;