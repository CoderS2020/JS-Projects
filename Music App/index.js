window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll('.sound');
    const pads=document.querySelectorAll('.pads div');
    const visual=document.querySelector('.visual');
    const colors=[
       " rgb(202, 107, 107)",
        "rgb(112, 3, 3)",
        "rgb(141, 240, 128)",
        "rgb(80, 15, 77)",
        "rgb(168, 189, 54)",
        "rgb(29, 148, 184)"

    ]

    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            CreateBubble(index);
        })
    })

    const CreateBubble=(index)=>{
        const bubble=document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }
})