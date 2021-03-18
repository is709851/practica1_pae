declare var Handlebars:any;
//Colocamos el título
document.getElementById('title').innerHTML = `ITESO News App`;
//Cargamos los elementos de la busqueda realizada
const templateSource = document.getElementById('articles').innerHTML; //Utilizado para los handlebars
const template = Handlebars.compile(templateSource);
const barra = <HTMLInputElement> document.getElementById('buscador');
function busqueda(){
  document.getElementById('articles').removeAttribute("hidden");
  const url = 'http://newsapi.org/v2/everything?'+
   `q=${barra.value}`+
   '&apiKey=49cf6ed726a740239aba8827554cad58';
  const req = new Request(url);
  fetch(req)
  .then((res)=>{
    return res.json();
  }).then((news)=>{
    document.getElementById('articles').innerHTML = template({
      news: news.articles,
    });
  })
}
