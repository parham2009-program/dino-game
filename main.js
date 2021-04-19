var character = document.getElementById('dino');
var block = document.getElementById('cactus');
function jumping(){
    if(character.classList != 'animation'){
    dino.classList.add('animation');
}
    setTimeout(function() {
        dino.classList.remove('animation');
    }, 500);
}
var checkDead = setInterval(function(){
    var dinoTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var cactusLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (cactusLeft<40 && dinoTop>=130 && cactusLeft>0) {
        var  box = document.getElementById('game')
        box.style.border="2px solid red"
        block.style.animation="none"
        block.style.display="none";
        alert('you looooose!')
    }
},10)
console.log(box.innerWidth)