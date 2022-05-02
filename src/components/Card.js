import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export default function Card(props) {
    let item_status
    if (props.openSpots === 0){
        item_status = "SOLD OUT"
    } else if (props.location === "Online"){
        item_status = "Online"
    }
    return (
        <div className="card">
            {item_status && <p className="card--badge">{item_status}</p>}
            <img src={`/images/${props.coverImg}`} alt={`${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <StarIcon className='card--star'/>
                <span>{props.stats.rating} </span>
                <span className="gray"> ({props.stats.reviewCount}) • </span>
                <span className="gray"> {props.location} </span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>

    )
}