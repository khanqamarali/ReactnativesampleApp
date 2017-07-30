import React ,{ Component } from 'react'
import {  Text,View } from 'react-native';

const Card = (props) =>
{
   return(
       <View style={Styles.containerStyle}>
           {props.children}
       </View>

   );

};


const Styles = {
    containerStyle : {
        borderRadius : 2,
        borderBottomWidth : 0,
        borderColor : '#ddd',
        shadowColor : '#000',
        shadowOffset : {width : 0, height : 2 },
        shadowOpacity : 0.1,
        elevation : 1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 10
    }
}
export default Card;