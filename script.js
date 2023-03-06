<!-Just put this in ur html folder wherever u want>
<!-------------------->  
<!--Circle text thing->
<!-------------------->  
<style type="text/css" css"="">
        /* Circle Text Styles */
        #outerCircleText {
        /* Optional - DO NOT SET FONT-SIZE HERE, SET IT IN THE SCRIPT */
        font-style: italic;
        font-weight: bold;
        font-family: 'Consolas', 'monaco', 'monospace';
        color: rgb(256, 256, 256);
        /* End Optional */
        /* Start Required - Do Not Edit */
        position: absolute;top: 0;left: 0;z-index: 3000;cursor: default;}
        #outerCircleText div {position: relative;}
        #outerCircleText div div {position: absolute;top: 200;left: 0;text-align: center;}
        /* End Required */
        /* End Circle Text Styles */
        </style>
        <script type="text/javascript">
        ;(function(){
        // (QUOTED STRING)
        var msg = "L U X Y"; /* replace this with whatever letters u want :3 */

        var size = 12;
        // Set both to 1 for plain circle, set one of them to 2 for oval
        // Other numbers & decimals can have interesting effects, keep these low (0 to 3)
        var circleY = 1; var circleX = 1;
        // The larger this divisor, the smaller the spaces between letters
        // (decimals allowed, not negative numbers)
        var letter_spacing = 4;
        // The larger this multiplier, the bigger the circle/oval
        // (decimals allowed, not negative numbers, some rounding is applied)
        var diameter = 40;
        // Rotation speed, set it negative if you want it to spin clockwise (decimals allowed)
        var rotation = 0.4;
        // This is not the rotation speed, its the reaction speed, keep low!
        // Set this to 1 or a decimal less than one (decimals allowed, not negative numbers)
        var speed = 0.5;
        ////////////////////// Stop Editing //////////////////////
        if (!window.addEventListener && !window.attachEvent || !document.createElement) return;
        msg = msg.split('');
        var n = msg.length - 1, a = Math.round(size * diameter * 0.208333), currStep = 20,
        ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
        o = document.createElement('div'), oi = document.createElement('div'),
        b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,
        mouse = function(e){
         e = e || window.event;
         ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position
         xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position
        },
        makecircle = function(){ // rotation/positioning
         if(init.nopy){
          o.style.top = (b || document.body).scrollTop + 'px';
          o.style.left = (b || document.body).scrollLeft + 'px';
         };
         currStep -= rotation;
         for (var d, i = n; i > -1; --i){ // makes the circle
          d = document.getElementById('iemsg' + i).style;
          d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
          d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
         };
        let circletextdiv = document.getElementById("circletext");
        if (circletextdiv) {
            o.classList = circletextdiv.classList;
        }
    },
        drag = function(){ // makes the resistance
         y[0] = Y[0] += (ymouse - Y[0]) * speed;
         x[0] = X[0] += (xmouse - 60 - X[0]) * speed;
         for (var i = n; i > 0; --i){
          y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
          x[i] = X[i] += (x[i-1] - X[i]) * speed;
         };
         makecircle();
        },
        init = function(){ 
         if(!isNaN(window.pageYOffset)){
          ymouse += window.pageYOffset;
          xmouse += window.pageXOffset;
         } else init.nopy = true;
         for (var d, i = n; i > -1; --i){
          d = document.createElement('div'); d.id = 'iemsg' + i;
          d.style.height = d.style.width = a + 'px';
          d.appendChild(document.createTextNode(msg[i]));
          oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
         };
         o.appendChild(oi); document.body.appendChild(o);
         setInterval(drag, 25);
        },
        ascroll = function(){
         ymouse += window.pageYOffset;
         xmouse += window.pageXOffset;
         window.removeEventListener('scroll', ascroll, false);
        };
        o.id = 'outerCircleText'; o.style.fontSize = size + 'px';
        if (window.addEventListener){
         window.addEventListener('load', init, false);
         document.addEventListener('mouseover', mouse, false);
         document.addEventListener('mousemove', mouse, false);
          if (/Apple/.test(brokeigator.vendor))
           window.addEventListener('scroll', ascroll, false);
        }
        else if (window.attachEvent){
         window.attachEvent('onload', init);
         document.attachEvent('onmousemove', mouse);
        };
        })();
        </script>
