<p align="center">
  <h1 align="center">Task 001</h1>
</p>

<p>Пользователь вводит в поле инпута имена своих друзей через запятую и пробел.</p>
<p>Пример:
    <i>Катя :bride_with_veil:, Тоня :girl:, Вася :boy:, Петя :godmode:</i>
</p>

<p>Как только все имена введены, пользователь может нажать клавишу <kbd>Enter</kbd>, и ниже выводятся карточки его друзей со следующей информацией: фото, имя, краткое описание.</p>

<p>Оформление карточек и инпута(с иконкой :bust_in_silhouette:) обязательно :warning:</p>

Примеры оформления можно посмотреть здесь:
<<<<<<< HEAD

***

 - <a href="https://getbootstrap.com/docs/4.1/components/card/">Card component (bootstrap)</a>
 - <a href="http://stackoverflow.com/question/18838964/add-bootstrap-glyphicon-to-input-box">Input with icon</a>

***

=======
 - <a href="https://getbootstrap.com/docs/4.1/components/card/">Card component (bootstrap)</a>
 - <a href="https://stackoverflow.com/questions/18838964/add-bootstrap-glyphicon-to-input-box">Input with icon</a>
***
>>>>>>> 5a794734bb696432d9639d9da12ddfc3bd096362
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

<<<<<<< HEAD
```
=======
```
>>>>>>> 5a794734bb696432d9639d9da12ddfc3bd096362
