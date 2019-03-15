
AFRAME.registerComponent('go-map-component', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
           
            Context_AF.goMap();

        });
    },
    goMap : function() {
        const Context_AF = this;
      
        location.replace("map.html");
      
        
    },
    
});

