AFRAME.registerComponent('create-background-component', {
    schema: {},
    init : function() {
  
     soundElem = document.querySelector('#eSound');
       soundElem.components['sound'].playSound();
        
    }
});