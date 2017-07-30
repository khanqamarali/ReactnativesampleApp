import React ,{ Component } from 'react'
import {  Text,View } from 'react-native';

const CardSection = (props) => {

    return(

        <View style={Styles.containerStyle}>
            {props.children}
        </View>
    );

};

const Styles = {
    containerStyle : {
        padding : 5,
        borderBottomWidth : 0,
        backgroundColor : '#fff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        position : 'relative',
        shadowColor : '#000'
    }
}

export default CardSection;