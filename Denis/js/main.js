document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  let names;
  let movingElement;
  const cardDeck = document.querySelector('.card-deck');
  const userInput = document.getElementById('userInput');
  const emptyCard = document.getElementById('empty-card');

  const createCard = (data) => {
    for (let i = 0; i < names.length; i++) {
      const newCard = emptyCard.cloneNode(true);
      newCard.removeAttribute('id');
      newCard.setAttribute('draggable', 'true');
      newCard.querySelector('.card-img-top').setAttribute('src', data.results[i].picture.large);
      newCard.querySelector('.card-title').textContent = names[i];
      newCard.querySelector('.login').innerHTML = `<b>Username:</b> ${data.results[i].login.username}`;
      newCard.querySelector('.registered').innerHTML = '<b>Registered: </b>' + new Date(data.results[i].registered.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      newCard.querySelector('.card-link').setAttribute('href', `mailto:${data.results[i].email}`);
      newCard.querySelector('.card-link').innerHTML = `${data.results[i].email}`;
      cardDeck.appendChild(newCard);
    }
  };

  function dragStart(event) {
    this.style.opacity = '0.4';
    movingElement = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
  }

  function dragEnter() {
    this.classList.add('over');
  }

  function dragLeave() {
    this.classList.remove('over');
  }

  function dragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
  }

  function dragDrop(event) {
    this.classList.remove('over');
    if (movingElement !== this) {
      movingElement.innerHTML = this.innerHTML;
      this.innerHTML = event.dataTransfer.getData('text/html');
    }
    return false;
  }

  function dragEnd() {
    this.style.opacity = '1';
  }

  const addEventListeners = () => {
    const draggableElements = [...document.getElementsByClassName('card')];
    draggableElements.forEach(el => el.addEventListener('dragstart', dragStart));
    draggableElements.forEach(el => el.addEventListener('dragenter', dragEnter));
    draggableElements.forEach(el => el.addEventListener('dragleave', dragLeave));
    draggableElements.forEach(el => el.addEventListener('dragover', dragOver));
    draggableElements.forEach(el => el.addEventListener('drop', dragDrop));
    draggableElements.forEach(el => el.addEventListener('dragend', dragEnd));
  };

  const getInput = (() => {
    userInput.addEventListener('keypress', (event) => {
      cardDeck.innerHTML = '';
      if (event.keyCode === 13 && userInput.value) {
        names = userInput.value.split(', ');
        userInput.value = '';
        fetch('https://randomuser.me/api/?results='+(names.length))
          .then(response => response.json())
          .then(createCard)
          .then(addEventListeners);
      }
    });
  })();
});
