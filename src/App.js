import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import raw from "./text.txt";
import word from "./words.txt";

function App() {

  // const [searchvalue,setSearchvalue] = useState("")

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
setMessage2("");
      return(1)
      
    }
    else{
      setMessage2("Not a word");
      
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
const [message, setMessage] = useState("");
const [message2, setMessage2] = useState("");
var submitcheck=0;
var c="violet";
var u=[];

// const [temp,setTemp]= useState(0);
let reparr= ['','','','',''];
reparr.map((q,i)=>{
  reparr[i]=actual[i];
})
let temparr=['','','','',''];
let temparr2;
// let temparr= temparr2;
let color= ['','','','',''];
// const [cl,setCl]= useState([]);
const [log,setLog] =useState("");
const [color2,setColor2]= useState([]);
let gbox=[];
  const store = (a,val,b) => {
    
    
     if(val.length==1 && !(a+5*b==29))
     {

     document.getElementById(`${a+5*b+1}`).focus();
    
     if(val)
    temparr[a]=val.toUpperCase();
  }
    else if(val.length==1 && (a+5*b==29)){
      temparr[a]=val[0].toUpperCase();
    }
    console.log(temparr)
    
  }
  const back=(a,b)=>{
    // if(a+5*b==29)
    // document.getElementById(`${a+5*b}`).focus();
    document.getElementById(`${a+5*b-1}`).focus();
    
  }


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
  
  if(v=="ggggg" && !(sessionval.length==20))
  {

  setMessage("NOICE");

  }
  else if(sessionval.length==20 && !(v=="ggggg"))
  {
    setMessage("Last Try!!!");
  }
  else if(v=="ggggg" && sessionval.length==25)
  {
  //  window.alert("good")
  setMessage("Phew...");
  //  console.log("good")
  }
  else if(!(v=="ggggg") && sessionval.length==25){
    setMessage(`OOPS...The word was ${actual}`)
  }
  }

  
    const handleKeyDown = (event,a,b) => {
      if (event.key === 'Enter') {
        // console.log('do validate')
        check();
        
      }
      if(event.key==="Backspace")
      {
        
        back(a,b);
      }
    }
  
   


 
 
let arr1= ['','','','',''];
let arr2= ['','','','','',''];

  return (
    <div className="App">
     
      <p className="title">WORDLE</p>
      <p className="name">By Arpit Singhal</p>
     
    
      <br className="br"/>
     <div className="box">
    {
      <div>
        {
          arr2.map((o,ind)=>{
           
            return(
             <div>
               {
          arr1.map((x,index)=>{
          
            var f=sessionval[index+5*(ind)];
          
            return(
              <as>
                    <input type="text" caretHidden={true} className={f} name="" id={`${index+5*(ind)}`} maxLength="1" onKeyDown={(e)=>{handleKeyDown(e,index,ind)}}  onChange={(e) => store(index,e.target.value,ind)}  />
              </as>
              
            )
          })}
          
         </div>
          )
        }
        )
        
        }
       
         <button className="sumbit" type="submit" value="Submit"   onClick={check}>CHECK</button> 
        {
         
        }
         <div className="msg">{message}</div>
         <div className="msg">{message2}</div>
      </div>
    }        
            
          </div>
    </div>
  )
}

export default App;
