import { AnonChat } from "../../declarations/AnonChat";

let name = prompt("Enter your name to join the chat:");
// console.log(name);
let roomId="";

document.getElementById("create").addEventListener("click", (event) => {
  roomId="";
  roomId = Date.now() + "";
  alert(`Room has been created with Room id: ${roomId}`);
  document.getElementById("roomid").innerText=`Room Id: ${roomId}`;
  AnonChat.createNewRoom(roomId);
});

document.getElementById("join").addEventListener("click", (event) => {
  roomId="";
  roomId += prompt("Enter Room Id");
  document.getElementById("roomid").innerText=`Room Id: ${roomId}`;
  AnonChat.createNewRoom(roomId);
});

document.querySelector("form").addEventListener("submit",(ent)=>{
   ent.preventDefault();
   const message=document.getElementById("message").value;
   AnonChat.sendMessage(name,message,roomId);
   document.getElementById("message").value="";
})
window.addEventListener("load",()=>{
   fetch();
})
let size=0;
async function fetch()
{
  let messageArray = await AnonChat.getMessage(roomId);
  messageArray.reverse();
  size = Object.keys(messageArray).length;
  console.log(messageArray);
  messageArray.forEach((element)=>{

        let ele=document.createElement('div');
        if(element.sender===name)
          {
            ele.innerHTML=`<div class="chat-message-right pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40">
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div class="font-weight-bold mb-1"><b>You</b></div>
              ${element.message}
            </div>
          </div>`
          }
          else{
            ele.innerHTML=`<div class="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40">

            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div class="font-weight-bold mb-1"><b>${element.sender}</b></div>
              ${element.message}
            </div>
          </div>`
          }
        document.getElementById("chatbox").append(ele); 
      
  })
}
async function printMessages()
{
  console.log("doing");
  let messageArray = await AnonChat.getMessage(roomId);
  messageArray.reverse();
  let temp = size;
  console.log(messageArray);
  size = Object.keys(messageArray).length;
  messageArray.forEach((element)=>{
    if(temp==0)
      {
        let ele=document.createElement('div');
        if(element.sender===name)
          {
            ele.innerHTML=`<div class="chat-message-right pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40">
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div class="font-weight-bold mb-1"><b>You</b></div>
              ${element.message}
            </div>
          </div>`
          }
          else{
            ele.innerHTML=`<div class="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle mr-1" alt="Chris Wood" width="40" height="40">
            </div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div class="font-weight-bold mb-1"><b>${element.sender}</b></div>
              ${element.message}
            </div>
          </div>`
          }
        document.getElementById("chatbox").append(ele); 
      }
      else{
        temp--;
      }
  })
}
setInterval(printMessages,1000);