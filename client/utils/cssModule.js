const css = (function(){
 //비공개 API
 const getStyle = function (node, prop) {
  if(typeof node === 'string') node = document.querySelector(node);
  return getComputedStyle(node, null).getpPropertyValue(prop);
 };

 const setStyle = function(node, prop, value) {
  if(typeof node === 'string') node = document.querySelector(node);
  node.style[prop] = value;
 }
 //공개 API

 const css = function(node, prop, value){
  if(!value) return getStyle(node, prop);
  setStyle(node, prop, value);
 }

 return css;
})();