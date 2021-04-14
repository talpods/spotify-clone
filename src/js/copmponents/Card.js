"use strict";


class Card {
    constructor(title, image, slug, icon = "img/favicon.png") {
        this.title = title;
        this.image = image;
        this.slug = slug;
        this.icon = icon;
        this.btnImage = "img/buttonplay.png";
        this.classes = "";
    }

    render(parent) {

    }
}


export default Card;