const galleryEl = document.querySelector(".gallery")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

galleryEl.addEventListener("wheel", (e) => {
    e.preventDefault()
    // With this we can add the mouse wheel feature.
    galleryEl.scrollLeft = e.deltaY
})

nextBtn.addEventListener("click", () => {
  
    galleryEl.style.scrollBehavior = "smooth"
    galleryEl.scrollLeft += 110
})
prevBtn.addEventListener("click", () => {
     galleryEl.style.scrollBehavior = "smooth"
    galleryEl.scrollLeft -= 110
})