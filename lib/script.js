// Add your code here
var galeri = document.getElementById("gallery")
for (let i = 0; i < 15; i++) {

galeri.innerHTML += `<img src="https://source.unsplash.com/random/300x200?${(i+1)}">`

};