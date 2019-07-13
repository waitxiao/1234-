

(function($) {

    $.fn.bxCarousel = function(options) {

        var defaults = {

            move: 4,

            display_num: 4,

            speed: 500,

            margin: 0,

            auto: false,

            auto_interval: 200,

            auto_dir: 'next',

            auto_hover: false,

            next_text: '>',

            next_image: '',

            prev_text: '<',

            prev_image: '',

            controls: true

        };

        var options = $.extend(defaults, options);

        return this.each(function() {

            var $this = $(this);

            var li = $this.find('li');

            var first = 0;

            var fe = 0;

            var last = options.display_num - 1;

            var le = options.display_num - 1;

            var is_working = false;

            var j = '';

            var clicked = false;

            li.css({
                'position': 'relative',
                'float': 'left',

                'listStyle': 'none',

                'marginRight': options.margin

            });

            var ow = li.outerWidth(true);

            wrap_width = (ow * options.display_num) - options.margin;

            var seg = ow * options.move;

            $this.wrap('<div class="bx_container"></div>').width(999999);

            if (options.controls) {

                if (options.next_image != '' || options.prev_image != '') {

                    var controls = '<a href="" class="prev"><img src="' + options.prev_image + '"></a><a href="" class="next"><img src="' + options.next_image + '"></a>';

                }

                else {

                    var controls = '<a href="" class="prev">' + options.prev_text + '</a><a href="" class="next">' + options.next_text + '</a>';

                }

            }

            $this.parent('.bx_container').wrap('<div class="bx_wrap"></div>').css({

                'position': 'relative',

                'width': wrap_width,

                'overflow': 'hidden'
				

            }).before(controls);

            var w = li.slice(0, options.display_num).clone();

            var last_appended = (options.display_num + options.move) - 1;

            $this.empty().append(w);

            get_p();

            get_a();

            $this.css({

                'position': 'relative',

                'left': -(seg)

            });

            $this.parent().siblings('.next').click(function() {

                slide_next();

                clearInterval(j);

                clicked = true;

                return false;

            });

            $this.parent().siblings('.prev').click(function() {

                slide_prev();

                clearInterval(j);

                clicked = true;

                return false;

            });

            /*新增 START*/

            $this.mouseover(function(e){

                if(is_working){

                    return false;

                }

                var e = e || event;

                var fobj = e.target || e.srcElement;

                if(fobj.tagName == 'LI'){

                    var i = $(fobj).index();

                    if(i == 7){

                        //这是第4个li

                        $(this).stop().animate({'left':-(ow+seg-options.margin)},options.speed);

                    }else{

                        //这是第1、2、3个li


                        $(this).stop().animate({'left':-seg},options.speed);

                    }

                    $(fobj).addClass('active').stop().animate({'width':2*(ow-options.margin)},options.speed).siblings('.active').removeClass('active').stop().animate({'width':ow-options.margin},options.speed);

                }

            });

            $this.mouseout(function(e){

                //归位

                if(is_working){

                    return false;

                }

                $(this).stop().animate({'left':-seg},options.speed);

                $(this).find('.active').removeClass('active').stop().animate({'width':ow-options.margin},options.speed);

            });

            /*新增 END*/

            if (options.auto) {

                start_slide();

                if (options.auto_hover && clicked != true) {

                    $this.find('li').live('mouseenter', 

                    function() {

                        if (!clicked) {

                            clearInterval(j);

                        }

                    });

                    $this.find('li').live('mouseleave', 

                    function() {

                        if (!clicked) {

                            start_slide();

                        }

                    });

                }

            }

            function start_slide() {

                if (options.auto_dir == 'next') {

                    j = setInterval(function() {

                        slide_next()

                    },

                    options.auto_interval);

                } else {

                    j = setInterval(function() {

                        slide_prev()

                    },

                    options.auto_interval);

                }

            }

            function slide_next() {

                if (!is_working) {

                    is_working = true;

                    set_pos('next');

                    $this.animate({

                        left: '-=' + seg

                    },

                    options.speed, 

                    function() {

                        $this.find('li').slice(0, options.move).remove();

                        $this.css('left', -(seg));

                        get_a();

                        is_working = false;

                    });

                }

            }

            function slide_prev() {

                if (!is_working) {

                    is_working = true;

                    set_pos('prev');

                    $this.animate({

                        left: '+=' + seg

                    },

                    options.speed, 

                    function() {

                        $this.find('li').slice( - options.move).remove();

                        $this.css('left', -(seg));

                        get_p();

                        is_working = false;

                    });

                }

            }

            function get_a() {

                var str = new Array();

                var lix = li.clone();

                le = last;

                for (i = 0; i < options.move; i++) {

                    le++

                    if (lix[le] != undefined) {

                        str[i] = $(lix[le]);

                    } else {

                        le = 0;

                        str[i] = $(lix[le]);

                    }

                }

                $.each(str, 

                function(index) {

                    $this.append(str[index][0]);

                });

            }

            function get_p() {

                var str = new Array();

                var lix = li.clone();

                fe = first;

                for (i = 0; i < options.move; i++) {

                    fe--

                    if (lix[fe] != undefined) {

                        str[i] = $(lix[fe]);

                    } else {

                        fe = li.length - 1;

                        str[i] = $(lix[fe]);

                    }

                }

                $.each(str, 

                function(index) {

                    $this.prepend(str[index][0]);

                });

            }

            function set_pos(dir) {

                if (dir == 'next') {

                    first += options.move;

                    if (first >= li.length) {

                        first = first % li.length;

                    }

                    last += options.move;

                    if (last >= li.length) {

                        last = last % li.length;

                    }

                } else if (dir == 'prev') {

                    first -= options.move;

                    if (first < 0) {

                        first = li.length + first;

                    }

                    last -= options.move;

                    if (last < 0) {

                        last = li.length + last;

                    }

                }

            }

        });

    }

})(jQuery);




$(document).ready(function(){

 $('#example1').bxCarousel({

  display_num: 1, 

  move:1,

  margin:2,

  auto: false

 });

});


/*文字特效*/

$(function () {
  $('.box7').textillate({
   // 默认的生成文本碎片的类名
  selector: '.texts',

  // 是否循环播放
  loop: true,

  // 进动画到出动画直接的时间，可以设置为0，进动画和出动画中间没有时间间隔
  minDisplayTime: 2000,

  // 动画延迟时间
  initialDelay: 0,

  // 是否自动播放
  autoStart: true,

  // 进动画特效
  inEffects: [],

  // 出动画特效
  outEffects: [ 'hinge' ],

  // 进动画各项配置
  in: {
    // 特效
    effect: 'fadeInLeftBig',

    // 延迟比例
    delayScale: 2.5,

    // 延迟
    delay: 80,

    // 每个文字碎片动画是否同步播放
    sync: false,

    // 每个文字碎片动画是否随机播放
    shuffle: false,

    // 反方向播放
    reverse: false,

    // 回调函数
    callback: function () {}
  },

  out: {
    loop: true,
   /* effect: 'hinge',*/
    effect:'rollIn',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },

// 整个插件的回调函数
  callback: function () {},

  // set the type of token to animate (available types: 'char' and 'word')对中文来说，word意味着这个段落
  type: 'char'
});

    })


