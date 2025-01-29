const menuBtn = document.querySelector('.menu-btn');
const options = document.querySelector('.options');

menuBtn.addEventListener('click', () => {
  options.classList.toggle('active');
  menuBtn.classList.toggle('open');
});



//   document.getElementById('about-link').addEventListener('click', (e) => {
//       console.log("Navigating to About Us page...");
//   });

  

// document.querySelector('.options-toggle').addEventListener('click', () => {
//   document.querySelector('.clickable-options-container').classList.toggle('active');
// });


// function expandDiv(div) {
//   div.classList.toggle('expanded');
// }
