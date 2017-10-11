// // KLOPT NOG NIET HELEMAAL!!!!

$('.abouth').click(function(){

    $(this).toggleClass("active");
    $('.xph').removeClass('active');
    $('.contacth').removeClass('active');

    if($("#about").css('display') === 'none')
    {
        // $('.xph').css('color','white');
        // $('.contacth').css('color','white');
        $('#xp').css('display','none');
        $('#contact').css('display','none');
        $('.headTitle').css('display','none');
        $('#about').css('display', 'initial');
        $('#about').addClass('toggle');
        $('.content').css('top', '100%');
        $('.content').animate({top: '15%' } , "medium");
    }
    else 
    {
        // $('.xph').css('color','#40C4AA');
        // $('.contacth').css('color','#40C4AA');
        $('#about').css('display', 'none');
        $('#contact').css('display', 'none');
        $('#xp').css('display','none');
        $('#about').css('display','none');
        $('#about').removeClass('toggle');
        $('.headTitle').css('display','inline-block');
    }
});



$('.xph').click(function(){
    $(this).toggleClass("active");
    $('.abouth').removeClass('active');
    $('.contacth').removeClass('active');
    if($("#xp").css('display') === 'none')
    {
        $('#contact').css('display','none');
        $('#about').css('display','none');
        $('.headTitle').css('display','none');
        // $('a').css('color', 'white');
        $('#xp').addClass('toggle');
        $('#xp').show();
    }
    else 
    {
        // $('a').css('color', '#40C4AA');
        $('#xp').css('display', 'none');
        $('#contact').css('display', 'none');
        $('#xp').css('display','none');
        $('#about').css('display','none');
        $('#xp').removeClass('toggle');
        $('.headTitle').css('display','inline-block');
    }
});



$('.contacth').click(function(){
    $(this).toggleClass("active");
    $('.xph').removeClass('active');
    $('.abouth').removeClass('active');
    if($("#contact").css('display') === 'none')
    {
        $('#about').css('display','none');
        $('#xp').css('display','none');
        $('.headTitle').css('display','none');
        // $('a').css('color', 'white');
        $('#contact').addClass('toggle');
        $('#contact').show();
    }
    else 
    {
        // $('a').css('color', '#40C4AA');
        $('#contact').css('display', 'none');
        $('#xp').css('display','none');
        $('#about').css('display','none'); 
        $('#contact').removeClass('toggle');
        $('.headTitle').css('display','inline-block');
    }
});

// --------------------------------------------------------
