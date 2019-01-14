
var t = new Date();
var year = t.getFullYear();
var m = t.getMonth();
var day = t.getDate();
var hour = t.getHours();
var min = t.getMinutes();
var sec = t.getSeconds();

//this function will make sure that we always have 2 digits.
function format(number){
    var formatedNum=("0"+number).slice(-2);
    return formatedNum;
}

day=format(day);
hour=format(hour);
min=format(min);
sec=format(sec);

switch (m){
    case 0:
        var month="Jan";
        break;
    case 0:
        var month="Feb";
        break;
    case 0:
        var month="Mar";
        break;
    case 0:
        var month="Apr";
        break;
    case 0:
        var month="May";
        break;
    case 0:
        var month="June";
        break;
    case 0:
        var month="Jul";
        break;
    case 0:
        var month="Aug";
        break;
    case 0:
        var month="Sept";
        break;
    case 0:
        var month="Oct";
        break;
    case 0:
        var month="Nov";
        break;
    case 0:
        var month="Dec";
        break;
}
var time = function () {    
    alert(month+' '+day+' '+year+'  '+hour+':'+min+':'+sec);
    console.log(month+' '+day+' '+year+'  '+hour+':'+min+':'+sec);
}