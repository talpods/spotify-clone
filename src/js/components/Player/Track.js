class Track {
    constructor(title, author, image, song) {
        this.title = title || "Title" ;
        this.author = author || "Author";
        this.image = image || "img/song-image.png";
        this.song = song;
    }
}

export default Track;