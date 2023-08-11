import { useState ,useEffect} from 'react';
import './pricing.css';
import { NavLink } from 'react-router-dom';
import {DateTime} from 'luxon';

const Pricing = ({handlePayment,setPack})=>{
    const [clicked,setClicked] = useState([true,false,false,false]);
    const [monthClicked, setMonthClicked] = useState(true);
    const [Minactive, setMInactive] = useState(false);
    
    const setPlan = (p,c,n)=>{
        let endDate;
        if(c=='Monthly'){

            endDate = DateTime.now().plus({months:1}).toLocaleString(DateTime.DATE_MED);
        }
        else{
            endDate = DateTime.now().plus({years:1}).toLocaleString(DateTime.DATE_MED)
        }
        setPack({
            name:n,
            cycle:c,
            price:p,
            status:true,
            stDate: DateTime.now().toLocaleString(DateTime.DATE_MED),
            endDate: endDate
        })
    }
    const handleClick = (num)=>{
        var updatedClick = clicked.map((data,idx)=>{
            if(idx==num) return true;
            else return false;
        })
        setClicked(updatedClick);
    }
    useEffect(()=>{
        setPlan(100,'Monthly','Mobile');
    },[])
    return(
        <>
        <div className="pricing-container">
            <h1>Choose the right plan for you</h1>
            <div className="table">
                <li className="table-header">
                    <div className="col col1">
                        <div className='time-zone'>
                            <button className={`${monthClicked && 'time-button'}`} onClick={()=>{setMonthClicked(!monthClicked);setMInactive(!Minactive);handleClick(0);setPlan(100,'Monthly','Mobile')}}>Monthly</button>
                            <button className={`${!monthClicked && 'time-button'}`} onClick={()=>{setMonthClicked(!monthClicked);setMInactive(!Minactive);handleClick(0);setPlan(1000,'Yearly','Mobile')}}>Yearly</button>
                        </div>
                    </div>
                    <div className={`col col2 header-div ${clicked[0]==true? 'head-clicked':''}`} onClick={()=>{handleClick(0);Minactive==false?setPlan(100,'Monthly','Mobile'):setPlan(1000,'Yearly','Mobile')}}>Mobile</div>
                    <div className={`col col3 header-div ${clicked[1]==true? 'head-clicked':''}`} onClick={()=>{handleClick(1);Minactive==false?setPlan(200,'Monthly','Basic'):setPlan(2000,'Yearly','Basic')}}>Basic</div>
                    <div className={`col col4 header-div ${clicked[2]==true? 'head-clicked':''}`} onClick={()=>{handleClick(2);Minactive==false?setPlan(500,'Monthly','Standard'):setPlan(5000,'Yearly','Standard')}}>Standard</div>
                    <div className={`col col5 header-div ${clicked[3]==true? 'head-clicked':''}`} onClick={()=>{handleClick(3);Minactive==false?setPlan(700,'Monthly','Premium'):setPlan(7000,'Yearly','Premium')}}>Premium</div>
                </li>
                <div className= {`monthly-pack ${Minactive && 'Inactive'}`}>
                    <li className='body-row'>
                        <div className="col col1">Monthly Price</div>
                        <div className={`col col3 ${clicked[0]==true? 'clicked':''}`}>100</div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>200</div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>500</div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>700</div>
                    </li>
                    <li className='body-row'>
                        <div className="col col1">Video quality</div>
                        <div className={`col col2 ${clicked[0]==true? 'clicked':''}`}>Good</div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>Good</div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>Better</div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>Best</div>
                    </li>
                    <li className='body-row'>
                        <div className="col col1">Resolution</div>
                        <div className={`col col2 ${clicked[0]==true? 'clicked':''}`}>480p</div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>480p</div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>1080p</div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>4k+HDR</div>
                    </li>
                    <li className='body-row last-row'>
                        <div className="col col1">Devices you can use to watch</div>
                        <div className={`col col2 ${clicked[0]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                        </div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                            <p>Computer</p>
                            <p>TV</p>
                        </div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                            <p>Computer</p>
                            <p>TV</p>
                        </div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                            <p>Computer</p>
                            <p>TV</p>
                        </div>
                    </li>

                </div>

                <div className={`yearly-pack ${!Minactive && 'Inactive'}`}>
                    <li className='body-row'>
                        <div className="col col1">Yearly Price</div>
                        <div className={`col col3 ${clicked[0]==true? 'clicked':''}`}>1000</div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>2000</div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>5000</div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>7000</div>
                    </li>
                    <li className='body-row'>
                        <div className="col col1">Video quality</div>
                        <div className={`col col2 ${clicked[0]==true? 'clicked':''}`}>Good</div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>Good</div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>Better</div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>Best</div>
                    </li>
                    <li className='body-row'>
                        <div className="col col1">Resolution</div>
                        <div className={`col col2 ${clicked[0]==true? 'clicked':''}`}>480p</div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>480p</div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>1080p</div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>4k+HDR</div>
                    </li>
                    <li className='body-row last-row'>
                        <div className="col col1">Devices you can use to watch</div>
                        <div className={`col col2 ${clicked[0]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                        </div>
                        <div className={`col col3 ${clicked[1]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                            <p>Computer</p>
                            <p>TV</p>
                        </div>
                        <div className={`col col4 ${clicked[2]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                            <p>Computer</p>
                            <p>TV</p>
                        </div>
                        <div className={`col col5 ${clicked[3]==true? 'clicked':''}`}>
                            <p>phone</p>
                            <p>Tablet</p>
                            <p>Computer</p>
                            <p>TV</p>
                        </div>
                    </li>

                </div>
               
            </div>
            <NavLink to = '/payments'><button className='next-button' onClick = {handlePayment}>Next</button></NavLink>
           
        </div>
        
        </>
    )
}

export default Pricing;