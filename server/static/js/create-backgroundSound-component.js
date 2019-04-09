AFRAME.registerComponent('create-backgroundSound-component', {
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            Context_AF.soundElem = document.querySelector('#back');
            Context_AF.soundElem.components['sound'].stopSound(); 
            Context_AF.soundElem.components['sound'].playSound();
        });

    }
});