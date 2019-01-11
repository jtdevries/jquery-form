// Solution goes here

//GIVE NAME VALUE
var name;
var nameCheck = /\w+[a-zA-Z_]{4,15}/;

//GIVE MAIL VALUE
var mail;
var mailCheck = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;

//GIVE PASSWORD VALUE
var pass;
var passLength;
var passCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}/;

//GIVE CONFIRMATION ALUE
var conf;

//NAME VALIDATION
$('#display-name').keyup(function() {
  name = $('#display-name').val();
  console.log(nameCheck.test(name));
  if (nameCheck.test(name) === true) {
    $('#display-name').css('border', '2px solid green')
    $('#display-nameP').addClass('hidden');
  } else {
    $('#display-name').css('border', '2px solid red')
    $('#display-nameP').removeClass('hidden');
  }
});

//PASSWORD VALIDATION
$('#pass').keyup(function() {
  pass = $('#pass').val();
  console.log(passCheck.test(pass));
  if (passCheck.test(pass) === true) {
    $('#pass').css('border', '2px solid green')
    $('#passP').addClass('hidden');
  } else {
    $('#pass').css('border', '2px solid red')
    $('#passP').removeClass('hidden');
  }
});

$('#pass').keyup(function() {
  passLength = pass.length;
  if (passLength <= 5) {
    $('#passStrWeak').removeClass('hidden');
    $('#passStrMedium').addClass('hidden');
  } else if (passLength <= 8) {
    $('#passStrMedium').removeClass('hidden');
    $('#passStrStrong').addClass('hidden');
  } else {
    $('#passStrStrong').removeClass('hidden');
  }
});


//CONFIRMATION VALIDATION
$('#pass-confirm').keyup(function() {
  conf = $('#pass-confirm').val();
  if (conf === pass) {
    $('#pass-confirm').css('border', '2px solid green')
    $('#pass-confirmP').addClass('hidden');
  } else {
    $('#pass-confirm').css('border', '2px solid red')
    $('#pass-confirmP').removeClass('hidden');
  }
});

//EMAIL VALIDATION
$('#email').keyup(function() {
  mail = $('#email').val();
  console.log(mailCheck.test(mail));
  if (mailCheck.test(mail) === true) {
    $('#email').css('border', '2px solid green')
    $('#emailP').addClass('hidden');
  } else {
    $('#email').css('border', '2px solid red')
    $('#emailP').removeClass('hidden');
  }
});

//SUBMIT
$('#send').click(function() {
  if ((nameCheck.test(name) === true) && (passCheck.test(pass) === true) && (conf === pass) && (mailCheck.test(mail) === true)) {
    alert('Thanks for registering');
  } else {
    alert('Not all requirements met');
  }
});
