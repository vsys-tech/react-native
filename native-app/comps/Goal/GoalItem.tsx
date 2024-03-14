import {Pressable, Text, View} from "react-native";
import React from "react";
import {GoalProps} from "../../types/GoalsProps";
import {GoalFormStyles} from "./GoalFormStyles";

const GoalItem = (props: GoalProps) => {

    const goalSelectHandler = (key: string) => {
       // console.log("on goal select", key)
        props.onPress(key);
    }

    return (

        <View key={props.element.key}>
            <Pressable android_ripple={{color: '#dddddd'}}
                       onPress={() => goalSelectHandler(props.element.key)}
                       style={(pressed) => pressed && GoalFormStyles.listItem}
            >
                <Text style={GoalFormStyles.listText}>
                    {props.element.text}
                </Text>
            </Pressable>
        </View>
    )

}

export default GoalItem;