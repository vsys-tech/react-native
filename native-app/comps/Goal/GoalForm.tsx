import {GestureResponderEvent, Pressable, Text, TextInput, View} from "react-native";
import {GoalFormStyles} from "./GoalFormStyles";
import React, {useState} from "react";
import {GoalItemProps, GoalTextProps} from "../../types/GoalsProps";


const GoalForm = ({onGoalAdd}: GoalTextProps) => {

    const [enteredGoalText, setEnteredGoalText] =
        useState<GoalItemProps | any>({});

    const goalHandler = (text: string) => {
        setEnteredGoalText(text);
    };

    const onAddedGoal = (event: GestureResponderEvent) => {
        onGoalAdd(enteredGoalText);
    }

    return (
        <View style={GoalFormStyles.inputContainer}>
            <TextInput style={GoalFormStyles.textInput}
                       placeholder={"your goals here"}
                       onChangeText={(newText) => goalHandler(newText)}
            />
            <Pressable style={GoalFormStyles.pressContainer}
                       onPress={(event) => onAddedGoal(event)}>
                <Text style={GoalFormStyles.pressContainerText}>Add Goal</Text>
            </Pressable>
        </View>
    );
}
export default GoalForm;