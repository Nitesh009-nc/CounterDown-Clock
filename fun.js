const day=document.querySelector('.day')
const hours=document.querySelector('.hours')
const minutes=document.querySelector('.minutes')
const seconds=document.querySelector('.seconds')

const currentYear=new Date().getFullYear();
// console.log(currentYear)
const newYearTime=new Date(`January 01 ${currentYear+1} 00:00:00`);
// console.log(newYearTime)


function updateCounterDown(){
    const currentTime=new Date();
    const diff=newYearTime-currentTime;
    // console.log(diff/1000)

    const d=Math.floor(diff/1000/60/60/24)
    const h=Math.floor(diff/1000/60/60) %24
    const m=Math.floor(diff/1000/60) %60
    const s=Math.floor(diff/1000) %60
    

    day.innerHTML=d;
    hours.innerHTML=h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?'0'+s:s;
}
// updateCounterDown()
setInterval(updateCounterDown,1000)