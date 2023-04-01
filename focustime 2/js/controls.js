
export default function Controls({
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
}) {

    function play(){
        buttonPlay.classList.add('hide')
        buttonPlayActive.classList.remove('hide')
        buttonStop.classList.remove('hide')
        buttonStopActive.classList.add('hide')
    }

    function stop() {
        buttonStop.classList.add('hide')
        buttonStopActive.classList.remove('hide')
    }

    function stopActive() {
        buttonStop.classList.remove('hide')
        buttonStopActive.classList.add('hide')
    }

    function plus() {
        buttonPlus.classList.add('hide')
        buttonPlusActive.classList.remove('hide')  
    }

    function plusActive() {
        buttonPlus.classList.remove('hide')
        buttonPlusActive.classList.add('hide')
    }
    
    function less() {
        buttonLess.classList.add('hide')
        buttonLessActive.classList.remove('hide')
    }

    function lessActive() {
        buttonLess.classList.remove('hide')
        buttonLessActive.classList.add('hide')
    }

    function tree() {
        buttonTree.classList.add('hide')
        buttonTreeActive.classList.remove('hide')
        buttonCloud.classList.remove('hide')
        buttonCloudActive.classList.add('hide')
        buttonHouse.classList.remove('hide')
        buttonHouseActive.classList.add('hide')
        buttonFire.classList.remove('hide')
        buttonFireActive.classList.add('hide')
    }

    function cloud() {
        buttonCloud.classList.add('hide')
        buttonCloudActive.classList.remove('hide')
        buttonTree.classList.remove('hide')
        buttonTreeActive.classList.add('hide')
        buttonHouse.classList.remove('hide')
        buttonHouseActive.classList.add('hide')
        buttonFire.classList.remove('hide')
        buttonFireActive.classList.add('hide')
    }

    function house() {
        buttonHouse.classList.add('hide')
        buttonHouseActive.classList.remove('hide')
        buttonTree.classList.remove('hide')
        buttonTreeActive.classList.add('hide')
        buttonCloud.classList.remove('hide')
        buttonCloudActive.classList.add('hide')
        buttonFire.classList.remove('hide')
        buttonFireActive.classList.add('hide')
    }

    function fire() {
        buttonFire.classList.add('hide')
        buttonFireActive.classList.remove('hide')
        buttonTree.classList.remove('hide')
        buttonTreeActive.classList.add('hide')
        buttonCloud.classList.remove('hide')
        buttonCloudActive.classList.add('hide')
        buttonHouse.classList.remove('hide')
        buttonHouseActive.classList.add('hide')
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPlayActive.classList.add('hide')    
        
    }

    function resetSound() {
        buttonTree.classList.remove('hide')
        buttonCloud.classList.remove('hide')
        buttonHouse.classList.remove('hide')
        buttonFire.classList.remove('hide')
        buttonTreeActive.classList.add('hide')        
        buttonCloudActive.classList.add('hide')
        buttonHouseActive.classList.add('hide')
        buttonFireActive.classList.add('hide')
    }

    return {
        play,
        stop,
        stopActive,
        plus,
        plusActive,
        less,
        lessActive,
        tree,
        cloud,
        house,
        fire,
        reset,
        resetSound
    }

}





