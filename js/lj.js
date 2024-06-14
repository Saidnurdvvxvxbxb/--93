function handleSmallScreens() {
    document.querySelector('.navbar-toggler')
      .addEventListener('click', () => {
        let navbarMenu = document.querySelector('.navbar-menu')
  
        if (!navbarMenu.classList.contains('active')) {
          navbarMenu.classList.add('active')
        } else {
          navbarMenu.classList.remove('active')
        }
      })
  }
  
  handleSmallScreens()
  
  const modal = document.getElementById("modal");
  const closeButton = document.getElementsByClassName("close-button")[0];
  
  
  document.getElementById("btn").onclick=function(){
      modal.style.display = "block";
  }
  
  // Открыть модальное окно
  
  
  // Закрыть модальное окно при клике на крестик
  closeButton.onclick = function() {
    modal.style.display = "none";
  }
  
  // Закрыть модальное окно при клике вне его
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  