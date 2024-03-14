import {Animated, Button, Pressable, TextInput, View} from "react-native";
import {useState} from "react";
import {CompType} from "./CompType";
import Text = Animated.Text;


const Comp2 = ( {onAdded}: CompType) => {

    const [addedText, setAddedText] = useState('');

    const handleTextChanged = (text: string) => {
        setAddedText(text);
    }

    const handlePress = () => {
        onAdded(addedText);
    }


    return (
            <View>
                <TextInput style={{justifyContent:'center',width:'100%', margin:10, borderWidth: 1, borderColor: 'blue'}}
                           onChangeText={handleTextChanged}
                />
                <Pressable style={{justifyContent:'center',width:'100%', margin:10, borderWidth: 1,backgroundColor:'blue'}}
                           onPress={handlePress}>
                    <Text style={{color:'white'}}>Add</Text>
                </Pressable>
            </View>
    )
}


export default Comp2;