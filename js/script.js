(() => {
  const addCard = (fileName) => {
    // create card
    const divCard = document.createElement('div');
    divCard.classList.add('c-card');

    // add image
    const image = document.createElement('img');
    image.src = 'img/' + fileName;
    image.classList.add('c-image');
    divCard.appendChild(image);

    // set card to flex box
    const $flexBox = document.querySelector('.js-disp-cards');
    $flexBox.appendChild(divCard);
  };

  // set data from JSON
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '../data/image.json');
  xhr.onload = () => {
    let responseJson = JSON.parse(xhr.response);
    responseJson.forEach((element) => {
      addCard(element.fileName);
    });
  };
  xhr.send();
})();
