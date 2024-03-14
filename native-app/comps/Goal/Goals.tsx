import GoalForm from "./GoalForm";
import React, {useState} from "react";
import {GoalItemProps} from "../../types/GoalsProps";
import {GoalFormStyles} from "./GoalFormStyles";
import GoalItem from "./GoalItem";
import {FlatList, ListRenderItemInfo, Text, View} from "react-native";

const Goals = () => {

    const [courseGoals, setCourseGoals] =
        useState<GoalItemProps[]>([]);


    const onGoalSelect = (selectedGoal: string) => {
        setCourseGoals(courseGoals => {
                return courseGoals.filter(
                    (selectedItem: GoalItemProps) => selectedItem.key !== selectedGoal)
            }
        );
    }

    const OnGoalAdded = (enteredGoalText: string) => {
        const randomValue = Math.random().toString()
        setCourseGoals((currentCourseGoals) =>
            [...currentCourseGoals,
                {text: enteredGoalText, key: randomValue}
            ]);
    }

    return (
        <View style={GoalFormStyles.appContainer}>
            <View>
                <GoalForm onGoalAdd={text => OnGoalAdded(text)}/>
            </View>
            {
                courseGoals.length > 0 ?
                    <View style={GoalFormStyles.listContainer}>
                        <FlatList data={courseGoals}
                                  renderItem={(item:ListRenderItemInfo<GoalItemProps>) =>
                                      <GoalItem element={item.item}
                                                onPress={(key) => onGoalSelect(key)}
                                      />
                                  }
                                  keyExtractor={item => item.key}
                        />
                    </View>
                    : <View><Text>No Data</Text></View>
            }
        </View>
    )
}

export default Goals;
