const buttonColor = document.getElementById('Color')
const buttonNoColor = document.getElementById('noColor')
const textClass = document.getElementById('text')

buttonColor.addEventListener('click', function(){   
    textClass.classList.add('cor')
})

buttonNoColor.addEventListener('click', function(){   
    textClass.classList.remove('cor')
})
