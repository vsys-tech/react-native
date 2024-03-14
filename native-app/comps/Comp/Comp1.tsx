import {View} from "react-native";
import Comp2 from "./Comp2";


const Comp1 = () => {

    const onTextAdded = (text: string) =>{
        console.log("added");
        console.log(text);
    }

    return(
        <View>
            <Comp2 onAdded={onTextAdded}/>
        </View>
    )
}

export default Comp1