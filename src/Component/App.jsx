import React, { Component } from 'react';
import axios from 'axios';
import SongTable from './SongTable/SongTable';
import AddNewSong from './AddNewSong/AddNewSong';


class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            songList: [],
        }
    }

    componentDidMount() {
        this.getSong();
        this.deleteSong();
        this.addSong();
    }
    

    async getSong() {
       let response = await axios.get("http://127.0.0.1:8000/music/");
      this.setState({
          songsList: response.data.songList
      });
      console.log('Song Variable', this.state.songList);
      console.log(response)
    }

    deleteSong = async (id) => {
        let response = await axios.delete("http://127.0.0.1:8000/music/" + id + "/");
        this.getSong()
    }

    addSong = async (song) => {
        let response = await axios.post("http://127.0.0.1:8000/music/", song);
        let data = response.data;
        this.getSong()
    }

    render(){
        return (
            <div>
                <button onClick={this.getSong}>Click for songs!</button>
                <AddNewSong createNewSong={this.addSong} />
                <SongTable deleteSong={this.deleteSong} songList={this.state.songList} />
            </div>
        )
    }
}

export default App;
