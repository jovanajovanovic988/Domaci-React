//import React from 'react'
import PropTypes from 'prop-types'//impt precica
import Button from './Button'
import {useLocation} from 'react-router-dom'
//look at the route that we're currently on
const Header = ({title, onAdd, showAdd}) => {
    // const onClick=()=>{
    //     console.log('click')
    // }
    //moze da pise i props bez zagradaii
    const location=useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && (
                <Button text={showAdd?'Zatvori':'Dodaj'} onClick={onAdd}/>
            )}
        </header>
    )
}
Header.defaultProps={
    title: 'Planer poslastičarnice'
    //ovo je default, kada bismo mu prosledili sa neke druge strane
    //onda bi se prikazalo nesto drugo
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}
//const headingStyle ={
    //color: 'black',
    //backgroundColor: 'blue',
//}
export default Header
//rafce precica i enter
//kada prosledjujemo broj ide u {broj}