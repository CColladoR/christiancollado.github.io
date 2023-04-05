const headline = document.querySelector('.composite')
headline.classList.add('animation-in-progress')
setTimeout(() => headline.classList.remove('animation-in-progress'), 1000)
