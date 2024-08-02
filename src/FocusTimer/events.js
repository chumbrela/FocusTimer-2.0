import * as actions from './actions.js';
import * as el from './elements.js';
import state from './state.js';
import { updateDisplay } from './timer.js';
import * as sound from './sounds.js'

//timer//
export function registerControls(){
    el.controlls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function"){
            return;
        }

        actions[action]();
    })
}

export function plusTimer() {
   el.plus.addEventListener('click', ()=> {
       let minutes = parseInt(el.minutes.textContent,10) + 5;
       minutes = minutes > 60 ?  60 : minutes;

       state.minutes = minutes;
       state.seconds = 0;

       updateDisplay(minutes, 0)

    })

}

export function minusTimer() {
    el.minus.addEventListener('click', () => {
        let minutes = parseInt(el.minutes.textContent, 10) - 5;
        if (minutes < 0){
            minutes = 0;
        }

        state.minutes = minutes;
        state.seconds = 0;

        updateDisplay(minutes, 0)
    })
}

export function setTimer(){
    el.set.addEventListener('click', () => {
        state.minutes = 0;
        state.seconds = 0;
        updateDisplay()
    })
    
}

//Sounds//

export function playForestSong(){
    el.forestSound.addEventListener('click',()=>{
        state.isMute = !state.isMute;

        if(state.isMute){
           sound.treeSound.pause()
           el.forestSound.classList.remove('playing');
        } else {
            sound.treeSound.play()
            el.forestSound.classList.add('playing');
        }
    })
}

export function playRanningSong(){
    el.ranningSound.addEventListener('click',()=>{
        state.isMute = !state.isMute;

        if(state.isMute){
           sound.rainningSound.pause()
            el.ranningSound.classList.remove('playing')
        } else {
            sound.rainningSound.play()
            el.ranningSound.classList.add('playing');
        }
    })
}

export function playCoffeSong(){
    el.coffeSound.addEventListener('click',()=>{
        state.isMute = !state.isMute;

        if(state.isMute){
           sound.marketSound.pause()
            el.coffeSound.classList.remove('playing')
        } else {
            sound.marketSound.play()
            el.coffeSound.classList.add('playing');
        }
    })
}

export function playBonfireSong(){
    el.bonFireSound.addEventListener('click',()=>{
        state.isMute = !state.isMute;

        if(state.isMute){
           sound.bonfireSound.pause()
           el.bonFireSound.classList.remove('playing')
        } else {
            sound.bonfireSound.play()
          el.bonFireSound.classList.add('playing');  
        }
    })
}

