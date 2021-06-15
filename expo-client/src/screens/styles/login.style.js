import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 40,
        height: 250,
        width: 250,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: .2,
    },
    inputView: {
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
      
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
    },

    forgot_button: {
        height: 30,
        marginBottom: 50,
    },
    loginBtn: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        backgroundColor:"#ff4500",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: .2,
    },
    btmButtons: {
        flex: 1,
        width: "80%",
        borderRadius:25,
        borderWidth: 2,
        borderColor: '#ff4500',
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginHorizontal: 20,
        marginTop:5,
        backgroundColor: '#fff',
    },
    btmButtonsText: {
        flex: 1,
        padding: 10,
        fontSize: 24,
        fontWeight: '700',
        color: '#ff4500',
    },
    loginText: {
        flex: 1,
        padding: 10,
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
    },
    btmContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subText: {
        
        marginTop: 10,
        marginBottom: 5,

    },
});