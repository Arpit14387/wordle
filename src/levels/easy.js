import {useState, useEffect} from "react";
// import '../App.css';
// import "../index.css";
import "../style.css";
// import axios from "axios";
import raw from "../text.txt";
import word from "../words.txt";
import {Link} from "react-router-dom"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Chart from 'chart.js/auto';


export default function Easy()
{

  var globalIndex=0;
  var total;
  var wins;
  var loss;
  var streak;
 
// localStorage.clear("easymodestats")
  if(localStorage.getItem("easymodestats"))
  {
   
    let data=JSON.parse(localStorage.getItem("easymodestats"))
    loss=data.loss;
    wins=data.wins;
    total=data.total;
    streak=data.streak;
  }
  else
  {
    localStorage.setItem("easymodestats",
    JSON.stringify({
      "total": 0,
      "wins": 0,
      "loss": 0,
      "streak": 0
    }))
  }
  
    const search=(searchvalue)=>{
        fetch(raw)
        .then(r => r.text())
        .then(text => {
          // searchvalue="Draft";
          text=text.split(" ");
          
          
          if(text.includes(searchvalue))
          {
      // console.log("yes")
      temp()
    //   setMessage2("");
            return(1)
            
          }
          else{
            
            document.getElementById("notaword").innerHTML="Not in word list"
            setInterval(()=>{document.getElementById("notaword").innerHTML="\0"},2000)
          
            return(0)
          } 
          
        });
      }
      const [actual,setActual] =useState("")
      
      useEffect(()=>{
        const setword=()=>{
          fetch(word)
          .then(x => x.text())
          .then(text => {
            // searchvalue="Draft";
            text=text.split(/\r?\n/);
            // console.log(text);
            let randomnum=Math.random();
         randomnum=randomnum*400+1;
         randomnum=Math.floor(randomnum);
      
            let passvalue=""
            const g=['','','','','']
            g.map((u,index)=>{
              passvalue=passvalue.concat(text[randomnum][index].toUpperCase())
            })
            return passvalue;
            
                })
              .then(text2=>{
                setTimeout( function() { setfinal(text2); }, 1000);
                
              })
            }
                
                setword();
                
                
      },[])
      
      const setfinal=(value)=>{
        // console.log(value)
         setActual(value)
      
      }
      
      
      
      const [sessionval, setSessionval] = useState("");

      let reparr= ['','','','',''];
      reparr.map((q,i)=>{
        reparr[i]=actual[i];
      })
      let temparr=['','','','',''];
    
      let color= ['','','','',''];
      // const [cl,setCl]= useState([]);
      const [log,setLog] =useState("");
      const [color2,setColor2]= useState([]);
      let gbox=[];
       
      
      
        useEffect(() => {
         
          setSessionval(window.sessionStorage.getItem('store'))
          
        }, []);
      
        useEffect(() => {
          window.sessionStorage.setItem('store', setSessionval(sessionval));
        }, [sessionval]);
      
      const temp=()=>{
        // console.log("got it");
        check2()
      }

   
     
      
      const check=()=>{
        let t="";
          temparr.map((l,index)=>{
            t=t.concat(temparr[index]);
          })
          // setSearchvalue(t);
          search(t)
      }

   
      
        const check2= () =>{
        

        
       
          console.log(temparr)
      
          temparr.map((l,ind)=>{
             
            if(temparr[ind]==actual[ind]){
              color[ind]="g";
              // color=color.concat("g")
              gbox.push(temparr[ind]);
            }
          })
          temparr.map((m,index)=>{
           if((temparr[index]==actual[0] || temparr[index]==actual[1] || temparr[index]==actual[2] || temparr[index]==actual[3] || temparr[index]==actual[4]) && !(temparr[index]==actual[index]))
           {
           
            {
              var count = 0;
              reparr.map((c,i)=>{
                if(reparr[i]==temparr[index])
                {
           count++;
           reparr[reparr.findIndex((element) => element == temparr[index])]="";
                }        
             })
             
           
           }
           
            if(count>=1)
            {
              //check for g
              if(gbox.includes(temparr[index]))
              {
                count=count-1;
              }
              if(count>=1)
              {
                color[index]="y";
                // color=color.concat("y")
              }
              else{
                color[index]="b";
                // color=color.concat("b")
              }
               
              }
              else{
                color[index]="b";
                // color=color.concat("b")
              }
          }
      
           
      
           if(!(temparr[index]==actual[0] || temparr[index]==actual[1] || temparr[index]==actual[2] || temparr[index]==actual[3] || temparr[index]==actual[4]))
           {
             color[index]="b";
            // color=color.concat("b")
           }
          
          })
        // console.log(color);
        setColor2(color);
        // color=[];
        var color3=[];
       temparr.map((o,index)=>{
        if(color[index]=="g")
        document.getElementById(temparr[index].toLowerCase()).style.backgroundColor="green"
        if(color[index]=="y")
        if(!(document.getElementById(temparr[index].toLowerCase()).style.backgroundColor=="green"))
        document.getElementById(temparr[index].toLowerCase()).style.backgroundColor="#b57f3b"
        if(color[index]=="b")
        document.getElementById(temparr[index].toLowerCase()).style.backgroundColor="gray"
       })
         setLog(temparr)
         var v="";
         color.map((dd,index)=>{
          v= v.concat(color[index])
         })
         setSessionval(sessionval.concat(v));
          // console.log(sessionval)
        //  temparr=[];
         gbox=[];
        console.log(sessionval.slice(sessionval.length-5,sessionval.length))
        
        if(v=="ggggg" )
        {
         
        
          document.getElementById("modal-item").style.backgroundColor="#C1FBCB"
          document.getElementById("modal").style.display="initial";
          document.getElementById("right").style.display="initial"
          document.getElementById("success").style.display="initial"
        wins++;
        total++;
        streak++;
        localStorage.setItem("easymodestats",
    JSON.stringify({
      "total": total,
      "wins": wins,
      "loss": loss,
      "streak": streak
    }))
        }
        
        else if(!(v=="ggggg") && sessionval.length==25){
         
        
          document.getElementById("modal-item").style.backgroundColor="tomato"
          document.getElementById("modal").style.display="initial";
          document.getElementById("wrong").style.display="initial"
          document.getElementById("failure").style.display="initial"
          loss++;
          total++;
          streak=0;
          localStorage.setItem("easymodestats",
    JSON.stringify({
      "total": total,
      "wins": wins,
      "loss": loss,
      "streak": streak
    }))
        }
        }

        
      
  
      
        
         const pressbutton=(e)=>{
         
          if (e === "enter") {
           
            check();
            return;
          }
          

          if(e==="back" )
          {
            if(globalIndex==0)
            return;
            globalIndex--;
             document.getElementById(globalIndex+sessionval.length).innerHTML= null;
             return;
          }
           
          if(!((globalIndex)%5===0) || globalIndex===0)
          {
          document.getElementById(globalIndex+sessionval.length).innerHTML=e.toUpperCase();
          temparr[globalIndex%5]=e.toUpperCase();
          globalIndex++;
          }
         }
      
      function openstats()
      {
        document.getElementById("stats").style.display="initial"
        const ctx = document.getElementById("myChart").getContext("2d")
       const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Wins", "Losses"],
                datasets: [{
                    label: '# of match',
                    data: [wins,loss],
                    backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 205, 86)'
                       
                    ],
                   
                    hoverOffset: 4
                }]
            },
           
        });
      }
       
       
      let arr1= ['','','','',''];
      let arr2= ['','','','','',''];

      function openNav() {
        document.getElementById("mySidebar").style.width = "100%";
        document.getElementById("main").style.marginLeft = "150px";
        document.getElementById("storyset").style.display="initial"
      }

      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("storyset").style.display="none"

      }
      
        return (
          <div className="App" id="body">
  
            <div className="titlename">
            <button className="openbtn" onClick={openNav}>&#9776;</button>
            
            <button className=" fa-solid fa-chart-simple openchart" onClick={openstats} ></button>
            
                 Purrdle
            </div>
           
           <div id="notaword"></div>
           
            <div id="mySidebar" className="sidebar">
  <a  className="closebtn" onClick={closeNav}>&times;</a>
  <Link to="/easy">EASY Mode</Link>
  <Link to="/medium">MEDIUM Mode</Link>
  <Link to="/hard">HARD Mode</Link>
  
  

</div>

  
  
<div id="main">
  
 
</div>
            <div id="modal" style={{"display": "none"}} className="modal-box">
                 <div id="modal-item" className="modal-item">
                   <p onClick={()=>{document.getElementById("modal").style.display="none"; window.location.reload()}} className="closemodal">X</p>
                   <br/>
                   <img src="./right.svg" style={{"display": "none"}} id="right" alt="image"></img>
                   <p  style={{"display": "none"}} id="success">Nicely done!!!</p>
                  
                   <img src="./wrong.svg" style={{"display": "none"}} id="wrong" alt="image"></img>
                   <p style={{"display": "none"}}  id="failure">Oops... The word was {actual}</p>
                   <br/>
                   <a className="storyset" style={{"fontSize":"15px", "color":"blue"}} href="https://storyset.com/animal">Also check: Storyset</a>
                 </div>
   
            </div>

            <div id="stats" style={{"display": "none"}} className="stats-box">
              <div id="modal-item" style={{"marginTop":"100px", "border": "none"}} className="modal-item">
                   <p onClick={()=>{document.getElementById("stats").style.display="none"}} className="closemodal2">X</p>
                   <p>Easy Mode Stats:</p>
                   <canvas id="myChart" width="200" height="200"></canvas>
                   <br/>
                   <p className="stat">Total played - <mark style={{"backgroundColor":"black", "color": "white"}}>{total}</mark></p>
                   <p className="stat">Wins - <mark style={{"backgroundColor":"black", "color": "white"}}>{wins}</mark></p>
                   <p className="stat">Losses - <mark style={{"backgroundColor":"black", "color": "white"}}>{loss}</mark></p>
                   <p className="stat">Current Streak - <mark style={{"backgroundColor":"black", "color": "white"}}>{streak}</mark></p>
              </div>    
                 </div>
          
            <br className="br"/>
           <div className="">
          {
            <div>
              {
                arr2.map((o,ind)=>{
                 
                  return(
                   <div key={ind}>
                     {
                arr1.map((x,index)=>{
                
                  var f=sessionval[index+5*(ind)];
                
                  return(
                    <as className="box7" >
                   <span className={` ${f} box2 `} style={{"animationDelay":`${index/2}s`}} id={`${index+5*(ind)}`} ></span>
                        
                    </as>
                    
                  )
                  
                })}
                {
                    
                }
               </div>
                )
              }
              )
              
              }
             
             
            </div>
            
          } 
               <div className="keyboard">
               <div className="Keyboard-module_row__YWe5w"><button type="button" onClick={()=>pressbutton("q")} id="q" className="Key-module_key__Rv-Vp">q</button><button type="button" onClick={()=>pressbutton("w")} id="w" className="Key-module_key__Rv-Vp">w</button><button type="button" onClick={()=>pressbutton("e")} id="e" className="Key-module_key__Rv-Vp">e</button><button type="button" onClick={()=>pressbutton("r")} id="r" className="Key-module_key__Rv-Vp">r</button><button type="button" onClick={()=>pressbutton("t")} id="t" className="Key-module_key__Rv-Vp">t</button><button type="button" onClick={()=>pressbutton("y")} id="y" className="Key-module_key__Rv-Vp">y</button><button type="button" id="u" onClick={()=>pressbutton("u")} className="Key-module_key__Rv-Vp">u</button><button type="button" onClick={()=>pressbutton("i")} id="i" className="Key-module_key__Rv-Vp">i</button><button type="button" onClick={()=>pressbutton("o")} id="o" className="Key-module_key__Rv-Vp">o</button><button type="button" onClick={()=>pressbutton("p")} id="p" className="Key-module_key__Rv-Vp">p</button></div>
               <div className="Keyboard-module_row__YWe5w"><div data-testid="spacer" className="Key-module_half__ljsj8"></div><button type="button" id="a" onClick={()=>pressbutton("a")} className="Key-module_key__Rv-Vp">a</button><button type="button" onClick={()=>pressbutton("s")} id="s" className="Key-module_key__Rv-Vp">s</button><button type="button" onClick={()=>pressbutton("d")} id="d" className="Key-module_key__Rv-Vp">d</button><button type="button" onClick={()=>pressbutton("f")} id="f" className="Key-module_key__Rv-Vp">f</button><button type="button" onClick={()=>pressbutton("g")} id="g" className="Key-module_key__Rv-Vp">g</button><button type="button" onClick={()=>pressbutton("h")} id="h" className="Key-module_key__Rv-Vp">h</button><button type="button" onClick={()=>pressbutton("j")} id="j" className="Key-module_key__Rv-Vp">j</button><button type="button" id="k" onClick={()=>pressbutton("k")} className="Key-module_key__Rv-Vp">k</button><button type="button" id="l" onClick={()=>pressbutton("l")} className="Key-module_key__Rv-Vp">l</button><div data-testid="spacer" className="Key-module_half__ljsj8"></div></div>
               <div className="Keyboard-module_row__YWe5w"><button type="button" onClick={()=>pressbutton("enter")} id="↵" className="Key-module_key__Rv-Vp Key-module_oneAndAHalf__K6JBY">enter</button><button type="button" onClick={()=>pressbutton("z")} id="z" className="Key-module_key__Rv-Vp">z</button><button type="button" onClick={()=>pressbutton("x")} id="x" className="Key-module_key__Rv-Vp">x</button><button type="button" onClick={()=>pressbutton("c")} id="c" className="Key-module_key__Rv-Vp">c</button><button type="button" id="v" onClick={()=>pressbutton("v")} className="Key-module_key__Rv-Vp">v</button><button type="button" id="b" onClick={()=>pressbutton("b")} className="Key-module_key__Rv-Vp">b</button><button type="button" onClick={()=>pressbutton("n")} id="n" className="Key-module_key__Rv-Vp">n</button><button type="button" onClick={()=>pressbutton("m")} id="m" className="Key-module_key__Rv-Vp">m</button><button type="button" onClick={()=>pressbutton("back")} id="←" className="Key-module_key__Rv-Vp Key-module_oneAndAHalf__K6JBY"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="game-icon" data-testid="icon-backspace"><path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg></button></div>

               </div>
                  
                </div>
          </div>
          
        )
        
}