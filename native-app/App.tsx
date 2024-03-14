import {View} from 'react-native';
import Goals from "./comps/Goal/Goals";
import {GoalFormStyles} from "./comps/Goal/GoalFormStyles";

export default function App() {
  return (
      <View style={GoalFormStyles.appContainer}>
        <Goals/>
      </View>
  );
}

