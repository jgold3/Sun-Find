import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: "80%",
        borderRadius:25,
        borderWidth: 2,
        borderColor: '#ff4500',
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginHorizontal: 20,
        marginTop:5,
        backgroundColor: '#fff',
    },
    text: {
        flex: 1,
        padding: 10,
        fontSize: 24,
        fontWeight: '700',
        color: '#ff4500',
    },
});


export default PrimaryButton = ({ title, btnStyle, txtStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.container, btnStyle]}
            onPress={onPress}
        >
            <Text style={[styles.text, txtStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};