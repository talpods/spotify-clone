"use strict";

// contains demo api for player
import { mountPlayer } from './components/Player/Player';
import Track from "./components/Player/Track";

const player = mountPlayer(document.querySelector("#player"));

// example for track play
let track = new Track();
track.song = "https://topinterns.saleem.dev/tracks/4-1.mp3";
track.image = "https://topinterns.saleem.dev/images/tracks/10.png";
track.title = "Classic";
track.author = "Adrian Gurvitz";

player.update(track);