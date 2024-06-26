document.addEventListener('DOMContentLoaded',() => {
  const bookPagesWrapper = document.querySelector('div.image-stack')
  if (!bookPagesWrapper) return

  const bookPages = bookPagesWrapper.querySelectorAll('img')
  let currentPage = 1

  bookPages.forEach((img) => {
    const xOffset = Math.floor(Math.random() * 50) - 25;
    const yOffset = Math.floor(Math.random() * 50) - 25;

    img.style.top = `calc(50% + ${yOffset}px)`
    img.style.left = `calc(50% + ${xOffset}px)`
    img.style.transform = "translate(-50%, -50%)"

    if (Math.random() > 0.5) {
      const rotation = Math.floor(Math.random() * 20) - 10;

      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`
    }
  })

  bookPagesWrapper.addEventListener('click', () => {
    if (currentPage >= bookPages.length) return

    bookPages[currentPage].style.zIndex = `${currentPage}`
    currentPage++
  })
})