import { useState } from 'react';
import data from './data'
import Cards from './Components/Cards'
function App() {
//  console.log(data);
const [tours,setTours]=useState(data);
function remove(id){
  let  tourss=tours;
  tourss=tourss.filter((tour)=>{
    return tour.id!=id;
  });
  setTours(tourss);
}
if(tours.length==0){
  return (
    <div className='refresh'>
      <div className='heading'>Plan With Me</div>
      <button onClick={()=>setTours(data)} className='btn1'>Refresh</button>
    </div>
  )
}
 return (
  <div className='main'>
    <h3 className='heading'>Plan With Me</h3>
    <Cards data={tours} remove={remove}></Cards>
  </div>
 )
   
}

export default App;
