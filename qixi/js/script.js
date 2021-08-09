$(function () {
    let device_mobile = 900;


    /*-----------------------------------------------------------------------
   ページのローダー*/
    var loader = $('.loader-wrapper');


    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load', function () {
        loader.fadeOut();
        $('.splash-ani01').addClass('appear');//appearクラス付与
        $('.splash-ani02').addClass('appear');
    });
    //ページの読み込みが完了してなくても3.5秒後にアニメーションを非表示にする
    setTimeout(function () {
        loader.fadeOut();
        $('.splash-ani01').addClass('appear');//appearクラス付与
        $('.splash-ani02').addClass('appear');
    }, 3500);



    /*-----------------------------------------------------------------------
   ページのスクロール*/
    $('#scroll a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        var pos = $(elmHash).offset().top;  //idの上部の距離を取得

        //取得した位置にスクロール(画面幅によってスクロール位置を変更する)
        if (window.matchMedia('(min-width:' + device_mobile + 'px)').matches) {
            $('body,html').animate({ scrollTop: pos - 65 + "px" }, 600);
        }
        else {
            $('body,html').animate({ scrollTop: pos - 10 + "px" }, 500);
        }
        return false;
    });

    /*-----------------------------------------------------------------------
   要素のフェードインのアニメーション*/
    $(window).on('load scroll', function () {
        $('.topic').each(function () {
            //ターゲットの位置を取得
            var target = $(this).offset().top;
            //スクロール量を取得
            var scroll = $(window).scrollTop();
            //ウィンドウの高さを取得
            var height = $(window).height();
            //フェードインしているかどうかの判定
            var isFeedin = false;

            //ターゲットまでスクロールするとフェードインする
            if ((scroll > target - height + 200) && (isFeedin == false)) {
                //クラスを付与
                $(this).addClass('active');
                isFeedin = true;
            }

            //ターゲットを超えてスクロールするとフェードアウトする
            if ((scroll < target - height - 200) || ((scroll > target + 700)) && isFeedin) {
                //クラスを外す
                console.log("topic");
                $(this).removeClass('active');
                isFeedin = false;
            }

        });
    });


})