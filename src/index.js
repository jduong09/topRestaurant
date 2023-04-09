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