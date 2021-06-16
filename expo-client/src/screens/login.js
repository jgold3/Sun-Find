import React, {useState} from 'react';
import { Image, KeyboardAvoidingView, View } from 'react-native';
import styles from './styles/login.style';
import { setToken } from '../api/token';
import { login } from '../api/account';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import TextButton from '../components/TextButton';
import SubText from '../components/SubText';
import FormInput from '../components/FormInput';

export default LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    let submit = async () => {
        login(email, password)
            .then(async res => {
                await setToken(res.auth_token);
                navigation.navigate('SunFind');
            })
            .catch(res => setErrMsg(res.error));
        
    };

    let skip = async () => {
        alert("Ayye");
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Image source = {require('../../assets/logo.png')} style={styles.logo} />

            <FormInput placeholder='Email' onChangeText={(email) => setEmail(email)} />
            <FormInput placeholder='Password' secure={true} onChangeText={(password) => setPassword(password)} />
            <TextButton title="Forgot Password?" onPress={() => alert('You idiot')} />

            <PrimaryButton title="Login"  onPress={submit}/>

            <SubText>Don't have an account?</SubText>
            <View style={styles.btmContainer}>
                <SecondaryButton title="Sign Up" onPress={() => navigation.navigate('Sign Up')} />
                <SecondaryButton title="Skip" onPress={skip} />
            </View>

            <View>
                {errMsg ? <SubText>{errMsg}</SubText> : null}
            </View>
        </KeyboardAvoidingView>
    );
};