import './App.css';
import './SignUp';
import Login from './Login';
import SignUp from './SignUp';
import Pricing from './Pricing';
import CardInfo from './CardInfo';
import PlanPage from './PlanPage';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [pack, setPack] = useState({
    name:"",
    cycle:"",
    price: 0,
    status:true,
    stDate:"",
    endDate:""

});
const [currUser,setCurrUser] = useState({});

const handlePayment = ()=>{
  let data = {object:[currUser.email,pack]};
  console.log("buttn clicked");
  axios.post('http://localhost:4000/addplan',{data}).then(res=>{
     
      console.log("plan updated");

  }).catch(err => console.log(err));
  navigate('/currPlan');

}
  return (
    <div className="App">
      <Routes>
        <Route index element = {<SignUp />} />
        <Route exact path='/Login' element = {<Login setPack = {setPack} setCurrUser = {setCurrUser}/>} />
        <Route exact path = '/payments' element = {<CardInfo pack={pack} handlePayment={handlePayment} />} />
        <Route exact path = '/planDetails' element = {<Pricing  setPack = {setPack}/>} />
        <Route exact path = '/currPlan' element = {<PlanPage pack={pack} handlePayment={handlePayment} setPack={setPack}/>} />
      </Routes>
     
    </div>
  );
}

export default App;
