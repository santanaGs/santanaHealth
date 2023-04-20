import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:  {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel:{
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput:{
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
    },
    buttonCalculator:{
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "purple",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    }
});

export default styles