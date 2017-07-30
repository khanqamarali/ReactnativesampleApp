import React ,{ Component } from 'react'
import {  Text,View } from 'react-native';
import Card from './card';

const AlbumDetailPage = (props) => {

    return (
        <Card>
         <Text>{props.album.title}</Text>
        </Card>
   );

};

export default AlbumDetailPage;
