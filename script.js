 $(document).ready(function () {

    //Setting the variable for day and time format

    let todayDateTime = moment().format('MMMM Do YYYY, h:mm:ss a');

    $("#todayDay").text(todayDateTime);

    
    $(".save").on("click", function () {
        var dateTime = $(this).attr("date-time");
        
        var value = $(`#${dateTime}`).val();
        
        var dTime = {
            time:dateTime,
            data:value,
        };
        localStorage.setItem(dateTime,value);

        
        console.log("value:${value} time:${dateTime}");
    });


    console.log(localStorage.getItem("9"));

    $("#9","#10","#11","#12","#13","#14","#15","#16","#17")
    .val(localStorage.getItem("9","10","11","12","13","14","15","16","17"));
    
    

    var currentTime = moment().hours()
    $(".input").each(function () {
        var blockTime = parseInt($(this).attr("id"));
        console.log(blockTime, currentTime);
        if (blockTime < currentTime) {
            $(this).addClass("past");
            $(`#btn-${blockTime}`).addClass("btn"); 
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(`#btn-${blockTime}`).addClass("btn"); 
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            $(`#btn-${blockTime}`).addClass("btn"); 
        };
    });
});