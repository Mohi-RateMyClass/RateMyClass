// import {$, jQuery} from 'jQuery'
$(function() { 
    Cookies.set('cookie_name', 'cookie_value', { expires: 365 });
    Cookies.get('cookie_name'); // => 'value'
    Cookies.remove('cookie_name');
});


function loginInfo(){
    var user = document.getElementById("loginuser").value; 
    var pass = document.getElementById("loginpass").value;
alert(pass);
}
