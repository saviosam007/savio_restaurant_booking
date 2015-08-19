/**
 * Created by SavioJoseph on 4/18/2015.
 */
function zoom() {
    document.body.style.zoom = "300%"
}
function logo() {
    var logo1=$('<img class="logostyle" src="https://cloud.githubusercontent.com/assets/10212404/7468980/5699ff6e-f2c3-11e4-952a-12be7f161b3f.jpg"/>');
    //var load = $("<div class='loading'></div>");
    //var name = $("<h2>Loading....</h2>");
    //load.append(name);

//var logo1=$("<p>hey savio hwu</p>");
    $(".logo").append(logo1);
    console.log("hello");
    //document.body.style.zoom = "75%"

}

function validateForm()
{
    var uname=document.getElementById("login");
    var pwd=document.getElementById("password");
    //console.log(uname.value)
    console.log(uname.value);
    console.log(pwd.value);
    if(uname.value==='admin' && pwd.value==="admin123")
    {
        alert("login successfull");
        window.location="success.html";
        return false;
    }
    else if(uname.value !=='admin')
    {
        alert("enter correct username");
        uname.focus();
        return false;
    }
    else
    {
        alert("enter correct password");
        pwd.focus();
        return false;

    }
}

function codeForm(){
    var codeval=document.getElementById("confirm");
    //alert(codeval.value);
    if(codeval.value==='#BID124'||codeval.value==='#BID672'||codeval.value==='#BID526'||codeval.value==='#BID286'||codeval.value==='#BID429')
    {
        //console.log($(".footer"))
        $("#code1").delay(1000).slideUp(1000);
        $("#confirm").delay(1000).slideUp(1000);
        $(".btn").delay(1000).slideUp(1000);
        var edit = $("<p class='login-submit1'><button type='submit' class='btn' onclick='edit()'>Edit booking</button></p>");
        var cancel = $("<p class='login-submit2'><button type='submit' class='btn' onclick='cancel()'>Cancel booking</button>");
        $("#footer").append(edit).hide().delay(2000).slideDown(2000);
        $("#footer").append(cancel).hide().delay(2000).slideDown(2000);
        return false;
    }

    else
    {
        alert("Wrong Confirmation code");
        codeval.focus();
        return false;
    }
}
function edit(){
    window.location="editmode.html";
}
function cancel(){
    var codeval=document.getElementById("confirm");
    $("#sav").hide();
    $(".login-submit1").hide();
    $(".login-submit2").hide();
    var table=$("<table id='tableone' style='width: 250px' border='2'><tr><td>code</td><td>Status</td></tr><tr><td>"+codeval.value+"</td><td>Cancelled</td></tr>")
    var submitval=$("<p class='login-submit2' style='top:112px'><button type='submit' class='btn' onclick='window.print()' return false>print confirmation</button>")

//    window.location="cancelmode.html";
    $("#footer").append(table);
    $("#footer").append(submitval).hide().delay(10).slideRight(10);
}

function editmodeForm(){

    var time1 =document.getElementById("time")
    var date1=document.getElementById("date")
    var size1 =document.getElementById("size")
    //console.dir(time.value);
    $("#hideform").hide();
    var table=$("<table id='tableone' border='2'><tr><td>time</td><td>date</td><td>size</td><td>Status</td></tr><tr><td>"+time1.value+"pm</td><td>"+date1.value+"</td><td>"+size1.value+"</td><td>Booked</td></tr>")
    var submitval=$("<p class='login-submit2' style='top:112px'><button type='submit' class='btn' onclick='window.print()' return false>print confirmation</button>")
    $("#footer").append(table).hide().delay(100).slideDown(100);
    //  var cancel = $("<p class='login-submit2'><button type='submit' class='btn' onclick='cancel()'>Cancel booking</button>");
    $("#footer").append(submitval).hide().delay(2000).slideDown(2000);
    // $("#footer").append(cancel).hide().delay(2000).slideDown(2000);
    return false;

}
function bookForm(){
    var codeval="#BID"+Math.floor(Math.random()*1E3);
    var status=["waiting","booked"]
    var status1=status[Math.floor(Math.random()*status.length)];
    if(status1==="waiting")
    {
        alert("Status is in waiting Please confirm");
    }
    //alert(status1);
    $("#hideform1").hide();
    console.log("reached");
    // $(".login-submit1").hide();
    //$(".login-submit2").hide();
    var table=$("<table id='tableone' style='width: 250px' border='2'><tr><td>code</td><td>Status</td></tr><tr><td>"+codeval+"</td><td>Booked</td></tr>");
    var submitval=$("<p class='login-submit2' style='top:112px'><button type='submit' class='btn' onclick='window.print()' return false>print confirmation</button>");

//    window.location="cancelmode.html";
    $("#footer").append(table);
    $("#footer").append(submitval).hide().delay(10).slideDown(10);
    return false;
}
