$(function(){
    const skill = [
        {selector:(".html"),value:90},
        {selector:(".css"),value:90},
        {selector:(".js"),value:60},
        {selector:(".jq"),value:55},
        {selector:(".scss"),value:60},
        {selector:(".figma"),value:55}
    ]

    function getCircleSize() {
    const w = $(window).width();
    if (w <= 899) return 150;
    else if (w >= 900) return 200;
    else return 100 + ((w - 400) / (740 - 400)) * (200 - 100);
    }

    $("#skill_level").waypoint(function(){
        $("#skill_level").addClass("animated fadeIn");

        skill.forEach(function(skill){
            $(skill.selector).circleProgress({
                value: skill.value / 100,
                startAngle: 300,
                size: getCircleSize(),
                fill:{
                    color:["#C4A1FF"]
                },
                animation:{
                    duration:1500,
                    easing:"swing"
                },
                lineCap:"round",
                reverse:true
            }).on("circle-animation-progress",function(event,progress){
        $(this).find("strong").html(Math.round(skill.value * progress)+"<i>%</i>");
        });
        });
    },{
        offset:'30%'
    });
});