import chocobo from './chocobo.jpg';

const createHomePage = function() {
  const divContent = document.getElementById('content');

  const divIntro = document.createElement('div');
  divIntro.id = 'div-home';

  const imgChocobo = document.createElement('img');
  imgChocobo.id = 'img-chocobo';
  imgChocobo.src = chocobo;

  const divIntroStatement = document.createElement('div');
  divIntroStatement.innerHTML = 'Best wings in the business. Served with wingstop ranch!';

  divIntro.append(imgChocobo, divIntroStatement);

  divContent.innerHTML = '';
  divContent.append(divIntro);
};

export default createHomePage;