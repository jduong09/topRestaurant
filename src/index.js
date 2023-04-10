import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const header = function() {
  const headerlinks = ['Home', 'Menu', 'Contact'];

  const headerContent = document.createElement('header');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Deezy\'s Wings';

  const headerNav = document.createElement('nav');
  const ulHeader = document.createElement('ul');

  for (let i = 0; i < headerlinks.length; i++) {
    const listHeaderItem = document.createElement('li');
    
    const listHeaderButton = document.createElement('button');
    listHeaderButton.innerHTML = headerlinks[i];
  
    listHeaderButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.currentTarget.innerHTML === 'Home') {
        createHomePage();
      } else if (e.currentTarget.innerHTML === 'Menu') {
        createMenuPage()
      } else if (e.currentTarget.innerHTML === 'Contact') {
        createContactPage();
      }
    });

    listHeaderItem.appendChild(listHeaderButton);
    ulHeader.appendChild(listHeaderItem);
  }
  headerNav.appendChild(ulHeader);
  headerContent.append(h1, headerNav);
  document.querySelector('body').prepend(headerContent);
}

header();
createHomePage();