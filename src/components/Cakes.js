import Cake from './Cake'
const Cakes = ({ cakes, onDelete, onToggle }) => {
    
    return (
        <>
            {cakes.map((cake)=>(
                <Cake key={cake.id} 
                      cake={cake} 
                      onDelete={onDelete}
                      onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Cakes