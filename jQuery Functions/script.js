$('.click button').click(function(){
    alert("You clicked the button!");
});

$('.hide button').click(function(){
    $('.hide p').hide();
});

$('.show img').hide();
$('.show button').click(function(){
    $('.show img').show();
});

$('.toggle button').click(function(){
    $('.toggle img').toggle();
});

$('.slideUp button').click(function(){
    $('.slideUp img').slideUp();
});

$('.slideToggle button').click(function(){
    $('.slideToggle img').slideToggle();
});

$('.fadeIn img').hide();
$('.fadeIn button').click(function(){
    $('.fadeIn img').fadeIn();
});

$('.fadeOut button').click(function(){
    $('.fadeOut img').fadeOut();
});

$('.addClass button').click(function(){
    $('.addClass img').addClass('bg-color');
});

$('.before button').click(function(){
    $('.before img').before('<p>This is an: <p>');
});

$('.after button').click(function(){
    $('.after img').after('is awesome!');
});

$('.append button').click(function(){
    $('.append h2').append(' was triggered.');
});

$('.html button').click(function(){
    $('.html h2').html('You clicked me!');
});

$('.attr button').click(function(){
    $('.attr img').attr({'width':'100px','height':'100px'});
});

$('.val button').click(function(){
    $('.val input').val('Patrick Aviel');
});

$('.text button').click(function(){
    $('.text h4').text('Goodbye!');
});