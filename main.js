function navigateToPage(url, direction = 'left') {
  const stage = document.querySelector('.slide-stage');
  
  if (stage) {
    // Add slide-out-left for next, or slide-in-right/slide-out-right for prev
    const animationClass = direction === 'right' ? 'slide-in-right' : 'slide-out-left';
    stage.classList.add(animationClass);

    setTimeout(() => {
      window.location.href = url;
    }, 400); // Matches the 0.4s CSS transition time
  } else {
    window.location.href = url;
  }
}


let isNavigating = false;

window.addEventListener('wheel', (event) => {
  if (isNavigating) return;

  // Scrolling DOWN (deltaY > 0) -> Next Page
  if (event.deltaY > 0) {
    const nextPage = document.body.dataset.nextPage;
    if (nextPage) {
      isNavigating = true;
      navigateToPage(nextPage, 'left');
    }
  } 
  // Scrolling UP (deltaY < 0) -> Previous Page
  else if (event.deltaY < 0) {
    const prevPage = document.body.dataset.prevPage;
    if (prevPage) {
      isNavigating = true;
      navigateToPage(prevPage, 'right');
    }
  }
});