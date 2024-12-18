const labels =document.querySelectorAll('.logPass label')
labels.forEach(label => {
    label.innerHTML = label.innerInput
    .split('')
    .join('')
})  