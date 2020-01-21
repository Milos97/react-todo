import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => 
        {
            return <div className="list" key={item.key}>
            <p>
            <span>
                <FontAwesomeIcon className="facircle far" icon='check-circle'
                onClick={ () => props.handleToggleDoneClick(item.key)}
                />
            </span>
            <input 
            className="name"
            type="text" 
            id={item.key} 
            style= {item.isdone ? {textDecoration: "line-through"} : {textDecoration: "none"}}
            value = {item.text}
            onChange = {
                (e) => {
                    props.setUpdate(e.target.value, item.key)
                }
            }
            />
            <span>
                <FontAwesomeIcon className="fatrash" icon='trash'
                onClick={ () => props.deleteItem(item.key)}
                />
            </span>
            </p>
            </div>
        })
    return(
        <div>
            <FlipMove duration={300} easing="ease-in-out">
            {listItems}
            </FlipMove>
            </div>
    )
}

export default ListItems;