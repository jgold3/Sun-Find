import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/SubText.style';

export default SubText = ({ style, children }) => {
    return (
        <View>
            <Text style={[styles.text, style]}>
                {children}
            </Text>
        </View>
    );
};