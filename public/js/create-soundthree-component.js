AFRAME.registerComponent('create-soundthree-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        

        Context_AF.el.addEventListener('mouseenter', function(event) {
            console.log("click");
            Context_AF.soundElem = document.querySelector('#kSound');
            Context_AF.soundElem.components['sound'].stopSound(); 
            Context_AF.soundElem.components['sound'].playSound();
        });
        
    }
});