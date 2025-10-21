import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: "#212121",
        flexDirection: 'column',
        gap: 5,
        padding: 5,
        justifyContent: 'center',
    },

    textStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: "center",
    },

    titleText: {
        color: "#FFC72C",
        fontSize: 24,
        marginBottom: 30,
        textAlign: "center"
    },

    headerText: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    subtitleText: {
        color: '#b0b0b0',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },

    switchContainer: {
        flexDirection: 'row',
        padding: 4,
        gap: 20,
        backgroundColor: "#2F2F2F",
        borderRadius: 50,
        maxWidth: "100%",
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
        fontWeight: '500',
        minWidth: 90,
        textAlign: "center"
    },

    switchButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        minWidth: 50,
        textAlign: "center"
    },

    selectedButton: {
        color: '#FFC72C',
    },

    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        padding: 15,
    },

    inputStyle: {
        height: 50,
        borderColor: '#2F2F2F',
        backgroundColor: '#2F2F2F',
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 30,
        color: '#fff',
        fontSize: 16,
    },

    inputStyleError: {
        height: 50,
        borderColor: '#ff0000',
        backgroundColor: '#2F2F2F',
        borderWidth: 2,
        borderRadius: 30,
        paddingHorizontal: 30,
        color: '#fff',
        fontSize: 16,
    },

    inputLabel: {
        color: '#FFC72C',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        marginLeft: 5,
    },

    card: {
        backgroundColor: '#2a2a2a',
        borderRadius: 16,
        padding: 15,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        borderLeftWidth: 4,
        borderLeftColor: '#FFC72C',
    },

    successText: {
        color: "#00ff00",
        textAlign: 'center'
    },

    errorText: {
        color: "#ff0000",
        textAlign: 'center',
        fontSize: 14,
        marginTop: 5,
    },

    managementSection: {
        marginTop: 20,
        gap: 15,
    },

    managementTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#FFFFFF'
    },

    statsContainer: {
        backgroundColor: '#2a2a2a',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },

    statsTitle: {
        textAlign: 'center',
        marginBottom: 8,
        fontWeight: '600',
        color: '#FFFFFF'
    },

    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    statsItem: {
        fontSize: 12,
        color: '#FFFFFF'
    },

    statsTotal: {
        textAlign: 'center',
        marginTop: 8,
        color: '#FFC72C',
        fontWeight: '600'
    },
});

export const categoryStyle = StyleSheet.create({
    categories: {
        padding: 12,
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