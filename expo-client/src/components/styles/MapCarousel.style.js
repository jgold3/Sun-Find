import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderColor: '#ff4500',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: .2,
        borderWidth: 2,
        borderRadius: 5,
        width: "70%",
        height: 45,
        marginBottom: 20,
    },
    text: {
        height: 50,
        flex: 1,
        padding: 10,
    },
});