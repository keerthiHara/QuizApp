
//import logo from './logo.svg'
import "./welcome.css"

import React from "react";
//import quizData from "./quizData.json";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Welcome() {

  const goto =()=>{
    //const history = useHistory();
    //history.push('/Quiz');
    window.location.href = '/Quiz';
  }
  return (                                                                      /*the nav bar is included in the starting page of the application*/
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <center><h1>QUIZ world</h1></center>
          </div>
        </div>
      </div>


     {/* <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header"style={{ height: "10px"}}>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>                                 
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <img
              src={logo} alt=""
              style={{ width: "120px", height: "140px", marginTop: "0px" }}
            />
             
          </div>
          
          <div class="container">
          <div className="collapse navbar-collapse" id="myNavbar" style={{background:"grey"}}>
          <center>     <h1>QUIZ WORLD</h1> </center>
            <ul className="nav navbar-nav navbar-right">
           
              <li style={{ margin: "10px 20px",background:"pink" }} >
                <Link to={"/Quiz"}
                   style={{fontSize:"20px"}}>Ready for the Quiz
                </Link>
                
              </li>
            </ul>
          </div>
          </div>
        </div>
      </nav> */}
      <div class="container">                                                                            
        <div class="row">                                                            
          <div class="col-sm-12">
       <center>     <h3>WELCOME</h3> </center>
            <center>
            <img
              src="https://img.freepik.com/free-vector/curiosity-brain-concept-illustration_114360-11037.jpg?w=740&t=st=1704295415~exp=1704296015~hmac=55862ddf56cb6130ef4aebde8a3dfa76c158a0b74874d1e6f322105f6e861a89"
              class="rounded mx-auto d-block"
              alt="..."
              style={{ height: "450px", width: "459px" }}
            />

            </center>
            {/* <button onclick="window.location.href='/Quiz'">Ready for the Quiz</button> */}

            <div className='but'>
            <button onClick={goto}> Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
