import {useState} from 'react';
import {database} from '../firebase';
import { v4 as uuidv4 } from 'uuid';
  
function ReportForm() {
  const [needed, setNeeded] = useState();
  const [latitude , setLatitude] = useState();
  const [longitude , setLongitude] = useState();
      
  // Push Function
  const Push = () => {
    database.ref(uuidv4()).set({
      needed : needed,
      latitude : latitude,
      longitude : longitude
    }).catch(alert);
  }
  
  return (
    <div className="App" style={{position: "absolute", marginTop : 250}}>
      <center>
      <select value={needed} onChange={(e) => setNeeded(e.target.value)}>
            <option value="food">Food</option>
            <option value="hygiene">Hygiene Products</option>
            <option value="medicalSupply">Medical Supply</option>
            <option value="clothes">Clothes</option>
      </select>
      <br/><br/>
      <input placeholder="latitude" value={latitude} 
      onChange={(e) => setLatitude(e.target.value)}/>
      <br/><br/>
      <input placeholder="longitude" value={longitude} 
      onChange={(e) => setLongitude(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </center>
    </div>
  );
}
  
export default ReportForm;