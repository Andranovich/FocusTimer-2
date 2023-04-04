import { elements } from "./elements.js"

const {
    buttonPlay,
    buttonPlayActive,
    buttonStop,
    buttonStopActive,
    buttonPlus,
    buttonPlusActive,
    buttonLess,
    buttonLessActive,
    buttonTree,
    buttonTreeActive,
    buttonCloud,
    buttonCloudActive,
    buttonHouse,
    buttonHouseActive,
    buttonFire,
    buttonFireActive,
    minutesDisplay,
    secondsDisplay
} = elements

const sounds = {
    audioTree: "./sounds/Floresta.wav",
    audioCloud: "./sounds/Chuva.wav",
    audioHouse: "./sounds/Cafeteria.wav",
    audioFire: "./sounds/Lareira.wav"
}

export default function() {
    let currentAudio = new Audio()
    currentAudio.loop = true
    
    function changeAudio(audioName) {
        pressToStop()
        currentAudio.src = sounds[audioName]
        pressToPlay()
    }
    
    function removeAudio() {
        pressToStop()
        currentAudio.src = ""
    }

    function pressToPlay() {
        currentAudio.play()
    }

    function pressToStop() {
        currentAudio.pause()
        
    }   

    return {
       pressToPlay,
       pressToStop,
       currentAudio,
       changeAudio,
       removeAudio
    }

}
