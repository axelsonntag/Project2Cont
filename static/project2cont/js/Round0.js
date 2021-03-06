var sequences_0 = ["atdpsiwrar","dyshafudak","yavaksvnsm","vhgqgqakwf","dmjlazjena","aimrodkuap","rssgragaza","dakhzwxpgo","tnrabmcfob","rtqonabnva","laaaaxzpcx","fawykauoyp","wxsrcqaaqa","abankaqaeb","dptxbeivua","iranbgtadl","uxcyvabfro","hjanyeqphq","nierfauala","paqzfwdran","alsiaauhkh","patpaizgnj","allsfdhogg","apanslapij","afvaepchfp","htuaqaatai","vaxvyhafpa","vqaobwyfan","wtjaaekysg","qaaghrzbhu"];
var solutions_0 = [2,2,2,1,2,2,3,1,1,2,4,2,3,4,1,2,1,1,3,2,3,2,1,3,2,4,3,2,2,2];
var length_0 = solutions_0.length;

var me = me || {};
me.index = null;
me.guess = null;
me.timer = null;
me.pad = null;
me.settime = null;
me.resettime = null;
me.check = null;
me.makeguess = null;

me.pad = function(val) {
    return val > 9 ? val : "0" + val;
}

me.settime = function() {
    me.sec = 0;
    me.timer = setInterval(function () {
        document.getElementById("sec").innerHTML = me.pad(++me.sec % 60);
        document.getElementById("min").innerHTML = me.pad(parseInt(me.sec / 60, 10));
        }, 1000)
}

me.resettime = function(){
    clearInterval(me.timer);
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";

    me.sec = 0;
    me.timer = setInterval(function () {
        document.getElementById("sec").innerHTML = me.pad(++me.sec % 60);
        document.getElementById("min").innerHTML = me.pad(parseInt(me.sec / 60, 10));
        }, 1000)
}

me.check = function(x) {
    document.getElementById("player_guess").value = "";

    var el = document.createElement("input")
    el.type = "hidden";
    if (me.index+1 < 10){
        el.name = "t00" + (me.index+1);
    } else{
        el.name = "t0" + (me.index+1);
    }
    el.value = document.getElementById("min").innerHTML + ":" + document.getElementById("sec").innerHTML;
    el.id = el.name

    var answers = document.getElementById("id_output0");
    answers.appendChild(el);

    if (x === solutions_0[me.index]) {
        me.makeguess(me.index+1);
        me.resettime();
    } else {
        me.makeguess(me.index);
    }
}

me.makeguess = function(x) {
    if (x >= length_0) {
        me.index = x;
        document.getElementById("id_output0").setAttribute("value",me.index);
        
        var pattern = document.getElementsByClassName("jumbotron")[0];
        pattern.classList.add("hidden");
        var next = document.getElementsByClassName("next-button");
        next[0].classList.remove("hidden");
    } else {
        me.index = x;

        var string = document.getElementById("string");
        string.innerHTML = sequences_0[x];

        document.getElementById("id_output0").setAttribute("value",me.index);
    }
}

function keyDownTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
    var wert = document.getElementById("player_guess").value;
    me.guess = parseInt(wert);
    me.check(me.guess);
    }
}

function keyUpTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}

function keyPressTextField(e) {
  var keyCode = e.keyCode;
  if(keyCode==13) {
    event.preventDefault();
  }
}

window.onload = function(){
    me.makeguess(0);
    me.settime();
    document.addEventListener("keydown", keyDownTextField, false);
    document.addEventListener("keyup", keyUpTextField, false);
    document.addEventListener("keypress", keyPressTextField, false);
    var next = document.getElementsByClassName("next-button");
    next[0].classList.add("hidden");
}