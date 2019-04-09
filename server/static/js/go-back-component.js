AFRAME.registerComponent('go-back-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.goBack();
        });
    },
    goBack : function() {
        var oldURL = document.referrer;
        console.log(oldURL); 
        location.replace(oldURL);
    },
    });