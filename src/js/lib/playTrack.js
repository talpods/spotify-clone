"use strict";

const playTrack = (title, author, image, song) => {
    return {
        title: title || "Title",
        author: author || "Author",
        image: image || "img/song-image.png",
        song: song
    };
};

export default playTrack;