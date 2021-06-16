import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles/FormInput.style';

export default FormInput = ({ contStyle, userTxtStyle, placeholder, placeholderColor, secure, onChangeText }) => {
    return (
        <View style={[styles.container, contStyle]}>
            <TextInput
                style={[styles.text, userTxtStyle]}
                placeholder={placeholder ? placeholder : null}
                placeholderTextColor = {placeholderColor ? placeholderColor : '#ff4500'}
                secureTextEntry={secure ? secure : false}
                onChangeText={onChangeText}
            />
        </View>
    );
};