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
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_AtlanticOcean.png'});
                cardEl.setAttribute('position', {x:15, y:6, z:58});
              break;
            case 2:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/card.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_Egypt.png'});
                cardEl.setAttribute('position', {x:6, y:-1, z:32});
                cardEl.setAttribute('scale', {x:0.04, y:0.04, z:0.04});
              break;
            case 3:
                cardEl.setAttribute('obj-model', {obj:'/assets/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_IndianOcean.png'});
                cardEl.setAttribute('position', {x:15, y:6, z:58});
              break;
            case 4:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_Japan.png'});
                cardEl.setAttribute('position', {x:15, y:2, z:48});
              break;
            case 5:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_PacificOcean.png'});
                cardEl.setAttribute('position', {x:15, y:2, z:48});
              break;
            case 6:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_Greece.png'});
                cardEl.setAttribute('position', {x:10, y:2, z:48});
              break;
            case 7:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_ArcticOcean.png'});
                cardEl.setAttribute('position', {x:15, y:2, z:48});
              break;
            case 8:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_India.png'});
                cardEl.setAttribute('position', {x:-94, y:18, z:181.575});
                cardEl.setAttribute('scale', {x:0.124, y:0.124, z:0.124});
              break;
            case 9:
                cardEl.setAttribute('obj-model', {obj:'/assets/models/PropertyCard_Japan.obj'});
                cardEl.setAttribute('material', {src:'/assets/textures/PropertyCard_Peru.png'});
                cardEl.setAttribute('position', {x:4, y:1.2, z:288});
                cardEl.setAttribute('scale', {x:0.07, y:0.07, z:0.07});
              break;
          }
        
        cardEl.setAttribute('remove-component', {}); 
        let scene = document.querySelector('a-scene');
        scene.appendChild(cardEl);
    }
});