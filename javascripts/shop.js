document.addEventListener("DOMContentLoaded", () => {
    const shopPopup = document.querySelector('.shop-popup')

    if(!shopPopup) return

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.buy-btn')) return

        shopPopup.style.display = "flex";
        document.body.classList.add("no-scroll");
    })
})