
AFRAME.registerComponent('roll-dice2-component', {
    schema: {},
    init : function() {
        const Context_AF = this;


        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
           
            Context_AF.rollDice();

        });
    },
    rollDice : function() {
        const Context_AF = this;
        var minc=1;
        var maxc=7; 
        //random variable to determine color and sound of each cube 
        var roll =Math.floor(Math.random() * (+maxc - +minc))+ +minc;
        var go=roll; 
        console.log(roll);
        var cur=window.location.href; 
        console.log(cur);
        strOut = cur.substring(27,28);
        console.log(strOut);
        var newnum = parseInt(strOut);
        let linkEl = document.createElement('a-link');
        let aniElem=document.createElement('a-animation');
      
        num="space"+go.toString()+".html"
        console.log(num);
        linkEl.setAttribute('href', num);
        // linkEl.setAttribute('title', {src:'/assets/textures/propertyCard_tex.jpg'});
        linkEl.setAttribute('position', {x:157, y:90, z:0});
        linkEl.setAttribute('scale', {x:50.0, y:50.0, z:50.0});
        linkEl.setAttribute('rotation', {x:0, y:0, z:0});
        switch (roll) {
            case 1:
                aniElem.setAttribute('begin', 'click');
                aniElem.setAttribute('attribute', 'rotation');
                aniElem.setAttribute('dur', '1000');
                aniElem.setAttribute('to', '360 405 45'); 
              break;
            case 2:
                aniElem.setAttribute('begin', 'click');
                aniElem.setAttribute('attribute', 'rotation');
                aniElem.setAttribute('dur', '1000');
                aniElem.setAttribute('to', '360 405 45'); 
              break;
            case 3:
                aniElem.setAttribute('begin', 'click');
                aniElem.setAttribute('attribute', 'rotation');
                aniElem.setAttribute('dur', '1000');
                aniElem.setAttribute('to', '360 405 45'); 
              break;
            case 4:
                aniElem.setAttribute('begin', 'click');
                aniElem.setAttribute('attribute', 'rotation');
                aniElem.setAttribute('dur', '1000');
                aniElem.setAttribute('to', '360 405 45'); 
              break;
            case 5:
                aniElem.setAttribute('begin', 'click');
                aniElem.setAttribute('attribute', 'rotation');
                aniElem.setAttribute('dur', '1000');
                aniElem.setAttribute('to', '360 405 45');             
              break;
            case 6:
                aniElem.setAttribute('begin', 'click');
                aniElem.setAttribute('attribute', 'rotation');
                aniElem.setAttribute('dur', '1000');
                aniElem.setAttribute('to', '360 405 45');              
              break;
          }
        switch(roll)
        {
          case 1:
          linkEl.setAttribute('image', '/assets/textures/Atlantic Ocean.jpg');
          linkEl.setAttribute('title', 'Atlantic Ocean');
          break;
          
          case 2:
            linkEl.setAttribute('image', '/assets/textures/Egypt.jpg');
            linkEl.setAttribute('title', 'Egypt');
          break;
          
          case 3:
            linkEl.setAttribute('image', '/assets/textures/Indian Ocean.jpg');
            linkEl.setAttribute('title', 'Indian Ocean');
           break;
      
          case 4:
            linkEl.setAttribute('image', '/assets/textures/Japan.jpg');
            linkEl.setAttribute('title', 'Japan');
          break;
      
          case 5:
            linkEl.setAttribute('image', '/assets/textures/Pacific Ocean.jpg'); 
            linkEl.setAttribute('title', 'Pacific Ocean'); 
          break;

          case 6:
            linkEl.setAttribute('image', '/assets/textures/Greece.jpg'); 
            linkEl.setAttribute('title', 'Greece');
          break;
        }
        var dice = document.querySelector('#dice');
        dice.appendChild(aniElem);
        let scene = document.querySelector('a-scene');
        scene.appendChild(linkEl);  
        
    },
    
});

