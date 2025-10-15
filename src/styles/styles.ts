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
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: "center",
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
        minWidth: 90,
        textAlign: "center"
    },

    switchButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 500,
        minWidth: 50,
        textAlign: "center"
    },

    selectedButton: {
        color: '#FFC72C',
    },

    titleText: {
        color: "#FFC72C",
        fontSize: 24,
        marginBottom: 30,
        textAlign: "center"
    },

    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
    },

    successText: {
        color: "#00ff00ff",
        textAlign: 'center'
    },

    errorText: {
        color: "#ff0000ff",
        textAlign: 'center',
    },

})

export const categoryStyle = StyleSheet.create({
    categories: {
        padding: 15,
        gap: 5,
        backgroundColor: '#2F2F2F',
        borderRadius: 15,
        width: '100%',
        minWidth: '50%',
        maxWidth: 'auto'
    },
    name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    description: {
        color: '#fff',
        marginVertical: 5,
    },
    price: {
        color: '#F8BD06',
        fontSize: 16
    }
});