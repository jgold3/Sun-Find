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


export default PrimaryButton = ({ title, btnStyle, txtStyle, onPress }) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.textInput}
                placeholder='Password'
                placeholderTextColor = '#ff4500'
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />
        </View>
    );
};