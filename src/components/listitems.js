import React from 'react';
import '../components/listitems.css';
import Modal from './modal.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function listItems(props){
    const items=props.items;

    const formatDate=(date)=>{
        date = new Date(date);
        date.toString();
        const ye= new Intl.DateTimeFormat('en',{year:'numeric'}).format(date);
        const mo= new Intl.DateTimeFormat('en',{month:'short'}).format(date);
        const da= new Intl.DateTimeFormat('en',{day:'2-digit'}).format(date);
        return `${da} ${mo},${ye}`
    }
    const listitems=items.map(item => {
        return <div className='list' key={item.key}>
            <div><input className="check_box" type="checkbox" id={item.key} onClick={()=>props.markChecked(item.key)} defaultChecked={item.isCompleted}/>
            <span className="text" id={item.key+'t'} type='text'>{item.text}<span className="deadline">{formatDate(item.deadline)}</span></span> 
            <span className='faiconsMain'>
                <Modal  itemKey={item.key}/>
                <FontAwesomeIcon  style={{marginLeft:'1vw'}} icon='trash' onClick={() => props.deleteItem(item.key)} />
            </span></div>
        </div>
    })
    return(
    <div>{listitems}</div>
    )
}

export default listItems;