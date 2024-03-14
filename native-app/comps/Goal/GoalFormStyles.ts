import {StyleSheet} from "react-native";

export const GoalFormStyles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        flex: 1,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        flex: 1,
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    textInput: {
        backgroundColor: "white",
        borderRadius: 12,
        height: 40,
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        marginBottom: 10,
        padding: 8
    },
    pressContainer: {
        padding: 8,
        alignItems: 'center',
        width: '30%',
        marginBottom: 10,
        height: 40,
        borderRadius: 24,
        borderWidth: 1,
        backgroundColor: 'blue'
    },
    pressContainerText: {
        justifyContent: 'center',
        color: 'white'
    },
    listContainer: {
        flex: 4
    },
    listItem: {
        padding:8,
        marginLeft:0,
        margin: 10,
        width: "93%",
        borderRadius: 12,
        borderWidth: 1,
        backgroundColor: '#5f09d0',
        opacity : 0.75
    },
    listText: {
        color: '#ffffff',
        fontSize: 15,
    }
});
