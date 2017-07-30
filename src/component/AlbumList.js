import React ,{ Component } from 'react'
import {  Text,View } from 'react-native';
import axios from 'axios'
import AlbumDetailPage from './AlbumDetail';


class  AlbumList extends Component {

    state = {albums: []}
    componentWillMount()
    {

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState ({albums: response.data}));
    }

    renderAlbum()
    {

        return this.state.albums.map(album => <AlbumDetailPage key = {album.title}  data = {album} >{album.title} </AlbumDetailPage>);
    }

    render()
    {


        return (
           <View>

               {this.renderAlbum()}

           </View>
        );

    }
}

export default  AlbumList