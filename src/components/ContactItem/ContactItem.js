import React from 'react'
import './ContactItem.css'
import PropTypes from 'prop-types'

const Contact=  ({el,onDelete}) => {

    const deleteUser =  ()=> {
         onDelete(el.id)
    }
    return (
        <li id={el.id} className="item">
            <span className="label1">{el.name}</span>
            <span className="label2">{el.number}</span>
            <button onClick={deleteUser} className="button">X</button>
        </li>
    )
}

Contact.propTypes = {
    el : PropTypes.object.isRequired,
    onDelete :PropTypes.func.isRequired,
}

export default Contact;