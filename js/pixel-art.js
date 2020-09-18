var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variables para guardar elementos del DOM
var paleta = document.getElementById('paleta');
var grillPix = document.getElementById('grilla-pixeles')
var indicador = document.getElementById('indicador-de-color');
var imgsContenedor = document.getElementsByClassName('imgs');
var botonGuardar = document.getElementById('guardar');
//Función para agregar colores de manera dinámica a la paleta
var crearPaleta = ()=>{
  for(var i = 0; i<nombreColores.length;i++){
    var color = document.createElement('div');
    color.style.backgroundColor=nombreColores[i];
    color.className = 'color-paleta';
    paleta.appendChild(color);

  }
}

//Función para crear la grilla de píxeles
var crearGrilla = ()=>{
  for(var i=0; i<1750;i++){
    var pix = document.createElement('div');
    grillPix.appendChild(pix);
  }
}

//Funcionalidad que selecciona un color de la paleta y lo muestra en el indicador de color
paleta.addEventListener('click', function(e){
  var elementoClickeado = e.target;
  indicador.style.backgroundColor = elementoClickeado.style.backgroundColor;
});

//Funcionalidad que pinta pixel en la grilla
grillPix.addEventListener('click', function(e){
  var elementoClickeado = e.target;
  elementoClickeado.style.backgroundColor = indicador.style.backgroundColor;
});

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
  })
);

//Variable que detecta si el Mouse está Apretado o no.
var mouseApretado;
grillPix.onmousedown=function(){
  mouseApretado=true
}
grillPix.onmouseup=function(){
  mouseApretado=false
}

//Implementar la acción de Pintar en Movimiento
var pintarEnMov = ()=>{
  grillPix.onmouseover = function(e){
  if(mouseApretado == true){
    e.target.style.backgroundColor = indicador.style.backgroundColor};
  }
}
//Permitir borrar la pantalla pulsando un botón
$(document).ready(function(){
  $("#borrar").click(function(){
    $('#grilla-pixeles div').each(function(){
          $(this).animate( {backgroundColor: '#ffffff'},
          2000)})
    })});
//Cargar los superheroes en forma de píxeles
for (var i = 0; i < imgsContenedor.length; i++) {
  imgsContenedor[i].addEventListener('click', function(e){
    var imgClickeada = e.target.id
    switch(imgClickeada){
      case 'batman':
          cargarSuperheroe(batman);
          break;
      case 'wonder':
          cargarSuperheroe(wonder);
          break;
      case 'flash':
          cargarSuperheroe(flash);
          break;
      case 'invisible':
          cargarSuperheroe(invisible);
          break;
    }
  });
}
//Habilitar la descargar del archivo
botonGuardar.addEventListener('click',function(){
  guardarPixelArt();
})



crearPaleta();
crearGrilla();
pintarEnMov();

