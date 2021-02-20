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

    // set card to flex
    const $flexBox = document.querySelector('.js-flex');
    $flexBox.appendChild(divCard);
  };

  // set data from JSON
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '../data/image.json');
  xhr.onload = () => {
    let responseJson = JSON.parse(xhr.response);
    console.log(responseJson);

    responseJson.forEach((element) => {
      addCard(element.fileName);
    });
  };
  xhr.send();
})();
