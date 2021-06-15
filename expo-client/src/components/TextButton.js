import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginBottom: 40,
    },
});


export default TextButton = ({ title, style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text >{title}</Text>
        </TouchableOpacity>
    );
};