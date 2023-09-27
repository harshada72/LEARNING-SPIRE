//change navbar styles on scroll

window.addEventListener('scroll',() => {
    document.querySelector('now').classList.toggle
    ('window-scroll',window.scrollY > 0)
})

//show hide faq answer

const faqs = document.querySelector('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() => {
      faq.classList.toggle('open');  

      // change icon
      const icon = faq.querySelector('.faq__icon i');
      if(icon.className === 'uil uil-plus') {
        icon.className = "uil uil-minus"
      } else {
        icon.className = "uil uil-plus";
      }
    })
})