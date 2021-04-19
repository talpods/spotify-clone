"use strict";

import playTrack from './playTrack';

/**
 * Track iterator class
 */
class TrackIterator {

    /**
     * constructor
     * @param {array} tracks - tracks to play
     */
    constructor(tracks = [playTrack()]) {
        this.tracks = tracks ;
        this.pos = 0;
    }

    /**
     * next()
     * @returns next track
     */
    next() {
        if(this.pos < this.tracks.length) {
            return this.tracks[this.pos++];
        }

        return playTrack(); // empty track
    }

    /**
     * reset position
     */
    reset() {
        this.pos = 0;
    }
}

export default TrackIterator;