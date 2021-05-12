/*user keys*/
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

let TWINKLE_KEYS= ['z', 'z', 'b', 'b', 'n', 'n', 'b','-', 'v', 'v','c', 'c', 'x', 'x', 'z'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
const twinkle = document.querySelector(".twinkle");

/*Play on click */
keys.forEach(key => {
    key.addEventListener("click", () => play(key))
})

/*Play via keyboard*/
document.addEventListener("keydown", (e)=>{
    //stop multiple keydown
    if (e.repeat) return;

    // console.log(e);  //Keyboard event object with (prop: key = z,x)*/ 
    let key = e.key;
    playViaKey(key);

})

/*twinkle key*/
twinkle.addEventListener("click",() =>{
    TWINKLE_KEYS.forEach((key,index) => {
        setTimeout(() => {
        playViaKey(key);
        },300*index);
    })
})

function playViaKey(key){
    let whiteKeyIndex = WHITE_KEYS.indexOf(key);
    let blackKeyIndex = BLACK_KEYS.indexOf(key);

    if(whiteKeyIndex > -1) play(whiteKeys[whiteKeyIndex]);
    if(blackKeyIndex > -1) play(blackKeys[blackKeyIndex]);
}
function play(key) {
    let noteAudio = document.getElementById(key.dataset.note);
    // console.log(key.dataset.note) -> C,D
    // console.log(noteAudio) -> audio note is selected
    noteAudio.currentTime = 0; //play it fast
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener("ended", () =>{
        key.classList.remove('active');
    })
}