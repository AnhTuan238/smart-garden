
  //Lay du lieu 
  var valueTemp = firebase.database().ref('DoAn').child('Temperature');
  valueTemp.on('value', snap =>{
    document.getElementById("Nhietdo").innerHTML = snap.val()+" °C";
  });

  var valueHud = firebase.database().ref('DoAn').child('Humidity');
  valueHud.on('value', snap =>{
    document.getElementById("Doam").innerHTML = snap.val()+" %";
  });

  var valueRain = firebase.database().ref('DoAn').child('RainPercentage');
  valueRain.on('value', snap =>{
    document.getElementById("Luongmua").innerHTML = snap.val()+" %";
  });

  var valueSoil = firebase.database().ref('DoAn').child('SoilMoisturePercentage');
  valueSoil.on('value', snap =>{
    document.getElementById("Doamdat").innerHTML = snap.val()+" %";
  });

  var valueAuto = firebase.database().ref('DoAn').child('PreviousMode');
  var valueServo = firebase.database().ref('DoAn').child('RelayServo');
  var valuePump = firebase.database().ref('DoAn').child('RelayPump');
  valueAuto.on('value', snap => {
    const autoModeValue = snap.val();
    document.getElementById("Automode").innerHTML = autoModeValue;

    var autoSwitch1 = document.getElementById('autoSwitch1');
    var autoSwitch2 = document.getElementById('autoSwitch2');
    var switchText1 = document.querySelector('#autoSwitchLabel1 + .switch-text');
    var switchText2 = document.querySelector('#autoSwitchLabel2 + .switch-text');
    var servoHeader = document.querySelector('.servobutton__header');
    const imagee = document.querySelector('.servobutton__img');
    const image = document.querySelector('.pumpbutton__img');
    var servoHeaderr = document.getElementById('servoHeaderr');
    var autoPara = document.getElementById('autoPara');
    var autoHeaderr = document.getElementById('autoHeaderr');
    var servoPara = document.getElementById('servoPara');
    var pumpHeaderr = document.getElementById('pumpHeaderr');
    var pumpPara = document.getElementById('pumpPara');
      if (autoModeValue === true || autoModeValue === 'true') {
        document.getElementById("autoSwitch").checked = true;
        autoSwitch1.checked = false;
        autoSwitch2.checked = false;
        autoSwitch1.disabled = true;
        autoSwitch2.disabled = true;
        servoHeader.classList.remove('activated');
        image.classList.remove('move-up');
        imagee.classList.remove('rotate');
        autoHeaderr.style.color = '#f5fbff';
        autoPara.style.color = '#218cf6';
        servoHeaderr.style.color = '#657d95';
        servoPara.style.color = '#657d95';
        pumpHeaderr.style.color = '#657d95';
        pumpPara.style.color = '#657d95';
        valueServo.set(false);
        valuePump.set(false);
      } else {
        document.getElementById("autoSwitch").checked = false;
        autoHeaderr.style.color = '#657d95';
        autoPara.style.color = '#657d95';
      }
  });

  document.getElementById("autoSwitch").addEventListener('change', function() {
    if (this.checked) {
        valueAuto.set(true);
        autoHeaderr.style.color = '#f5fbff';
        autoPara.style.color = '#218cf6';
    } else {
        valueAuto.set(false);
        autopara.style.color = '#657d95';
    }
});

valueServo.on('value', snap => {
    const servoValue = snap.val();
    document.getElementById("Servo").innerHTML = servoValue;

    var autoSwitch1 = document.getElementById('autoSwitch1');
    var servoHeader = document.querySelector('.servobutton__header');
    const imagee = document.querySelector('.servobutton__img');
    var servoHeaderr = document.getElementById('servoHeaderr');
    var servoPara = document.getElementById('servoPara');
    if (servoValue === true || servoValue === 'true') {
      document.getElementById("autoSwitch1").checked = true;
      autoSwitch1.checked = true;
      servoHeader.classList.add('activated');
      imagee.classList.add('rotate');
      servoHeaderr.style.color = '#f5fbff';
      servoPara.style.color = '#218cf6';
    } else {
        document.getElementById("autoSwitch1").checked = false;
        servoHeaderr.style.color = '#657d95';
        servoPara.style.color = '#657d95';
        imagee.classList.remove('rotate');
    }
});

