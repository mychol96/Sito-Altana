


const scriptURL = 'https://script.google.com/macros/s/AKfycbzgiijnGb8ez_oyHdbcpHYe8vebINMv-LLz81O4CqjcfIpkCfPfreHYqCkSjs37SySxBg/exec'
const form = document.forms['contact-us']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      form.reset()
      alert('Thank you for contacting us! \nWe will contact you as soon as possible.')
    })
    .catch(error => console.error('Error!', error.message))
})



var elements = document.getElementsByClassName("riquadro-giallo");
for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("riquadro-giallo-show");
    elements[i].classList.remove("riquadro-giallo")
}







  

