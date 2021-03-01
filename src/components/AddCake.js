import {useState} from 'react'
const AddCake = ({onAdd}) => {
    const [text, setText]=useState('');
    const [day, setDay]=useState('');
    const [quantity, setQuantity]=useState('');
    const [reminder, setReminder]=useState(false);
    const onSubmit=(e)=>{
        e.preventDefault()//da ne submituje na stranicu
        //e je event objekat
        if(!text){
            alert('Dodajte ime poručene torte.')
            return
        }
        onAdd({text,day,reminder,quantity})
        setText('')
        setDay('')
        setQuantity('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Torta</label>
                <input type="text" placeholder='Dodaj tortu' 
                       value={text}
                       onChange={(e)=>{setText(e.target.value)}}
                />
            </div>
            <div className='form-control'>
                <label>Dan narudžbine</label>
                <input type="text" placeholder='Dodaj dan'
                    value={day}
                    onChange={(e)=>{setDay(e.target.value)}}
                />
            </div>
            <div className='form-control'>
                <label>Količina</label>
                <input type="text" placeholder='Dodaj količinu naručene torte'
                    value={quantity}
                    onChange={(e)=>{setQuantity(e.target.value)}}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Podsetnik</label>
                <input type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e)=>{setReminder(e.currentTarget.checked)}}
                />
            </div>

            <input type="submit" value='Sačuvaj porudžbinu' className='btn btn-block'/>
        </form>
    )
}

export default AddCake