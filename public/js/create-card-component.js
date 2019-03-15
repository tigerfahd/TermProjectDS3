AFRAME.registerComponent('create-card-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createCard();
        });
    },
    createCard : function() {
        const Context_AF = this;
        let cardEl = document.createElement('a-entity');
        
        var cur=window.location.href; 
        strOut = cur.substring(27,28);
        console.log(cur);
        console.log(strOut);
        var newnum = parseInt(strOut);
        switch (newnum) {
            case 1:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/card.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/propertyCard_tex.jpg'});
                cardEl.setAttribute('position', {x:15, y:6, z:58});
              break;
            case 2:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/card.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/propertyCard_tex.jpg'});
                cardEl.setAttribute('position', {x:15, y:6, z:58});
              break;
            case 3:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/card.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/propertyCard_tex.jpg'});
                cardEl.setAttribute('position', {x:15, y:6, z:58});
              break;
            case 4:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_Japan.png'});
                cardEl.setAttribute('position', {x:15, y:2, z:48});
              break;
            case 5:
                cardEl.setAttribute('material', {src:'/assets/textures/propertyCard_tex.png'});
              break;
            case 6:
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_Greece.jpg'});
              break;
            case 7:
                cardEl.setAttribute('material', {src:'/assets/textures/propertyCard_tex.jpg'});
              break;
          }
        
        cardEl.setAttribute('remove-component', {}); 
        
        cardEl.setAttribute('scale', {x:0.1, y:0.1, z:0.1});
        
        let scene = document.querySelector('a-scene');
        scene.appendChild(cardEl);
    }
});