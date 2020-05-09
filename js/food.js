var position = 'absolute'
var element = []

function Food(options){
  options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 0; 
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.color = '#fff';
}

Food.prototype.render = function(map){
  if(element != []){
    for(var a = element.length-1;a>=0;a--){
      element[a].parentNode.removeChild(element[a]);
      element.pop()
    }
  }
  this.randomXY();
  var div = document.createElement('div');
  div.style.position = position;
  div.style.left = this.x * this.width + 'px';
  div.style.top = this.y * this.height + 'px';
  div.style.width = this.width + 'px';
  div.style.height = this.height + 'px';
  div.style.backgroundColor = this.color;
  element.push(div);
  map.appendChild(div);
}

Food.prototype.randomXY = function(){
  this.x = Tools.getRandom(0, 35);
  this.y = Tools.getRandom(0, 25);
}

// var food = new Food();
// food.randomXY();
// food.render();