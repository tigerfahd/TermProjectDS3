AFRAME.registerComponent('create-backgroundSound-component', {
    schema: {},
    init : function() {
        const Context_AF = this;

        window.addEventListener('load', function(event) {
            console.log("background play");
            Context_AF.soundElem = document.querySelector('#eSound');
            Context_AF.soundElem.components['sound'].playSound();
        });

    }
});