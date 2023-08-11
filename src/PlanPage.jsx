import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './planpage.css'
const PlanPage = ({pack,handlePayment,setPack})=>{
    const navigate = useNavigate();
    const [activeStatus,setActiveStatus] = useState(pack.status);
    const handleChange = ()=>{
        console.log('dfjaskf');
        navigate('/planDetails');
    }
    const handleCancel = ()=>{
        setPack((data)=>({...data,['status']:false}));
        setActiveStatus(false);
        handlePayment();
        
    }
    return(
        <>
        <div className="container">
            <div className="planBox">
                <div className="box-head">
                    <h2>Current Plan Details</h2>
                    <p className={`${activeStatus==true?'active':'inactive'}`}>{activeStatus==true?'Active':'Cancelled'}</p>
                    <button onClick = {handleCancel} className={`${activeStatus==true?'':'inactive-btn'}`}>Cancel</button>
                </div>
                <h3 className='plan'>{pack.name}</h3>
                <p className='price'><span>{pack.price}</span>/{pack.cycle=='Monthly'?'mo':'yr'}</p>
                <button className='change-plan-btn' onClick={handleChange}>Change Plan</button>
                <p className='time-span'>{activeStatus==true?`Your Subscription has started on ${pack.stDate} and will auto renew on ${pack.endDate}`:`your subscription plan was cancelled and you will lose access to services on ${pack.endDate}`}</p>


            </div>
        </div>
        
        </>
    )
}
export default PlanPage;