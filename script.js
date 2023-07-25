console.log("welcome to Spotify");

let songindex=0;
var au=new Audio("songs/1.mp3");
let x=5;
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songitem"));
let masterplaysongname=document.getElementById("masterplaysongname");

let songs=[
    {songname:"Sweet but Pyscho", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songname:"Drag Me Down", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songname:"Who Do You Love", filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songname:"Hurts So Good", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songname:"Call You Mine", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songname:"I Wanna Be Yours", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"}
]

songItems.forEach((Element,i)=>{
    console.log(Element,i)
    Element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    Element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    // au=new Audio(`${i}.mp3`);
    //console.log(parseFloat(au.duration/60).toFixed(2));
    // x=parseFloat(au.duration/60).toFixed(2);
    // console.log(typeof(x));
    // `dura${i}`.innerText=x.toString;
    // document.querySelector("#dura"+string(i)).innerText=x;
    // console.log(i);
    
})



const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        if (!au.paused){
            makeAllPlays();
            masterplaysongname.innerHTML="";
            au.currentTime=0;
            au.pause();
            gif.style.opacity=0;
            masterplay.classList.remove("fa-pause");
            masterplay.classList.add("fa-play");
        }

        else{
            makeAllPlays();
            console.log(parseFloat(au.duration/60).toFixed(2));
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            au.src = `songs/${songindex+1}.mp3`;
            masterplaysongname.innerText = songs[songindex].songname;
            au.currentTime = 0;
            au.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        }
        
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if (songindex>=5){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    au.src = `songs/${songindex+1}.mp3`;
    masterplaysongname.innerText = songs[songindex].songname;
    au.currentTime = 0;
    au.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById("previous").addEventListener('click',()=>{
    if (songindex<=0){
        songindex=5;
    }
    else{
        songindex-=1;
    }
    au.src = `songs/${songindex+1}.mp3`;
    masterplaysongname.innerText = songs[songindex].songname;
    au.currentTime = 0;
    au.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})



// handle play/pause click
masterplay.addEventListener('click',()=>{
    if(au.paused || au.currentTime<=0){
        au.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        au.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

// listen_to_events
au.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    progress=parseInt((au.currentTime/au.duration)*100);
    myProgressBar.value=progress;
    // update progressbar

})

myProgressBar.addEventListener('change',()=>{
    au.currentTime=(myProgressBar.value*au.duration)/100;
})


































