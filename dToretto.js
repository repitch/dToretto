(function () {

    //jQuery loaded
    console.log('jquery loaded');

    var self = $.dToretto = new function () {
    };

    $.extend(self, {
        dTorettoImgs: [
            'https://vignette.wikia.nocookie.net/fastandfurious/images/5/51/Dominic_Toretto_-_FF8.jpg/revision/latest?cb=20160520015054',
            'https://vignette.wikia.nocookie.net/fastandfurious/images/8/8e/Dom.png/revision/latest?cb=20150221185329',
            'https://ae01.alicdn.com/kf/HTB1t2RORpXXXXcqXVXXq6xXFXXX7/Hot-Sell-The-Movie-Fast-and-Furious-Pendant-Dominic-Toretto-Cross-Men-s-Necklace.jpg_640x640.jpg',
            'https://jackflacco.files.wordpress.com/2015/10/vin-diesel-dominic-toretto.jpg',
            'https://www.monkeysfightingrobots.co/wp-content/uploads/2018/07/vin-diesel-in-fast-and-furious-696x400.jpg',
            'https://i.imgflip.com/ri09r.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBtlMyEaQAGTTiNQXZO-Uwwq0Mrj5Izkt5P9ohrzzKMmto0Dlkw',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqu341eU0_qV0FFsaHJVMIG4yMbo0Auk3GtM_W8ST_xtmK8V74w',
            'https://media2.giphy.com/media/fRQUcrKIRUqeA/giphy.gif',
            'https://media1.giphy.com/media/KlHpDfAELX9SM/giphy.webp',
            'https://media0.giphy.com/media/tNEhc1Lb2GhgI/giphy.gif',
            'https://media1.giphy.com/media/dNifQBf2Y2y3e/giphy.gif',
            'https://media1.giphy.com/media/m96M57Ej72J3i/giphy.gif',
            'https://media1.giphy.com/media/QPBKYSv1UxgDS/giphy.gif',
            'https://i.pinimg.com/564x/ba/1d/46/ba1d4668370092f19265437db6c787ee.jpg',
            'https://i.pinimg.com/564x/c9/1a/1e/c91a1e16b21ad6e638419144880c7c7f.jpg',
            'https://i.pinimg.com/564x/9d/56/42/9d56424a704f5fda0bd14b2dcc2fb4a8.jpg'
        ],
        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0)
                setTimeout(function () {
                    self.handleImages(lstImgs, time);
                }, time);
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.dTorettoImgs, 3000);
    });

})();


