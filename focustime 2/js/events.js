import {
    buttonPlay,
    buttonPlayActive,
    buttonStop,
    buttonStopActive,
    buttonPlus,
    buttonPlusActive,
    buttonLess,
    buttonLessActive,
} from "./elements.js"

export default function({controls}) {

    buttonPlay.addEventListener('click', function() {
        controls.play()
    })

    buttonStop.addEventListener('click', function() {
        controls.stop()
    })
}