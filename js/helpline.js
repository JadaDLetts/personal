const alphabet = ['A',' ', 'E', ' ', 'M', ' ', 'P', ' ', 'S']
const alphabetView = document.getElementById('alphabet')

alphabet.forEach(letter => {
    let x = document.createElement('h5').innerHTML = "<span>" + letter + "</span>"
    alphabetView.innerHTML += x
})