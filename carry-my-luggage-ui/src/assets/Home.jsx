import React from 'react';
import { Button } from "../components/ui/button";
import {Link} from 'react-router-dom';


function Home(){

    return(
        <div style={{fontFamily:'Kanit', position:"fixed", top:"20%", left:'41%'}}>
            <div style={{fontSize:"250%"}}>
                Welcome To
            </div>
            <div style={{fontSize:"250%"}}>
                CarryMyLuggage    
            </div>
            <div className="grid grid-cols-1" style={{paddingTop:'15%'}}>
                <div style={{paddingTop:'5%'}}>
                <Button style={{fontSize:'150%'}} variant="secondary"  className="bg-indigo-500">
                    <Link style={{color:"white"}} to="/Login">Login</Link>
                </Button>
                </div>
                <div style={{paddingTop:'5%'}}>
                <Button style={{fontSize:'150%'}} variant="secondary"  className="bg-indigo-500">
                    <Link style={{color:"white"}} to="/Signup">Sign Up</Link>
                </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;