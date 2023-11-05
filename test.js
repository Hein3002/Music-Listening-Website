const container =document.getElementById('container');
const canvas = document.getElementById('canvas1');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext('2d');
let audioSoure;
let analyser;
container.addEventListener('click',function(){
    const audio =document.querySelector('.audio1');  
    const audioCtx=new (window.AudioContext || window.webkitAudioContext)();  
    audio.play();
    audioSoure=audioCtx.createMediaElementSource(audio);
    analyser=audioCtx.createAnalyser();
    audioSoure.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize=64;
    const dorongsongnhac=analyser.frequencyBinCount;
    const mangdodai=new Uint8Array(dorongsongnhac);
    const dorong1songnhac=canvas.width/dorongsongnhac;

    let docao1songnhac;
    let x;
    function animate()
    {   
        x=0;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        analyser.getByteFrequencyData(mangdodai);
        for(let i=0;i<mangdodai.length;i++){
            docao1songnhac=mangdodai[i];
            ctx.fillStyle='red';           
            ctx.fillRect(x,canvas.height-docao1songnhac,dorong1songnhac,docao1songnhac);
            x+=(dorong1songnhac+(dorong1songnhac/8));
        }
        requestAnimationFrame(animate)
    }
    animate();
})
