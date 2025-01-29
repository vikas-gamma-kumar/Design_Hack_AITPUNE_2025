
  const menuBtn = document.querySelector('.menu-btn');
  const options = document.querySelector('.options');

  menuBtn.addEventListener('click', () => {
    options.classList.toggle('active');
    menuBtn.classList.toggle('open');
  });


    // Optional JavaScript if you want to handle the click programmatically
    document.getElementById('about-link').addEventListener('click', (e) => {
        console.log("Navigating to About Us page...");
    });