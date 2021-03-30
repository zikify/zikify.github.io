import { NONE_TYPE } from '@angular/compiler';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AccueilComponent } from '../accueil/accueil.component';
import * as $ from "jquery";

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {

  @Input() token: String;

  constructor() { }

  ngOnInit(): void {
    console.log("SPOTIFY-COMPONENT Token = " + this.token);
  }

  chercherSons(): void{
    //Get the value of the search box
    let raw_search_query = $('#search-text').val();
    raw_search_query = raw_search_query.toString();
    let search_query = encodeURI(raw_search_query);
    // Make Spotify API call
    // Note: We are using the track API endpoint.
    $.ajax({
    url: `https://api.spotify.com/v1/search?q=${search_query}&type=track`,
    type: 'GET',
    headers: {
        'Authorization' : 'Bearer ' + this.token
    },
    success: function(data) {
    // Load our songs from Spotify into our page
    let num_of_tracks = data.tracks.items.length;
    let count = 0;
    // Max number of songs is 12
    const max_songs = 6;
    while(count < max_songs && count < num_of_tracks){
      // Extract the id of the FIRST song from the data object
      let id = data.tracks.items[count].id;
      // Constructing two different iframes to embed the song
      let src_str = `https://open.spotify.com/embed/track/${id}`;
      let iframe = `<div class='song'><iframe src=${src_str} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>`;
      let parent_div = $('#song_'+ count);
      parent_div.html(iframe);
      count++;
      }
    }
  }); // End of Spotify ajax call
  }

}
