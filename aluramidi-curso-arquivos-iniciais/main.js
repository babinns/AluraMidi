function playSound (idElementAudio){

    const element = document.querySelector(idElementAudio).play();

    if(element === null){
        alert('Element not found or invalid selector')
    }
    if(element != null && element.localName === 'audio'){
        element.play();
    }

}

const keyList = document.querySelectorAll('.tecla');

for(let counter= 0; counter < keyList.length; counter ++) {

    const tecla = keyList[counter];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    

    keyList[counter].onclick = function (){
        playSound(idAudio)
    };

    tecla.onkeydown = function (event) {
        
        if(event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }      
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}







