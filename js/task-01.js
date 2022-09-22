const tagJsContainer = document.querySelector('.js-tags')
tagJsContainer.addEventListener('click', onTagContainerClick)

function onTagContainerClick(e) {
   
    if (e.target.nodeName !== 'BUTTON') {
         return
    }

    const currentActiveBtn = document.querySelector(".tags__btn-active")


    // перевіряє чи є обєкт currentActiveBtn? якщо є виконається classList.remove("tags__btn-active")
    // якщо немаєб воно проігнорує
    // це працює тільки при доступі до властивості!!!


    currentActiveBtn?.classList.remove("tags__btn-active")

    // if (currentActiveBtn) {

    //     currentActiveBtn.classList.remove("tags__btn-active")
    // }


   const nextActiveButton = e.target;
   nextActiveButton.classList.add("tags__btn-active")
   console.log(nextActiveButton.dataset.value)
}

