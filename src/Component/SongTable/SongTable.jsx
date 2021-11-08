import React from 'react';
import { Component } from 'react';
import './SongTable.css';

function SongTable(props){
    return(
        <div className='table'>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
                {props.songList.map((song) => {
                    return (
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <button onClick={() => props.deleteSong(song.id)}>Delete</button>
                        </tr>

                    )
                })}
            </table>
        </div>
    )
}
export default SongTable;