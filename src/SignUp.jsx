import './sign.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignUp = ()=>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        plan:{},
        stDate: "",
        endDate:""
    });

    const handleChange = (e)=>{
        let Name = e.target.name;
        let value = e.target.value;
        setUser((prev)=> ({...prev, [Name]:value}));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!user.name || !user.email || !user.password){
            console.log("fill all fields");
            return;
        }
        axios.post('http://localhost:4000/signup',user).then(res=>{
           
            setUser({
                name:"",
                email:"",
                password:""
            })
            console.log("data saved");

        }).catch(err => console.log(err));
        navigate('/Login');
        
    }
    return(
        <>
        <div className="sign-container">
            <div className="sign-box">
                <h1>Create Account</h1>
                <form action="">
                    <label>Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} id="" />
                    
                    <label>Email</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} id="" />

                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange} id="" />

                    
                    <input className='checkMark' type="checkbox" name="" id="" />
                    <label> Remember Me</label>

                    <button onClick={handleSubmit}>Sign Up</button>
                </form>

                <div className="change-tab">
                    <p>Already have an account?</p>
                    <NavLink to="/Login" className="link">Login</NavLink>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default SignUp;