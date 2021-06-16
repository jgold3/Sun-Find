import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/TextButton.style';

export default TextButton = ({ title, style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text >{title}</Text>
        </TouchableOpacity>
    );
};