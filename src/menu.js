import pexelsCajun from './pexels-cajun.jpg';
import pexelsHoneyGlazed from './pexels-honey-glazed.jpg';
import pexelsHot from './pexels-hot.jpg';
import pexelsSiricha from './pexels-siricha.jpg';

const objMenu = {
  siricha: {
    type: 'Siricha',
    img: pexelsSiricha
  },
  honey: {
    type: 'Honey Glazed',
    img: pexelsHoneyGlazed
  },
  hot: {
    type: 'Hot',
    img: pexelsHot
  },
  cajun: {
    type: 'Cajun',
    img: pexelsCajun
  }
}

const createMenuPage = function() {
  const divContent = document.getElementById('content');
  const divMenu = document.createElement('div');
  divMenu.classList.add('menu');

  const h2 = document.createElement('h2');
  h2.innerHTML = 'Menu';

  const ulMenu = document.createElement('ul');
  ulMenu.id = 'ul-menu';

  for (let wingFlavor in objMenu) {
    const chickenWing = objMenu[wingFlavor];

    const listMenuItem = document.createElement('li');
    
    const chickenWingName = document.createElement('h3');
    chickenWingName.innerHTML = chickenWing.type;

    const chickenWingImage = document.createElement('img');
    chickenWingImage.id = `img-${chickenWing.type.toLowerCase()}`;
    chickenWingImage.src = chickenWing.img;

    listMenuItem.append(chickenWingName, chickenWingImage);
    ulMenu.appendChild(listMenuItem);
  }
  divMenu.append(h2, ulMenu);

  divContent.innerHTML = '';
  divContent.append(divMenu);
}

export default createMenuPage;