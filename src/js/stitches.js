/**
 * # Stitches
 *
 * ### _An HTML5 Sprite Sheet Generator_
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 *
 * Stitches is an HTML5 sprite sheet generator.
 *
 * Stitches is developed by Matthew Cobbs in concert with the lovely open-source
 * community at Github. Thanks are owed to the developers at Twitter for
 * [Bootstrap](http://twitter.github.io/bootstrap), and
 * [Glyphicons](http://glyphicons.com/) for some cool little icons.
 *
 * Addtionally, I want to thank [James Taylor](https://github.io/jbt)
 * for the [Docker](https://github.io/jbt/docker) documentation tool, and most
 * of all the good folks who develop [RequireJS](http://requirejs.org/) and
 * [GruntJS](http://gruntjs.com/), for helping this all make sense.
 */

/**
 * ### RequireJS Main
 *
 * Kicks off application on elements matching `.stitches`
 */
require({
    paths: {
        "tpl" : "../tpl"
    }
},
[
    "wrap/jquery",
    "module/stitches"
],
function($, Stitches) {

    "use strict";

    $(document).ready(function () {
        var stitches = new Stitches($("#stitches"));

        $('#j-move').click(function(){
            if($(this).hasClass('disabled')){
                return;
            }

            var animation_width = stitches.canvas.sprites[0].width-stitches.canvas.sprites[0].padding*2,
                animation_height = stitches.canvas.sprites[0].height-stitches.canvas.sprites[0].padding*2,
                animation_time = $("#animation_time").val(),
                animation_wrap = $('<div class="animation_wrap">');

            var animation_wrap_css = {
                height:animation_height+'px',
                width:animation_width+'px',
                position:'relative',
                'z-index':99,
                'overflow':'hidden'
            };

             var animation_wrap_css_compatibility = {
                height:(animation_height/750).toFixed(6)*100+'vw',
                width:(animation_width/750).toFixed(6)*100+'vw',
                position:'relative',
                'z-index':99,
                'overflow':'hidden'
            };

            animation_wrap.css({
                height:animation_height+'px',
                width:animation_width+'px',
                position:'relative',
                'z-index':99,
                'overflow':'hidden',
                'background-color': 'rgba(0,0,0,0.2)'
            });

            $("#animation-con").html(animation_wrap);
            $('[data-action="downloads"]').trigger('click');
            var img_width = $('#stitches-canvas').width(),
                img_height = $('#stitches-canvas').height(),
                img_src = $('#spritesheet').find('img').attr('src'),
                img_wrap = $('<div class="img_wrap">'),
                time = parseFloat($('#animation_time').val()/1000),
                delay = parseFloat($('#animation_delay').val()/1000),
                count = $('#animation_count').val()||'infinite',
                direction = $('#animation_direction [type="radio"]:checked').val(),
                mode = $('#animation_mode [type="radio"]:checked').val();
            
            var img_wrap_css_compatibility = {
                height:(img_height/750).toFixed(6)*100+'vw',
                width:(img_width/750).toFixed(6)*100+'vw',
                position:'relative',
                'transform':'translate3d(-'+(stitches.canvas.sprites[0].padding/750).toFixed(6)*100+'vw,-'+(stitches.canvas.sprites[0].padding/750).toFixed(6)*100+'vw,0)',
                'animation-name':'frames',
                'animation-duration':time+'s',
                'animation-timing-function':'step-start',
                'animation-delay':delay+'s',
                'animation-iteration-count':count,
                'animation-direction':direction,
                'animation-fill-mode':mode,
                'background-image':'url(spritesheet.png)'
            }

            var img_wrap_css = {
                height:img_height+'px',
                width:img_width+'px',
                position:'relative',
                'transform':'translate3d(-'+stitches.canvas.sprites[0].padding+'px,-'+stitches.canvas.sprites[0].padding+'px,0)',
                'animation-name':'frames',
                'animation-duration':time+'s',
                'animation-timing-function':'step-start',
                'animation-delay':delay+'s',
                'animation-iteration-count':count,
                'animation-direction':direction,
                'animation-fill-mode':mode,
                'background-image':'url(spritesheet.png)'
            };

            img_wrap.css({
                height:img_height+'px',
                width:img_width+'px',
                position:'relative',
                'transform':'translate3d(-'+stitches.canvas.sprites[0].padding+'px,-'+stitches.canvas.sprites[0].padding+'px,0)',
                'animation-name':'frames',
                'animation-duration':time+'s',
                'animation-timing-function':'step-start',
                'animation-delay':delay+'s',
                'animation-iteration-count':count,
                'animation-direction':direction,
                'animation-fill-mode':mode,
                'background-image':'url('+img_src+')'
            });

            // debugger;
            $('#animation-con').css({
                height:img_height+'px',
                width:img_width+'px'
            });

            var framesArr_compatibility = [],frames_compatibility = '\n@keyframes frames{\n';
            var len = stitches.canvas.sprites.length;
            $.map(stitches.canvas.sprites, function (sprite,index) {
                if(index==len-1){
                    var persent = 100;
                }else{
                    var persent = parseFloat(100/(len-1)*index);
                }
                persent = Math.round(persent*10000)/10000;  
                var left = parseFloat(sprite.left(true)),top = parseFloat(sprite.top(true));
                var item_frames = persent + '%{'+'\n'+'transform:translate3d(' + (left/750).toFixed(6)*100 + 'vw,' + (top/750).toFixed(6)*100 + 'vw,0px);\n}\n';
                framesArr_compatibility[index] = item_frames;
                
            });
            frames_compatibility = frames_compatibility+framesArr_compatibility.join('')+'}';


            var framesArr = [],frames = '\n@keyframes frames{\n';
            var len = stitches.canvas.sprites.length;
            $.map(stitches.canvas.sprites, function (sprite,index) {
                if(index==len-1){
                    var persent = 100;
                }else{
                    var persent = parseFloat(100/(len-1)*index);
                }
                persent = Math.round(persent*10000)/10000;  
                var left = sprite.left(true),top = sprite.top(true);
                var item_frames = persent + '%{'+'\n'+'transform:translate3d(' + left + ',' + top + ',0px);\n}\n';
                framesArr[index] = item_frames;
                
            });
            frames = frames+framesArr.join('')+'}';
            
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = frames;
            document.getElementsByTagName('head')[0].appendChild(style);
            animation_wrap.html(img_wrap);



            $('#animation-html textarea').html('<div class="animation_wrap"><div class="img_wrap"></div></div>');
            

            // CSS
            var css_text_1 = '';
            for(var item in animation_wrap_css){
                css_text_1 += "&nbsp;&nbsp;&nbsp;&nbsp;"+item+":"+animation_wrap_css[item]+";\n";
            }
            var css_text_2 = '';
            for(var item2 in img_wrap_css){
                css_text_2 += "&nbsp;&nbsp;&nbsp;&nbsp;"+item2+":"+img_wrap_css[item2]+";\n";
            }
            $('#animation-css textarea').html('.animation_wrap{\n'+css_text_1+'}\n'+'.img_wrap{\n'+css_text_2+'}\n'+frames+'\n');
        
            // CSS兼容

            var css_text_3 = '';
            for(var item3 in animation_wrap_css_compatibility){
                css_text_3 += "&nbsp;&nbsp;&nbsp;&nbsp;"+item3+":"+animation_wrap_css_compatibility[item3]+";\n";
            }
            var css_text_4 = '';
            for(var item4 in img_wrap_css_compatibility){
                css_text_4 += "&nbsp;&nbsp;&nbsp;&nbsp;"+item4+":"+img_wrap_css_compatibility[item4]+";\n";
            }
            $('#animation-css-compatibility textarea').html('.animation_wrap{\n'+css_text_3+'}\n'+'.img_wrap{\n'+css_text_4+'}\n'+frames_compatibility+'\n');

        });

    });

});