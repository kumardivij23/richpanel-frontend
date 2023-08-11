import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import './sign.css'
const Login = ({setCurrUser,setPack})=>{
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email:"",
        password:""
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!user.email || !user.password){
            alert('fill all fields');
        }
        axios.post('http://localhost:4000/signin',user)
        .then(res =>{
            // alert(res.data.message);
            console.log(res.data.user);
            // 
            if(res.data.user){
            setCurrUser(res.data.user);
            if(res.data.user.plan){
                setPack(res.data.user.plan);
                navigate('/currPlan');
            }
            else{
               
                navigate('/planDetails');
            }
            } 
            
        }).catch(err=>console.log(err));
        console.log('fdakjd');
        
    }
  
    const handleChange = (e)=>{
        setUser(data=>({...data, [e.target.name]:e.target.value}));
    }
    return(
        <>
        <div className="sign-container">
            <div className="sign-box">
                <h1>Login to your account</h1>
                <form action="">
                    
                    <label>Email</label>
                    <input type="email" value={user.email} onChange={handleChange} name="email" id="" />

                    <label>Password</label>
                    <input type="password" value={user.password} onChange={handleChange} name="password" id="" />

                    
                    <input className='checkMark' type="checkbox" name="" id="" />
                    <label> Remember Me</label>

                    <button onClick={handleSubmit}>Login</button>
                </form>

                <div className="change-tab">
                    <p>New to MyApp?</p>
                    <NavLink to="/" className="link" >Sign Up</NavLink>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Login;