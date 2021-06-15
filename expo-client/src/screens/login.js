import React, {useState} from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles/login.style';
import setToken from '../api/token';

export default LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    let submit = async () => {
        alert("Ayye");
    };

    let signUp = async () => {
        alert("Ayye");
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Image source = {require('../../assets/logo.png')} style={styles.logo}/>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder = 'Email'
                    placeholderTextColor = '#ff4500'
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Password'
                    placeholderTextColor = '#ff4500'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={submit} style={styles.loginBtn}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.subText}>Don't have an account?</Text>
            </View>
            <View style={styles.btmContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Sign Up')} style={styles.btmButtons}>
                    <Text style={styles.btmButtonsText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={signUp} style={styles.btmButtons}>
                    <Text style={styles.btmButtonsText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};
