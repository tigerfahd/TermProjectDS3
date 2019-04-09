AFRAME.registerComponent('create-soundfour-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#zSound');
        Context_AF.soundElem.components['sound'].pauseSound(); 
        Context_AF.soundElem.components['sound'].playSound();

        // Context_AF.el.addEventListener('click', function(event) {
        //     console.log("click");
           
        // });
        // Context_AF.el.addEventListener('mouseleave', function(event) {
        //     console.log("leave");
        //     Context_AF.soundElem = document.querySelector('#zSound');
        //     Context_AF.soundElem.components['sound'].stopSound(); 
            
        // });
    }
});