import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"

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

const controls = Controls({
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
    buttonFireActive
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetAllControls: controls.reset,
})

const sound = Sound()


buttonPlay.addEventListener('click', function() {
  
    controls.play()
    timer.countdown()

})

buttonStop.addEventListener('mousedown', function() {
    controls.stop()
})

buttonStopActive.addEventListener('mouseup', function() {
    controls.stopActive()
    controls.reset()
    timer.reset()
})

buttonPlus.addEventListener('mousedown', function() {
    controls.plus()  
})

buttonPlusActive.addEventListener('mouseup', function() {
    controls.plusActive()
    timer.addFiveMinutes()
})

buttonLess.addEventListener('mousedown', function() {
    controls.less()    
})

buttonLessActive.addEventListener('mouseup', function() {
    controls.lessActive()
    timer.subFiveMinutes()
})

// MUSICS

buttonTree.addEventListener('click', function() {
    controls.tree()
    sound.pressToStop()
    sound.changeAudio("audioTree")   
})

buttonTreeActive.addEventListener('click', function() {
    sound.removeAudio()
    controls.resetSound()
})


buttonCloud.addEventListener('click', function() {
    controls.cloud()
    sound.pressToStop()
    sound.changeAudio("audioCloud")
})

buttonCloudActive.addEventListener('click', function() {
    sound.removeAudio()
    controls.resetSound()
})

buttonHouse.addEventListener('click', function() {
    controls.house()
    sound.pressToStop()
    sound.changeAudio("audioHouse")
})

buttonHouseActive.addEventListener('click', function() {
    sound.removeAudio()
    controls.resetSound()
})

buttonFire.addEventListener('click', function() {
    controls.fire()
    sound.pressToStop()
    sound.changeAudio("audioFire")
})

buttonFireActive.addEventListener('click', function() {
    sound.removeAudio()
    controls.resetSound()
})