document.getElementById("autoSwitch1").addEventListener('change', function() {
  if (this.checked) {
      valueServo.set(true);
      servoHeaderr.style.color = '#f5fbff';
      servoPara.style.color = '#218cf6';
  } else {
      valueServo.set(false);
      servoHeaderr.style.color = '#657d95';
      servoPara.style.color = '#657d95';
  }
});

valuePump.on('value', snap => {
  const pumpValue = snap.val();
  document.getElementById("Pump").innerHTML = pumpValue;

  var autoSwitch2 = document.getElementById('autoSwitch2');
  var pumpHeader = document.querySelector('.pumpbutton__header');
  const imagee = document.querySelector('.pumpbutton__img');
  var pumpHeaderr = document.getElementById('pumpHeaderr');
  var pumpPara = document.getElementById('pumpPara');
  if (pumpValue === true || pumpValue === 'true') {
    document.getElementById("autoSwitch2").checked = true;
    autoSwitch2.checked = true;
    pumpHeader.classList.add('activated');
    imagee.classList.add('move-up')
    pumpHeaderr.style.color = '#f5fbff';
    pumpPara.style.color = '#218cf6';
  } else {
      document.getElementById("autoSwitch2").checked = false;
      pumpHeaderr.style.color = '#657d95';
      pumpPara.style.color = '#657d95';
      imagee.classList.remove('move-up');
  }
});

document.getElementById("autoSwitch2").addEventListener('change', function() {
if (this.checked) {
    valuePump.set(true);
    pumpHeaderr.style.color = '#f5fbff';
    pumpPara.style.color = '#218cf6';
} else {
    valuePump.set(false);
    pumpHeaderr.style.color = '#657d95';
    pumpPara.style.color = '#657d95';
}
});

  document.getElementById('autoSwitch').addEventListener('change', function() {
    var autoButtonBody = document.querySelector('.autobutton__body');
    if (this.checked) {
        autoButtonBody.classList.add('activated');
    } else {
        autoButtonBody.classList.remove('activated');
    }
});

document.getElementById('autoSwitch1').addEventListener('change', function() {
  var servoButtonBody = document.querySelector('.servobutton__body');
  if (this.checked) {
      servoButtonBody.classList.add('activated');
  } else {
      servoButtonBody.classList.remove('activated');
  }
});

document.getElementById('autoSwitch2').addEventListener('change', function() {
  var pumpButtonBody = document.querySelector('.pumpbutton__body');
  if (this.checked) {
      pumpButtonBody.classList.add('activated');
  } else {
      pumpButtonBody.classList.remove('activated');
  }
});

document.getElementById('autoSwitch').addEventListener('change', function() {
  var autoSwitch1 = document.getElementById('autoSwitch1');
  var autoSwitch2 = document.getElementById('autoSwitch2');
  var switchText1 = document.querySelector('#autoSwitchLabel1 + .switch-text');
  var switchText2 = document.querySelector('#autoSwitchLabel2 + .switch-text');
  var servoHeader = document.querySelector('.servobutton__header');
  const imagee = document.querySelector('.servobutton__img');
  const image = document.querySelector('.pumpbutton__img');
  var servoHeaderr = document.getElementById('servoHeaderr');
  var servoPara = document.getElementById('servoPara');
  var pumpHeaderr = document.getElementById('pumpHeaderr');
  var pumpPara = document.getElementById('pumpPara');
  if (this.checked) {
    autoSwitch1.checked = false;
    autoSwitch2.checked = false;
    autoSwitch1.disabled = true;
    autoSwitch2.disabled = true;
    servoHeader.classList.remove('activated');
    image.classList.remove('move-up');
    imagee.classList.remove('rotate');
    servoHeaderr.style.color = '#657d95';
    servoPara.style.color = '#657d95';
    pumpHeaderr.style.color = '#657d95';
    pumpPara.style.color = '#657d95';
  } else {
      autoSwitch1.disabled = false;
      autoSwitch2.disabled = false;
  }
});

