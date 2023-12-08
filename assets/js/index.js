


const scriptURL = 'https://script.google.com/macros/s/AKfycbzgiijnGb8ez_oyHdbcpHYe8vebINMv-LLz81O4CqjcfIpkCfPfreHYqCkSjs37SySxBg/exec'
const form = document.forms['contact-us']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      form.reset()
      alert('Success!')
    })
    .catch(error => console.error('Error!', error.message))
})





  

