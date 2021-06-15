import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginBottom: 5,
    },
});


export default SubText = ({ style, children }) => {
    return (
        <View>
            <Text style={[styles.text, style]}>
                {children}
            </Text>
        </View>
    );
};