
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
        let aniElem=document.createElement('a-animation');
        switch (roll) {
          case 1:
              aniElem.setAttribute('begin', 'mouseenter');
              aniElem.setAttribute('attribute', 'rotation');
              aniElem.setAttribute('dur', '1000');
              // aniElem.setAttribute('position', '25.670 0.750 58.00')
              aniElem.setAttribute('to', '58.240 -145.78 -30.230'); 
              
            break;
          case 2:
              aniElem.setAttribute('begin', 'mouseenter');
              aniElem.setAttribute('attribute', 'rotation');
              aniElem.setAttribute('dur', '1000');
              // aniElem.setAttribute('position', '24.520 0.750 58.00')
              aniElem.setAttribute('to', '-12.150 -100 -30.230'); 
            break;
          case 3:
              aniElem.setAttribute('begin', 'mouseenter');
              aniElem.setAttribute('attribute', 'rotation');
              aniElem.setAttribute('dur', '1000');
              // aniElem.setAttribute('position', '24.520 3.776 58.00')
              aniElem.setAttribute('to', '-13.180 -262.03 -245.90'); 
            break;
          case 4:
              aniElem.setAttribute('begin', 'mouseenter');
              aniElem.setAttribute('attribute', 'rotation');
              aniElem.setAttribute('dur', '1000');
              // aniElem.setAttribute('position', '24.520 0.750 58.00')
              aniElem.setAttribute('to', '-13.180 -266.22 -45.190'); 
            break;
          case 5:
              aniElem.setAttribute('begin', 'mouseenter');
              aniElem.setAttribute('attribute', 'rotation');
              aniElem.setAttribute('dur', '1000');
              // aniElem.setAttribute('position', '24.520 3.776 58.00')
              aniElem.setAttribute('to', '-13.180 -260.92 -150.00');             
            break;
          case 6:
              aniElem.setAttribute('begin', 'mouseenter');
              aniElem.setAttribute('attribute', 'rotation');
              aniElem.setAttribute('dur', '1000');
              aniElem.setAttribute('to', '-116.99 -145.78 -30.230');              
            break;
        }
        var go; 
        console.log(roll);
        var cur=window.location.href; 
        console.log(cur);
        strOut = cur.substring(27,28);
        console.log(strOut);
        var newnum = parseInt(strOut);
        let linkEl = document.createElement('a-link');
        if (newnum==1)
        {
          var strOut2 = cur.substring(27,29);
          if (strOut2 == "10")
          {
            newnum=10; 
          }
          else if (strOut2 == "11")
          {
            newnum=11; 
          }
          else
          {
            newnum==1; 
          }
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
        }
        else if (newnum>1)
        {
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
        }
        num="space"+go.toString()+".html"
        console.log(num);
        linkEl.setAttribute('href', num);
        //current page position
        switch(newnum)
        {
          //Atlantic Ocean 
          case 1:
            linkEl.setAttribute('position', {x:-10.753, y:15.328, z:0});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;

      //Egypt
          case 2:
            linkEl.setAttribute('position', {x:5, y:9, z:30});
            linkEl.setAttribute('scale', {x:8.0, y:8.0, z:8.0});
          break;
      
      //Indian Ocean
          case 3:
            linkEl.setAttribute('position', {x:-10.753, y:15.328, z:0});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
      
      //Japan
          case 4:
            linkEl.setAttribute('position', {x:22.752, y:20.057, z:71.271});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
           break;
      
      //Pacific Ocean
          case 5:
            linkEl.setAttribute('position', {x:-10.753, y:15.328, z:0});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
      
      //Greece
          case 6:
            linkEl.setAttribute('position', {x:40, y:10, z:93});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
      //Arctic Ocean
          case 7:
            linkEl.setAttribute('position', {x:-10.753, y:15.328, z:0});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
      
      //India
          case 8:
            linkEl.setAttribute('position', {x:-230.31, y:40.227, z:293.623});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
      
      //Peru
          case 9:
            linkEl.setAttribute('position', {x:41.888, y:8.389, z:387.658});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
      
          case 10:
            linkEl.setAttribute('position', {x:-124.492, y:10.328, z:388.048});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
      
      
          case 11:
            linkEl.setAttribute('position', {x:-104.492, y:10.328, z:388.048});
            linkEl.setAttribute('scale', {x:10.0, y:10.0, z:10.0});
          break;
  
        }
        //where it is going 
        switch(go)
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
      
          case 7:
            linkEl.setAttribute('image', '/assets/textures/Arctic.jpg'); 
            linkEl.setAttribute('title', 'Arctic Ocean'); 
          break;

          case 8:
            linkEl.setAttribute('image', '/assets/textures/India.jpg'); 
            linkEl.setAttribute('title', 'India');
          break;
      
          case 9:
            linkEl.setAttribute('image', '/assets/textures/Peru.jpg'); 
            linkEl.setAttribute('title', 'Peru'); 
          break;

          case 10:
            linkEl.setAttribute('image', '/assets/textures/Jamaica.jpg'); 
            linkEl.setAttribute('title', 'Jamaica');
          break;
      
          case 11:
            linkEl.setAttribute('image', '/assets/textures/Antarctica.jpg'); 
            linkEl.setAttribute('title', 'Antarctica'); 
          break;
        }

        //dice roll

        var dice = document.querySelector('#dice');
        dice.appendChild(aniElem);
        let scene = document.querySelector('a-scene');
        scene.appendChild(linkEl);  
        
    },
    
});

