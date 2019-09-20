function handleLoad() {

  var img = document.querySelector('.contenBox__img');
  var range = document.querySelector('.contentBox__range');
  var text = document.querySelector('.contentBox__text');

  function handleText(event) {
    //console.log(event);
    var value = text.value;
    img.style.background = "url(" + value + ")";
  }

  text.addEventListener('input', handleText);

  function handleRange() {
    var value = range.value;
    //console.log(value);
    img.style.transform = "rotate(" + value + "deg)";
  }

  range.addEventListener('input', handleRange);

}
window.addEventListener('load', handleLoad);
