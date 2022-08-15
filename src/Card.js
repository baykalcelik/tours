import './card.css';
import { useState } from 'react';
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';


export default function Card(props){

    let info_text = props.info.substring(0, (props.info.length)/2 );

    const [kisaGoster, setKisaGoster ] = useState(true);
    return(
        <div id="card_cover">
            
            <div id="img_cover">
                <img id="resim" src={props.image} alt="tour image"/>
            </div>

            <div id="card_context">
                <div id="fLine"><span id="name">{props.name}</span> <span id="price">${props.price}</span> </div>
                <div id="text">{kisaGoster ? info_text : props.info}<a href="" id="read_more" onClick={(ev)=>{ev.preventDefault(); setKisaGoster(!kisaGoster) }}>{kisaGoster ? "Read More" : "Show Less"}</a>  </div>
                <button id="cancel" onClick={()=>{
                    // cardId={item.id} removeCard={setKartlar} cards={kartlar} 
                    let newData = props.cards.filter((item, index, array)=>{return item.id !== props.cardId});
                    props.removeCard([...newData]);
                }}>Not Interested</button>

            </div>
        </div>
    )
}