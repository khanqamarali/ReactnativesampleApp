import React, { Component } from 'react';
import { AppRegistry, Text,View } from 'react-native';
import Header from "./src/component/header";
import AlbumList from  "./src/component/AlbumList";




const myApp = () => {

    return(
        <View>
        <Header headerText= { 'Albums!'} />
        <AlbumList/>
        </View>
    )
}



AppRegistry.registerComponent('myApp', () => myApp);
