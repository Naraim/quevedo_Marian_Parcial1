function handleLoad() {

  var img = document.querySelector('.contenBox__img');
  var range = document.querySelector('.contentBox__range');
  var text = document.querySelector('.contentBox__text');

  //Aquí cambiamos el fondo del DIV
  function handleText() {
    var value = text.value;
    img.style.backgroundImage = "url(" + value + ")";
  }

  text.addEventListener('input', handleText);

  //Aquí rotamos la imagen
  function handleRange() {
    var value = range.value;
    img.style.transform = "rotate(" + value + "deg)";
  }

  range.addEventListener('input', handleRange);

}
window.addEventListener('load', handleLoad);
