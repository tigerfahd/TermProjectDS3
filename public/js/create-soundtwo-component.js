AFRAME.registerComponent('create-soundtwo-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            Context_AF.soundElem = document.querySelector('#oSound');
            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
        Context_AF.el.addEventListener('mouseleave', function(event) {
            console.log("leave");
            Context_AF.soundElem = document.querySelector('#oSound');
            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            
        });
    }
});