import React, {useState} from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles/login.style';
import { setToken } from '../api/token';
import { login } from '../api/account';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import TextButton from '../components/TextButton';
import SubText from '../components/SubText';

export default LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    let submit = async () => {
        // login(email, password)
        //     .then(async res => {
        //         await setToken(res.auth_token)
        //     })
        //     .catch(res => setErrMsg(res.error));
        alert("Ayye");
        
    };

    let skip = async () => {
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
            
            <TextButton title="Forgot Password?" onPress={() => alert('You idiot')} />

            <PrimaryButton title="Login"  onPress={submit}/>

            <SubText>Don't have an account?</SubText>
            <View style={styles.btmContainer}>
                <SecondaryButton title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
                <SecondaryButton title="Skip" onPress={skip} />
            </View>
            <View>
                {errMsg ? <Text>{errMsg}</Text> : null}
            </View>
        </KeyboardAvoidingView>
    );
};
