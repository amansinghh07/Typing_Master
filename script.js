// const paratxt={para:"The sun dipped below the horizon, casting a warm glow across the tranquil lake."};
// {
//     para:"A curious cat perched on the windowsill, watching the raindrops tap against the glass."
// },{para:"In a bustling city, the aroma of street food wafted through narrow alleyways."},
// {para:"Lost in thought, she absentmindedly doodled on the edge of her notebook."}];
const paratxt=`The sun dipped below the horizon, casting a warm glow across the tranquil lake.`;

let score=0;
let Seconds=30;
let timeInterval;

const buttonel=document.getElementById("btn");
const parael=document.getElementById("para");
const timerel=document.getElementById("timer");
const inputel=document.getElementById("text");
const speedel=document.getElementById("speed");
const accuracyel=document.getElementById("accuracy");
const resultel=document.getElementById("result");
const retryel=document.getElementById("retryBtn");

function startTest(){
    parael.textContent=paratxt;
    inputel.value="";
    inputel.disabled=false;
    inputel.focus();
    buttonel.disabled=true;
        timeInterval=setInterval(updateTimer,1000);
        setTimeout(endTest,30000);
        
}
function updateTimer() {
    Seconds--;
    timerel.textContent = `Time Left: ${Seconds}s`;

    if (Seconds <= 0) {
        endTest();
    }
}
// startTest();
buttonel.addEventListener('click',startTest);
function endTest(){
            clearInterval(timeInterval);
            inputel.disabled=true;
            let speed=0;
            let typeWords=[];
            let correctWords=[];
            const typeSentance=inputel.value.trim();
            const correctSentance=paratxt.trim();
            console.log(correctSentance);
            typeWords=typeSentance.split(" ");
            correctWords=correctSentance.split(" ");
            let correctCount=0;
            // let ind=0;//- the,0-sun,1
            for (let i = 0; i < correctWords.length; i++) {
                if (typeWords[i] === correctWords[i]) {
                    correctCount++;
                }
            }
            const accuracy=(correctCount/correctWords.length)*100;
            if (typeSentance != "") {
                speed = Math.floor((correctCount / (30 - Seconds)) * 60);
            }
   speedel.textContent=speed;
   accuracyel.textContent=accuracy.toFixed(2);     
   resultel.style.display="block";
   retryel.focus();
}
retryel.addEventListener("click", () => {
    resultel.style.display = "none";
    buttonel.disabled = false;
    inputel.value="";
    Seconds=30;
    timerel.textContent=`Time Left:${Seconds}`;
  });
// parael.style.color="white";
// timerel.textContent=`Time Left:${Seconds}`;