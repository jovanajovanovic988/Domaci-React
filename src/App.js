//import logo from './logo.svg';//spinning react logo
//import './App.css';
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Cakes from './components/Cakes'
import { useState } from 'react'
import AddCake from './components/AddCake'
import Footer from './components/Footer'
import Info from './components/Info'

function App() {
  const [showAddCake, setShowAddCake]=useState(false)//da se ne prikazuje forma
  //nego kad se klikne na Add dugme
  //const name='Jovana'
  //const x=false
  const [cakes, setCakes]=useState(
    [
        {
            id:1,
            text:'Čokoladna torta',
            quality:6,
            day: 'Apr 14th at 2:30pm',
            reminder: true,
        },
        {
            id:2,
            text:'Snikers',
            quality:4,
            day: 'Mar 23th at 3:30pm',
            reminder: true,
        },
        {
            id:3,
            text:'Cheescake sa malinom',
            quality:5,
            day: 'Apr 28th at 4:30pm',
            reminder: false,
        }
    ])
//Add cake
const addCake=(cake)=>{
  //console.log(cake);
  const id=Math.floor(Math.random()*10000)+1//random number
  //floor radi zaokruzivanje
  const newCake={id,...cake}
  setCakes([...cakes,newCake])
}
//Delete cake
const deleteCake=(id)=>{
  //console.log('delete',id);
  setCakes(cakes.filter((task)=>task.id!==id))
  //prikazujemo sve osim tog koji zelimo da obrisemo
}
//Toggle Reminder
const toggleReminder=(id)=>{
  // console.log(id);
  setCakes(cakes.map(
    (cake)=>cake.id===id ? 
      {...cake, reminder:!cake.reminder}
      :cake
    ))
}
  return (
    <Router>
    <div className="container">
      <Header onAdd={()=> setShowAddCake(!showAddCake)} 
      showAdd={showAddCake} />
      
      <Route 
          path='/' 
          exact 
          render={(props)=>(
            <>
            {showAddCake && <AddCake onAdd=
            {addCake}/>}
            {cakes.length > 0 ? (
            <Cakes  
                  cakes={cakes} 
                  onDelete={deleteCake} 
                  onToggle={toggleReminder}
            />):
            (<h3>Nema torte za prikazivanje</h3>)
            }
          </>
        )}/>
      <Route path='/info' component={Info}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;