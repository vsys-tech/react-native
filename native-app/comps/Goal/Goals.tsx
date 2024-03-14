import {FlatList, Text, View} from "react-native";
import GoalForm from "./GoalForm";
import React, {useState} from "react";
import {GoalItemProps} from "../../types/GoalsProps";
import {GoalFormStyles} from "./GoalFormStyles";
import GoalItem from "./GoalItem";

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
        setCourseGoals((currentCourseGoals: GoalItemProps[]) =>
            [...currentCourseGoals,
                {text: enteredGoalText, key: Math.random().toString()}
            ]);
    }


    return (
        <View style={GoalFormStyles.appContainer}>
            <View>
                <GoalForm onGoalAdd={OnGoalAdded}/>
            </View>
            {
                courseGoals.length > 0 ?
                    <View style={GoalFormStyles.listContainer}>
                        <FlatList data={courseGoals}
                                  renderItem={(item) =>
                                      <GoalItem item={item.item} onPress={onGoalSelect}/>

                                  }
                        />
                    </View>
                    : <View><Text>No Data</Text></View>
            }
        </View>
    )
}

export default Goals;
