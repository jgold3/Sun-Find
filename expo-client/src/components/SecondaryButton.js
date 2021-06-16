import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/SecondaryButton.style';

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