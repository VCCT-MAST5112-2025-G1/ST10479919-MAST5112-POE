import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#212121",
        flexDirection: 'column',
        gap: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textStyle: {

    },

    button: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#282828",
        padding: 10,
        borderRadius: 5,
        minWidth: 100,
    },

    switchContainer: {
        flexDirection: 'row',
        padding: 4,
        gap: 20,
        backgroundColor: "#2F2F2F",
        borderRadius: 50
    },

    pressableButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginHorizontal: 4,
        backgroundColor: "#282828",
        justifyContent: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 500,
    },

    selectedButton: {
        color: '#FFC72C',
    }

})