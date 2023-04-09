/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const appendMainContent = function() {
  const divContent = document.getElementById('content');
  console.log(divContent);

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Deezy\'s Wings';

  const divIntro = document.createElement('div');

  const imgChocobo = document.createElement('img');
  imgChocobo.id = 'img-chocobo';
  imgChocobo.src = '../src/chocobo.jpg';

  const divIntroStatement = document.createElement('div');
  divIntroStatement.innerHTML = 'Best wings in the business. Served with wingstop ranch!';

  divIntro.append(imgChocobo, divIntroStatement);

  divContent.append(h1, divIntro);
};

appendMainContent();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3ByZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcGVuZE1haW5Db250ZW50ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zb2xlLmxvZyhkaXZDb250ZW50KTtcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLmlubmVySFRNTCA9ICdEZWV6eVxcJ3MgV2luZ3MnO1xuXG4gIGNvbnN0IGRpdkludHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29uc3QgaW1nQ2hvY29ibyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdDaG9jb2JvLmlkID0gJ2ltZy1jaG9jb2JvJztcbiAgaW1nQ2hvY29iby5zcmMgPSAnLi4vc3JjL2Nob2NvYm8uanBnJztcblxuICBjb25zdCBkaXZJbnRyb1N0YXRlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZJbnRyb1N0YXRlbWVudC5pbm5lckhUTUwgPSAnQmVzdCB3aW5ncyBpbiB0aGUgYnVzaW5lc3MuIFNlcnZlZCB3aXRoIHdpbmdzdG9wIHJhbmNoISc7XG5cbiAgZGl2SW50cm8uYXBwZW5kKGltZ0Nob2NvYm8sIGRpdkludHJvU3RhdGVtZW50KTtcblxuICBkaXZDb250ZW50LmFwcGVuZChoMSwgZGl2SW50cm8pO1xufTtcblxuYXBwZW5kTWFpbkNvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=