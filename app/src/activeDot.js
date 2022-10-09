function activeDot(slideIndex) {
    const dots = document.querySelectorAll('.dot');
    
    let i
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

    dots[slideIndex-1].className += " active";

    console.log(slideIndex)
}

export default activeDot;