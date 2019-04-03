AFRAME.registerComponent('create-sound-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            Context_AF.soundElem = document.querySelector('#dSound');
            Context_AF.soundElem.components['sound'].stopSound(); 
            Context_AF.soundElem.components['sound'].playSound();
        });
        Context_AF.el.addEventListener('mouseleave', function(event) {
            console.log("leave");
            Context_AF.soundElem = document.querySelector('#dSound');
            Context_AF.soundElem.components['sound'].stopSound(); 
            
        });
    }
});