document.getElementById('loginBtn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('loginModal').style.display = 'flex';
  document.getElementById('regisBtn1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginModal1').style.display = 'flex';
  });

  document.getElementById('loginBtn1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal1').style.display = 'none';
    document.getElementById('loginModal').style.display = 'flex';
  });

  document.getElementById('backBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').style.display = 'none';
  });

  document.getElementById('backBtn1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal1').style.display = 'none';
  });
});

document.getElementById('regisBtn').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('loginModal1').style.display = 'flex';
  document.getElementById('loginBtn1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal1').style.display = 'none';
    document.getElementById('loginModal').style.display = 'flex';
  });

  document.getElementById('regisBtn1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('loginModal1').style.display = 'flex';
  });

  document.getElementById('backBtn1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal1').style.display = 'none';
  });

  document.getElementById('backBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').style.display = 'none';
  });
});

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = currentTime;
}

// Clock 2
function updateClock1() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock1').textContent = currentTime;
}

// Clock 1
setInterval(updateClock, 1000);
updateClock(); 
// Clock 2
setInterval(updateClock1, 1000);
updateClock1(); 

document.getElementById('autoSwitch2').addEventListener('change', function() {
  const image = document.querySelector('.pumpbutton__img');
  if (this.checked) {
    image.classList.add('move-up');
    pumpHeaderr.style.color = '#f5fbff';
    pumpPara.style.color = '#218cf6';
  } else {
    image.classList.remove('move-up');
    pumpHeaderr.style.color = '#657d95';
    pumpPara.style.color = '#657d95';
    
  }
});

document.getElementById('autoSwitch1').addEventListener('change', function() {
  const imagee = document.querySelector('.servobutton__img');
  if (this.checked) {
    imagee.classList.add('rotate');
    servoHeaderr.style.color = '#f5fbff';
    servoPara.style.color = '#218cf6';
  } else {
    imagee.classList.remove('rotate');
    servoHeaderr.style.color = '#657d95';
    servoPara.style.color = '#657d95';
  }
});

function checkTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Update clock display
  var clock = document.getElementById('clock');
  clock.textContent = now.toLocaleTimeString();

  // Check if it's 00:45
  if (hours === 0 && minutes === 52) {
      document.getElementById('autoSwitch').checked = true;
      var autoSwitch11 = document.getElementById('autoSwitch1');
      var autoSwitch22 = document.getElementById('autoSwitch2');
      var switchText11 = document.querySelector('#autoSwitchLabel1 + .switch-text');
      var switchText22 = document.querySelector('#autoSwitchLabel2 + .switch-text');
      var servoHeaderr = document.querySelector('.servobutton__header');
      const imageee = document.querySelector('.servobutton__img');
      const imagee = document.querySelector('.pumpbutton__img');
      var servoHeaderrr = document.getElementById('servoHeaderr');
      var servoParaa = document.getElementById('servoPara');
      var pumpHeaderrr = document.getElementById('pumpHeaderr');
      var pumpParaa = document.getElementById('pumpPara');
    
      autoSwitch11.checked = false;
      autoSwitch22.checked = false;
      autoSwitch11.disabled = true;
      autoSwitch22.disabled = true;
      servoHeaderr.classList.remove('activated');
      imagee.classList.remove('move-up');
      imageee.classList.remove('rotate');
      servoHeaderrr.style.color = '#657d95';
      servoParaa.style.color = '#657d95';
      pumpHeaderrr.style.color = '#657d95';
      pumpParaa.style.color = '#657d95';
}
}
// Run checkTime every minute
setInterval(checkTime, 1000);

// Initial call to display the clock immediately
checkTime();

var mailChuan= "hoanhtuan23082003@gmail.com";
var passChuan = "2320812";
function checkform() {
var emailInput = document.querySelector('.email__input').value;
var passwordInput = document.querySelector('.mk__input').value;
if (emailInput === mailChuan && passwordInput === passChuan) {
  document.getElementById('loginModal').style.display = 'none';
} else { 
  alert("Email hoặc mật khẩu không đúng!");}
}








