import React ,{ Component } from 'react'
import {  Text,View ,ScrollView} from 'react-native';
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

        return this.state.albums.map(album =>
            <AlbumDetailPage key = {album.title}  album = {album} />

        );
    }

    render()
    {


        return (
           <ScrollView>

               {this.renderAlbum()}

           </ScrollView>
        );

    }
}

export default  AlbumList