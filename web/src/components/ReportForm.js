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
    <div className="Form">
      <div>
      <select id="mobileSelect"value={needed} onChange={(e) => setNeeded(e.target.value)}>
            <option value="blockedRoad">Blocked Road</option>
            <option value="medicalEmergency">Medical Emergency</option>
            <option value="footDefect">Foot defect</option>
            <option value="waterDefect">Water defect</option>
      </select>
      <br/><br/>
      <input placeholder="latitude" value={latitude} 
      onChange={(e) => setLatitude(e.target.value)}/>
      <br/><br/>
      <input placeholder="longitude" value={longitude} 
      onChange={(e) => setLongitude(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </div>
    </div>
  );
}
  
export default ReportForm;