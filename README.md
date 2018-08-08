<p align="center">
  <h1 align="center">My friends - task_001</h1>
</p>

<p>User must enter names of his friends followed by comma and blank space</p>
<p>For example:

 - <i>Dana :girl:, Michael :godmode:, Robert :boy:, Celine :bride_with_veil:</i>
</p>

<p>When he finished this input(the number of names is not set hard, that is, the user can enter 3 or 5 names. In this case, the grid structure is preserved: aligning to the left), he click <kbd>Enter</kbd> key, and we get cards of his friends below with such info: photo, name, short description</p>

<p>Cards and input (with label, see below) must have attractive UI :warning:</p>

Examples of UI:

 - <a href="https://getbootstrap.com/docs/4.1/components/card/">Card component (bootstrap)</a>
 - <a href="https://stackoverflow.com/questions/18838964/add-bootstrap-glyphicon-to-input-box">Input with icon</a>

<p>You can choose photos and remote resource as you wish (e. g. Flickr, Unsplash and so on)</p>

Layout of cards must be _2 x 2_ (no matter how many friends you entered - odd or even number). See an example the most below(*pic. 1*) :point_down:

__Extra task:__

Implement drag-and-drop. When capturing and dragging a card, the card is moved to the place where it happened to drop to the place of the captured card. The captured card in turn takes the place of the target. For example, if the first one is selected and it is released into place by the fourth, then they change places (the 4th card rises in place of the 1st, and the 1st card takes the place of the 4th)

***
***

<p>Пользователь вводит в поле инпута имена своих друзей через запятую и пробел.</p>

<p>Пример:

 - <i>Катя :bride_with_veil:, Тоня :girl:, Вася :boy:, Петя :godmode:</i>
</p>

<p>Как только все имена введены(количество имён задано не жёстко, то есть, пользователь может ввести и 3 и 5 имён. При этом структура сетки сохраняется: выравнивание по левому краю), пользователь может нажать клавишу <kbd>Enter</kbd>, и ниже выводятся карточки его друзей со следующей информацией: фото, имя, краткое описание.</p>

<p>Оформление карточек и инпута(с иконкой :bust_in_silhouette:) обязательно :warning:</p>

Примеры оформления можно посмотреть здесь:

 - <a href="https://getbootstrap.com/docs/4.1/components/card/">Card component (bootstrap)</a>
 - <a href="https://stackoverflow.com/questions/18838964/add-bootstrap-glyphicon-to-input-box">Input with icon</a>

<p>Фотографии выбираются произвольно со стороннего ресурса (ресурс выбирается самостоятельно. Например, Flickr, Unsplash и т. д.).</p>

Само расположение карточек по сетке _2 х 2_ (если было введено нечётное количество друзей, то сетка остаётся):

*pic. 1*

```

                        ┌-------------┐    ┌-------------┐
                        |             |    |             |
                        |    photo    |    |    photo    |
                        |-------------|    |-------------|
                        |    name     |    |    name     |
                        |-------------|    |-------------|
                        |    descr    |    |    descr    |
                        |             |    |             |
                        └-------------┘    └-------------┘

                        ┌-------------┐    ┌-------------┐
                        |             |    |             |
                        |    photo    |    |    photo    |
                        |-------------|    |-------------|
                        |    name     |    |    name     |
                        |-------------|    |-------------|
                        |    descr    |    |    descr    |
                        |             |    |             |
                        └-------------┘    └-------------┘

```

__Дополнительное задание:__

Реализовать drag-and-drop. При захвате и перетаскивании какой-либо карточки происходит взаимное перемещение той карточки на которую произошёл drop на место захваченной. Захваченная карточкая в свою очередь занимает место целевой. Например, если выбрана первая и происходит её отпускание на место четвёртой, то они меняются местами(4-ая карточка встаёт на место 1-ой, и 1-ая - на место 4-ой).
