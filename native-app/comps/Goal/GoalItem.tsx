import {Pressable, Text, View} from "react-native";
import {GoalFormStyles} from "./GoalFormStyles";
import React from "react";
import {GoalProps} from "../../types/GoalsProps";


const GoalItem = ({item, onPress}: GoalProps) => {

    const goalSelectHandler = (key: string) => {
        onPress(key);
    }

    return (
        <View key={item.key}>
            <Pressable android_ripple={{color:'#dddddd'}}
                             onPress={() => goalSelectHandler(item.key)}
                              style={({pressed}) => pressed && GoalFormStyles.listItem}
            >
                <Text style={GoalFormStyles.listText}>
                    {item.text}
                </Text>
            </Pressable>
        </View>
    )

}

export default GoalItem;