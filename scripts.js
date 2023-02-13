const mario = document.getElementById('mario')
const mash = document.getElementById('mash')

document.addEventListener('keydown', function(event) {
  jump()
})

function jump() {
  if (mario.classList != 'jump') {
    mario.classList.add('jump')
  }
  setTimeout( function() {
     mario.classList.remove('jump')
  }, 300)
}

let isAlive = setInterval (function() {
  let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'))
  let mashleft = parseInt(window.getComputedStyle(mash).getPropertyValue('left'))
  
  if (mashleft < 50 && mashleft > 0 && marioTop >= 50) {
    alert('Game ower!')
  }
}, 20)     