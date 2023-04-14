const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  function updateCounter() {
    const target = +counter.getAttribute('data-target')
    const increment = target / 100

    const c = +counter.innerText

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.innterText = target
    }
  }

  updateCounter()
})
