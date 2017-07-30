import React ,{ Component } from 'react'
import {  Text,View,Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection'

const AlbumDetailPage = ({album}) => {

    const {thumbnail_image,title,artist,image} = album;
    const {headerStyle,ContainerthumnailStyle,
        headerTextStyle, thumnailStyle} = Styles;

    return (
        <Card>
            <CardSection>
                <View style = {ContainerthumnailStyle}>
                  <Image source={{uri : thumbnail_image}}
                         style = {thumnailStyle}/>
                </View>
                <View style = {headerStyle}>
                <Text style = {headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{uri : image}}
                       style = {thumnailStyle}/>

            </CardSection>

        </Card>
   );

};

const Styles = {
    headerStyle : {
       flexDirection : 'column',
        justifyContent : 'space-around'
    },
    headerTextStyle : {
     fontSize : 18
    },
    thumnailStyle : {
      height :  50,
      width : 50
    },

    ContainerthumnailStyle : {
        justifyContent :  'center',
        alignItems : 'center',
        marginLeft :  10,
        marginRight : 10
    }

}

export default AlbumDetailPage;
