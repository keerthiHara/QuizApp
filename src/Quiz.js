import React, { useEffect, useState } from "react";                                       
import quizData from "./quizData.json";                                     /*the json file is imported to check for the answers*/
import { useNavigate } from "react-router-dom";                                        /*the router is used to navigate to the question page*/

function QuizApp() {
 
  const navigate = useNavigate();                                                    /* initialization to  navigate back to homepage */



  const [qusIdx, setQusIdx] = useState(0);                                                         /*the initial index state to hold the json data */

            
  const [score, setScore] = useState(0);                                                              /*the state is initialized  to check the score*/




  const [showScore, setShowScore] = useState(false);                                                 /* the state is set to  false initially to display Score*/

  const currQus = quizData[qusIdx];
  const [timer,setTimer] =useState(10);
  useEffect(()=>{
    const interval =setInterval(()=>{
      if(timer >0 )
      {
        setTimer(timer-1);
      }else{
        selectOption();
      }
    },1000);

    return()=>clearInterval(interval);


  },[timer]);

  const selectOption = (selectedIdx) =>
 {
  setTimer(10);
    const isCorrect = selectedIdx === currQus.answer;

     if (isCorrect) 
     {
      setScore(score + 1);
     }

     const nextQ = qusIdx + 1 < quizData.length;

     if (nextQ)
     {
      setQusIdx(qusIdx + 1);
     } 

      else 
      {
        setShowScore(true);
       }
  };

  const reset = () =>
  {
    setQusIdx(0);                                                                     /*to attend the quiz from the start index ,score is initialized to zero and score is set to false*/
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2 style={{ textAlign: "center" }}>Your Final Score: {score}</h2>
        <center>  <p>
            <button
              style={{                                                                    /*the ternary operator is used to show the score and check for whether to restart the quiz or to exit to the main page*/
                marginLeft: "550px",
                marginTop: "20px",
                backgroundColor: "black",
                color: "white",
                borderRadius:"10px",
                fontSize:"25px"
              }}
              onClick={reset}
            >
              Restart Quiz
            </button>
            <span>
              <button
                style={{
                  marginLeft: "5px",
                  marginTop: "20px",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius:"10px",
                  fontSize:"25px"
                }}
                onClick={() => navigate("/")}
              >
                Exit
              </button>
            </span>
          </p></center>
        </div>
      ) : (
     <center>  <div>
          <div className="container-fluid">
            <div class="row">
              <div class="col-md-3">

              </div>
              <div className="col-md-6">
              <div
                style={{
                  alignItems:"center",
                  display:"flex",
                  flexWrap:"wrap",
                  justifyContent:"flex-start",
                  //width: "600px",
                  //height: "700px",
                  backgroundColor: "darkblue",
                  borderRadius:"10px"
                }}
              >
                <div><h3 style={{color:"white"}}> <center>timing reaming:{timer}</center></h3></div>
                <div>
                <h2 style={{ padding: "50px 40px", color: "white" }}>
                  {currQus.question}                                                                     /*this shows the questions with the list of answers with proper styling inside the container*/
                </h2>
                </div>
                <div style={{width:"100%"}}>
                <ul style={{ padding: "0px 40px" }}>
                  {currQus.options.map((option, idx) => (
                    <li
                      style={{
                        borderRadius:"30px",
                        width:"100%",
                        listStyle: "none",
                        fontSize: "25px",
                        fontWeight: "bolder",
                        boxShadow: "2px 2px 4px",
                        textAlign: "center",
                        padding: "10px",
                        margin: "15px 0px",
                        backgroundColor: "palegreen",
                        color: "black",
                        fontFamily:"Segoe UI, Tahoma,' Geneva', Verdana, sans-serif"
                      }}
                      key={idx}
                      onClick={() => selectOption(idx)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
              </div>
              <div className="col-md-3">

              </div>
              
            </div>
          </div>
        </div></center> 
      )}
    </div>
  );
}

export default QuizApp;
