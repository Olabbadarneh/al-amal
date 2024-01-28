function myFunctiona() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    alert("Are You Sure!?");
}

document.addEventListener("DOMContentLoaded", function () {
    
    let divimages = document.querySelector('.row');

    let imagesSrc = ["images/demo/food.jpg", "images/demo/ملابس.jpeg", "images/demo/مصاري.jpg", "images/demo/other.jpg", "images/demo/services.jpg", "images/demo/blood.png"];

    fillImages('row', imagesSrc);

    function fillImages(name, imagesList) {

      let images = document.querySelector('.' + name);

      imagesList.forEach(function (option) {

        let image = document.createElement('img');

        image.src = option;

        image.classList='container, column';

        images.appendChild(image);
        
      });
    }
  });