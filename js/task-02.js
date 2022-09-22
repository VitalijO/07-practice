const tagJsContainer = document.querySelector('.js-tags')
tagJsContainer.addEventListener('click', onTagContainerClick)
const selectedTags = new Set()

function onTagContainerClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
         return
    }
  
  // зберіггання даних 
  const btn = e.target
  const tag = btn.dataset.value
  const isActiveBtn = btn.classList.contains('tags__btn-active')
 
  if (isActiveBtn) {
    selectedTags.delete(tag)
  } else {
    selectedTags.add(tag)
  }
  // малювання інтерфейсу
  btn.classList.toggle('tags__btn-active')
   
  console.log(selectedTags)
  
}

// проблема зберігання даних важча , за проблему інтерфейсу