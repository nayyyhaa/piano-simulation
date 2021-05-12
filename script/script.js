/*user keys*/
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener("click", () => {
        let noteAudio = document.getElementById(key.dataset.note);
        // console.log(key.dataset.note) -> C,D
        // console.log(noteAudio) -> audio note is selected
        noteAudio.currentTime = 0; //play it fast
        noteAudio.play();
        key.classList.add('active');
        noteAudio.addEventListener("ended", () =>{
            key.classList.remove('active');
        })
    })
})