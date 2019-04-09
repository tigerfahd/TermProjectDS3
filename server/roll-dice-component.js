
AFRAME.registerComponent('roll-dice-component', {
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
        var go; 
        console.log(roll);
        var cur=window.location.href; 
        console.log(cur);
        strOut = cur.substring(27,28);
        console.log(strOut);
        var newnum = parseInt(strOut);
        let linkEl = document.createElement('a-link');
        let aniElem=document.createElement('a-animation');
        // if(cur="http://localhost:8080/")
        // {
        //     go=roll; 
        // }
        
        if (newnum+roll>11)
        {
                temp=11-newnum; 
                go=roll-temp; 
                console.log(go);  
        }
        else
        {
            go=roll+newnum; 
            console.log(go);
        }
      
        num="space"+go.toString()+".html"
        console.log(num);
        linkEl.setAttribute('href', num);
        //current page position
        switch(newnum)
        {
          case 1:
          linkEl.setAttribute('position', {x:0, y:30, z:0});
          
        break;
      case 2:
          linkEl.setAttribute('position', {x:0, y:30, z:0});
        break;
      case 3:
      linkEl.setAttribute('position', {x:0, y:30, z:0});
        break;
      case 4:
      linkEl.setAttribute('position', {x:0, y:30, z:0});
        break;
      case 5:
      linkEl.setAttribute('position', {x:0, y:30, z:0});
        break;
      case 6:
      linkEl.setAttribute('position', {x:0, y:30, z:0});
        break;
        }
        //where it is going 
        switch(go)
        {
          case 1:
          linkEl.setAttribute('image', {src:'/assets/textures/Sky.png'});
          linkEl.setAttribute('title', 'Egypt');
          
        break;
      case 2:
      linkEl.setAttribute('image', {src:'/assets/textures/Sky.png'});
      linkEl.setAttribute('title', 'Egypt');
        break;
      case 3:
      linkEl.setAttribute('image', {src:'/assets/textures/Sky.png'});
      linkEl.setAttribute('title', 'Egypt');
        break;
      case 4:
      linkEl.setAttribute('image', {src:'/assets/textures/Sky.png'});
      linkEl.setAttribute('title', 'Egypt');
        break;
      case 5:
      linkEl.setAttribute('image', {src:'/assets/textures/Sky.png'}); 
      linkEl.setAttribute('title', 'Egypt'); 
        break;
      case 6:
      linkEl.setAttribute('image', {src:'/assets/textures/Sky.png'}); 
      linkEl.setAttribute('title', 'Egypt');
        break;
        }
        
        //dice roll
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
        var dice = document.querySelector('#dice');
        dice.appendChild(aniElem);
        let scene = document.querySelector('a-scene');
        scene.appendChild(linkEl);  
        
    },
    
});

