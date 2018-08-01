<p align="center">
  <h1 align="center">My friends - task_001</h1>
</p>

<p>User must enter names of his friends followed by comma and blank space</p>
<p>For example:

 - Dana :girl:, Michael :godmode:, Robert :boy:, Celine :bride_with_veil:</p>

<p>When he finished this input, he click <kbd>Enter</kbd> key, and we get cards of his friends below with such info: photo, name, short description</p>

<p>Cards and input (with label, see below) must have attractive UI :warning:</p>

Examples of UI:

 - <a href="https://getbootstrap.com/docs/4.1/components/card/">Card component (bootstrap)</a>
 - <a href="https://stackoverflow.com/questions/18838964/add-bootstrap-glyphicon-to-input-box">Input with icon</a>

<p>You can choose photos and remote resource as you wish (e. g. Flickr, Unsplash and so on)</p>

Layout of cards must be _2 x 2_ (no matter how many friends you entered - odd or even number). See an example the most below :point_down:

---

<p>Пользователь вводит в поле инпута имена своих друзей через запятую и пробел.</p>

<p>Пример:

 - <i>Катя :bride_with_veil:, Тоня :girl:, Вася :boy:, Петя :godmode:</i>
</p>

<p>Как только все имена введены, пользователь может нажать клавишу <kbd>Enter</kbd>, и ниже выводятся карточки его друзей со следующей информацией: фото, имя, краткое описание.</p>

<p>Оформление карточек и инпута(с иконкой :bust_in_silhouette:) обязательно :warning:</p>

Примеры оформления можно посмотреть здесь:

 - <a href="https://getbootstrap.com/docs/4.1/components/card/">Card component (bootstrap)</a>
 - <a href="https://stackoverflow.com/questions/18838964/add-bootstrap-glyphicon-to-input-box">Input with icon</a>

<p>Фотографии выбираются произвольно со стороннего ресурса (ресурс выбирается самостоятельно).</p>

Само расположение карточек по сетке _2 х 2_ (если было введено нечётное количество друзей, то сетка остаётся):

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