const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor());
let stp;
const changeStart=function(){
    const chang=function(){
      document.body.style.backgroundColor=randomColor();
    }
       stp=setInterval(chang,1000)
};
const changeStop=function(){
    clearInterval(stp);
}
document.querySelector('#start').addEventListener('click',changeStart)
document.querySelector('#stop').addEventListener('click',changeStop)