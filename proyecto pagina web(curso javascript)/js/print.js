$(document).ready(function () {
  $(".galeria").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
    responsive: true,
    pager: true,
  });

  var post =[
    {title: 'prueba de titulo 1',
date: 'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quisquam voluptatum dicta, perferendis sed magni reprehenderit repudiandae deleniti. Eius ratione dolores vel modi odit qui placeat libero aliquid sit illo?'},
    {title: 'prueba de titulo 2',
    date: 'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quisquam voluptatum dicta, perferendis sed magni reprehenderit repudiandae deleniti. Eius ratione dolores vel modi odit qui placeat libero aliquid sit illo?'},
    {title: 'prueba de titulo 3',
    date: 'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quisquam voluptatum dicta, perferendis sed magni reprehenderit repudiandae deleniti. Eius ratione dolores vel modi odit qui placeat libero aliquid sit illo?'},
    {title: 'prueba de titulo 4',
    date: 'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quisquam voluptatum dicta, perferendis sed magni reprehenderit repudiandae deleniti. Eius ratione dolores vel modi odit qui placeat libero aliquid sit illo?'},
  {title: 'prueba de titulo 5',
  date: 'Publicado el dia '+ moment().date()+ " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam quisquam voluptatum dicta, perferendis sed magni reprehenderit repudiandae deleniti. Eius ratione dolores vel modi odit qui placeat libero aliquid sit illo?'},
];
posts.forEach((item, index) => {
  var post = `<article class="post">
  <h2>${item.title}</h2>
  <span class="date">${item.date}</span>
  <p>${item.content}</p>
  <a href="#" class="button more">Leer mas</a>
  </article>`;
console.log(post);
});
});
