import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({

    container: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        backgroundColor:"#ff4500",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: .2,
    },
    text: {
        flex: 1,
        padding: 10,
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
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