import React ,{ Component } from 'react'
import {  Text,View,TouchableOpacity,  } from 'react-native';


const Button = ( { onPress }) => {
    return(
    <TouchableOpacity onPress={onPress}

                      style = {Styles.buttonStyle}>
        <Text style = {Styles.TextStyle}>Click Me!!</Text>
    </TouchableOpacity>


    );
};

const Styles = {
    TextStyle : {
        alignSelf: 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10,

    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
    }
}

export default Button;