import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({

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


export default FormInput = ({ contStyle, userTxtStyle, placeholder, placeholderColor, secure, onChangeText }) => {
    return (
        <View style={[styles.container, contStyle]}>
            <TextInput
                style={[styles.text, userTxtStyle]}
                placeholder={placeholder}
                placeholderTextColor = {placeholderColor ? placeholderColor : '#ff4500'}
                secureTextEntry={secure}
                onChangeText={onChangeText}
            />
        </View>
    );
};