
let hour=document.querySelector(".hour select");
let minute=document.querySelector(".minute select");
let second=document.querySelector(".second select");
let selectMenu=document.querySelectorAll("select");
let setAlarmBtn=document.querySelector('.set-alarm-btn button');
let stopAlarmBtn=document.querySelector(".stop-alarm-btn")
let content=document.querySelector('.set-time');
let alarmTime=[];
let ringtone=new Audio("fx-lumu-cellphone-ringtone-huawei-y6-fx-old-phone-68532.mp3");
let isAlarm=false;
let currtime;

for(let i=0;i<=12;i++){

    let option =document.createElement("option");
    option.innerHTML=i<10 ? "0"+i : i;
    hour.appendChild(option);
}
for(let i=0;i<=59;i++){

    let option =document.createElement("option");
    option.innerHTML=i<10 ? "0"+i : i;
    minute.appendChild(option);
  
   
}

function setAlarm(){

  let setTime=`${(selectMenu[0].value)}:${(selectMenu[1].value)} ${selectMenu[2].value}`;
  if(setTime.includes('hour') || setTime.includes('minute')|| setTime.includes('AM/PM')){

    return alert("fill the proper time");
  }
  isAlarm=true;
  alarmTime.push(setTime);
  const btn=document.createElement("button");
  btn.textContent="delete";
  const node=document.createElement("li");
  const textnode=document.createTextNode(setTime);
  node.appendChild(textnode);
  node.appendChild(btn);
  document.getElementById("my-list").appendChild(node);
  
  btn.addEventListener("click",()=>{
    node.remove();
    let a=(textnode.textContent);
    for(let x in alarmTime){
      if(alarmTime[x]===a){
        alarmTime.splice(x,1);
       
      }
    }
    
  })
  
 
}
  

 

 
  

setAlarmBtn.addEventListener('click',setAlarm);

function stopAlarm(){
  ringtone.pause();
  
 let a=currtime;
let myList=document.getElementById("my-list");
console.log(myList);
let Item=currtime;
deleteListItemByText('my-list',Item);

 
  
  for(let x in alarmTime){
    if(alarmTime[x]===a){
      alarmTime.splice(x,1);
     
    }
    console.log(alarmTime)
  }
  ringtone.currentTime=0;
  stopAlarmBtn.style.display="none";
}


function deleteListItemByText(ulId, text) {
  const ul = document.getElementById(ulId);
  const items = ul.getElementsByTagName('li');
  
  for (let i = 0; i < items.length; i++) {
    if (items[i].innerText.substring(0,8) === text.trim()) {
      console.log(text);
      console.log(items[i].innerText);
      ul.removeChild(items[i]);
      break;
  }
}
}

function trim(str) {
      return str.replace(/^\s+|\s+$/g, '');
  }


  stopAlarmBtn.addEventListener('click',stopAlarm); 

     
      
          

  function currTime(){
  
  let date=new Date();
  let hour=date.getHours();
  let minute=date.getMinutes();
  let second=date.getSeconds();

  hour= hour < 10 ? "0"+hour:hour;
  minute= minute < 10 ? "0"+minute:minute;
  second =second < 10 ? "0"+second:second;
  let period=hour>=12 ? "PM " :"AM";  
  // hour = hour > 12 ? hour - 12 : hour;
  let time=`${hour>12 ? "0"+(hour-12):hour}:${minute}:${second}  ${period} `;
  
  document.querySelector('.real-time h1').innerHTML=time;

 
 
 
 
  

  if(alarmTime){
    for(let x in alarmTime){
      if(time.substring(0,5)===alarmTime[x].substring(0,5)&&time.substring(10,12)===alarmTime[x].substring(6,8)){
        //  console.log(`${time.substring(0,5)} ${time.substring(10,12)}`);
         currtime=`${time.substring(0,5)} ${time.substring(10,12)}`;
         ringtone.play();
         
         ringtone.loop=true;

         stopAlarmBtn.style.display="block";
        
        
      }
    }
  }
 
}

setInterval(currTime,1000);
 
 
 
 

  
  


