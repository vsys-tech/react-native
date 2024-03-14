import {View} from 'react-native';
import {GoalFormStyles} from "./comps/Goal/GoalFormStyles";
import Goals from "./comps/Goal/Goals";

export default function App() {
    return (
        <View style={GoalFormStyles.appContainer}>
            <Goals/>
        </View>
    );
}

