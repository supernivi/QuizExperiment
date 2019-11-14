$('#q1container').hide();
$('#q2container').hide();
$('#q3container').hide();
$('#q4container').hide();
$('#q5container').hide();
$('#q6container').hide();
$('#q7container').hide();
$('#emailcontainer').hide();
$('#endingcontainer').hide();

let T = 0;
let C = 0;

$('#sitetitle').text(d.site.title);

$('#headernav').append(`<img src="./img/af-logo.png" id="aflogonav">`);

$('#cityh').text(d.cities.heading);
$('#cityrow').html(d.cities.citylist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card city" id="${c.name}">
                <img class="card-img-top" src="./img/${c.name}/${c.img}">
                <h5>${c.displayname}</h5>
            </div>
            <br>
        </div>`;
}, ''));

$('#q1h').text(d.q1.heading);
$('#q1row').html(d.q1.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q1" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q2h').text(d.q2.heading);
$('#q2row').html(d.q2.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q2" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q3h').text(d.q3.heading);
$('#q3row').html(d.q3.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q3" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q4h').text(d.q4.heading);
$('#q4row').html(d.q4.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q4" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q5h').text(d.q5.heading);
$('#q5row').html(d.q5.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q5" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q6h').text(d.q6.heading);
$('#q6row').html(d.q6.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q6" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#q7h').text(d.q7.heading);
$('#q7row').html(d.q7.answerlist.reduce(function (acc, c) {
    return acc + 
        `<div class="col-sm" align="center">
            <div class="card q7" id="${c.id}">
                <img class="card-img-top" src="./img/${c.img}">
            </div>
            <br>
        </div>`;
}, ''));

$('#emailh').text(d.emailform.heading);

$( document ).ready(function() {
    var q = ['', '', '', ''];
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var city = '';
    var type = '';
    var emailcollected = window.location.search.includes('collected');
    $('.city').click(function() {
        city = $(this).attr('id');
        $('#citycontainer').hide(400);
        $('#q1container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q1').click(function() {
        q[0] = $(this).attr('id');
        if(q[0]=="q1a"){
            T++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        else{
            C++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        $('#q1container').hide(400);
        $('#q2container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q2').click(function() {
        q[1] = $(this).attr('id');
        if(q[1]=="q2a"){
            T++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        else{
            C++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        $('#q2container').hide(400);
        $('#q3container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q3').click(function() {
        q[2] = $(this).attr('id');
        if(q[2]=="q3a"){
            T++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        else{
            C++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        $('#q3container').hide(400);
        $('#q4container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q4').click(function() {
        q[3] = $(this).attr('id');
        if(q[3]=="q4a"){
            T++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        else{
            C++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        $('#q4container').hide(400);
        $('#q5container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q5').click(function() {
        q[4] = $(this).attr('id');
        if(q[4]=="q5a"){
            T++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        else{
            C++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        $('#q5container').hide(400);
        $('#q6container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q6').click(function() {
        q[5] = $(this).attr('id');
        if(q[5]=="q6a"){
            T++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        else{
            C++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        $('#q6container').hide(400);
        $('#q7container').show(800);
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
    });
    $('.q7').click(function() {
        q[6] = $(this).attr('id');
        if(q[6]=="q7a"){
            T++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        else{
            C++;
            // console.log("T value is = ", T);
            // console.log("C value is = ", C);
        }
        console.log("T value is = ", T);
        console.log("C value is = ", C);
        $('#q7container').hide(400);
        if (emailcollected) {
            $('#endingcontainer').show(800);
        } else {
            $('#emailcontainer').show(800);
        }
        $('#headernav').append(`<img src="${$(this).find(`img`).attr('src')}" id="aflogonav">`);
        var o1 = d.outcomes[0];
        var o2 = d.outcomes[1];
        var o3 = d.outcomes[2];
        var outcome;
        if (o1.rr[0].indexOf(q[0]) != -1 && o1.rr[1].indexOf(q[1]) != -1 && o1.rr[2].indexOf(q[2]) != -1 && o1.rr[3].indexOf(q[3]) != -1 && o1.rr[4].indexOf(q[4]) != -1 && o1.rr[5].indexOf(q[5]) != -1 && o1.rr[6].indexOf(q[6]) != -1) {
            $('#endingh').text(o1.heading);
            $('#endingp').text(o1.paragraph);
            $('#guideimg').prop('src', './img/' + city + '/' + o1.img);
            outcome = o1.id;
        } else if (o2.rr[0].indexOf(q[0]) != -1 && o2.rr[1].indexOf(q[1]) != -1 && o2.rr[2].indexOf(q[2]) != -1 && o1.rr[3].indexOf(q[3]) != -1 && o1.rr[4].indexOf(q[4]) != -1 && o1.rr[5].indexOf(q[5]) != -1 && o1.rr[6].indexOf(q[6]) != -1) {
            $('#endingh').text(o2.heading);
            $('#endingp').text(o2.paragraph);
            $('#guideimg').prop('src', './img/' + city + '/' + o2.img);
            outcome = o2.id;
        } else {
            $('#endingh').text(o3.heading);
            $('#endingp').text(o3.paragraph);
            $('#guideimg').prop('src', './img/' + city + '/' + o3.img);
            outcome = o3.id;
        }
        $('#cinput').val(city);
        $('#q1input').val(q[0]);
        $('#q2input').val(q[1]);
        $('#q3input').val(q[2]);
        $('#q4input').val(q[2]);
        $('#q5input').val(q[2]);
        $('#q6input').val(q[2]);
        $('#q7input').val(q[2]);
        $('#outcomeinput').val(outcome);
    });
    $('#submitemail').prop('disabled', true);
    $('#inputemail').keyup(function() {
        var email = String($(this).val());
        if (re.test(email.toLowerCase())) {
            $('#submitemail').prop('disabled', false);
            $('#cinput').prop('disabled', false);
            $('#q1input').prop('disabled', false);
            $('#q2input').prop('disabled', false);
            $('#q3input').prop('disabled', false);
            $('#q4input').prop('disabled', false);
            $('#q5input').prop('disabled', false);
            $('#q6input').prop('disabled', false);
            $('#q7input').prop('disabled', false);
            $('#outcomeinput').prop('disabled', false);
        }
    });
    $('#emailform').submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            emailcollected = true;
            $('#emailcontainer').hide(40);
            $('#endingcontainer').show(800);
        });
    });
    $('#restart').click(function() {
        q = ['', '', ''];
        $('#endingcontainer').hide();
        $('#citycontainer').show();
        $('#headernav').empty();
        $('#headernav').append(`<img src="./img/af-logo.png" id="aflogonav">`);
    })
});