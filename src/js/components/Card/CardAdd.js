import Component, {setImageSource, setValue} from '../../lib/Component';
import {isAuthenticated} from '../../lib/authentication';
import Card from './Card';
import CardAddButton from './CardAddButton';

class CardAdd extends Card {
    constructor(props) {
        super(props);


        if(isAuthenticated()) {
            this.addBtn = new CardAddButton();
            this.append(this.addBtn);
            this.addListener("click", this.click, this);
        }

    }

    click(event) {
        super.click(event);
     
        if(event.card) {
            event.card.action = "add";
        }
    }
}

export default CardAdd;