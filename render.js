function renderHello() {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, cats);
  document.getElementById('target').innerHTML = rendered;
}
