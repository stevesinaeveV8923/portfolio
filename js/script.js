// KLOPT NOG NIET HELEMAAL!!!!

$('.abouth').click(function(){

    $(this).toggleClass("active");
    $('a').css('color', 'white');
    $('.xph').removeClass('active');
    $('.contacth').removeClass('active');
    $('#about').toggleClass("toggle");
    if($("#about").css('display') === 'none')
    {
        $('#xp').css('display','none');
        $('#contact').css('display','none');
        $('.headTitle').css('display','none');
        $('#about').show();
        $('.content').css('top', '100%');
        $('.content').animate({top: '15%' } , "medium");
    }
    else 
    {
        $('#about').css('display', 'none');
        $('#contact').css('display', 'none');
        $('#xp').css('display','none');
        $('#about').css('display','none');
        $('.headTitle').css('display','inline-block');
    }
});



$('.xph').click(function(){
    $(this).toggleClass("active");
    $('.abouth').removeClass('active');
    $('.contacth').removeClass('active');
    $('#xp').toggleClass("toggle");
    if($("#xp").css('display') === 'none')
    {
        $('#contact').css('display','none');
        $('#about').css('display','none');
        $('.headTitle').css('display','none');
        $('#xp').show();
    }
    else 
    {
        $('#xp').css('display', 'none');
        $('#contact').css('display', 'none');
        $('#xp').css('display','none');
        $('#about').css('display','none');
        $('.headTitle').css('display','inline-block');
    }
});



$('.contacth').click(function(){
    $(this).toggleClass("active");
    $('.xph').removeClass('active');
    $('.abouth').removeClass('active');
    $('#contact').toggleClass("toggle");
    if($("#contact").css('display') === 'none')
    {
        $('#about').css('display','none');
        $('#xp').css('display','none');
        $('.headTitle').css('display','none');
        $('#contact').show();
    }
    else 
    {
        $('#contact').css('display', 'none');
        $('#xp').css('display','none');
        $('#about').css('display','none'); 
        $('.headTitle').css('display','inline-block');
    }
});

// --------------------------------------------------------