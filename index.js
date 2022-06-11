const log = console.log
$(document).ready(function () {
    $('button').on('click',function(){
        let name = $('input').first().val()
        let char = $('input').eq(1).val()
        let adverb = $('input').eq(2).val()
        let adjective = $('input').last().val()
       $('#column3').append(
        `<p>
        One day, my friend <span>${name}</span> was visiting New York and ran\n
        into <span>${char}</span>.<span>${name}</span> ran <span>${adverb}</span> to meet <span>${char}</span>.But\n
        <span>${char}</span> turned out to be very <span>${adjective}</span> and <span>${char}</span> did not\n
        enjoy the meeting.
    </p>`
       )
       let css = 
       $('#column3').css("border", "5px solid black");
       $('#column3').css("display", "flex");
       $('#column3').css("justify-content", "center");
       $('#column3').css("align-items", "center");
       $('#column3').css("padding", "20px");
       $('#column3').css("margin", "0 20px");
       $('#column3').css("width", "60%");
       $('#column3').css("height", "40%");
       $('#column3').css("font", "60px");

       $('span').css("color", "green");
    })
});
