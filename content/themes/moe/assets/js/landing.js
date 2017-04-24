/**
 * DEBUG STUFF
 */


/*
List of classes triggers to use....
$(".loading-screen").addClass("section-loaded");
$(".title-slice").addClass("opened-slices");
$(".video-container").addClass("display-video");

*/

$(window).load(function(){
    $(".loading-screen").addClass("section-loaded");
});


$(document).ready(function(){

if(window.location.pathname == "/landing/") {    

    if(sessionStorage.getItem('introSkip') == "YES" ){

        //jump straight into the main site.
        window.location = "/";


    }else{

        playLandingVideo();

        $(document).on("click", ".start-wrapper", function(e){
            e.preventDefault();
            //pseudo cookies
            sessionStorage.setItem('introSkip', 'YES');
            $(".loading-screen").removeClass("section-loaded");
            window.location = "/";
        });


    }

}


//other functions

function playLandingVideo() {
    var video = document.getElementById('landing-bg');
    var source = document.createElement('source');

    source.setAttribute('src', '/assets/video/hispeed.webm');
    source.setAttribute('type', 'video/webm');

    video.appendChild(source);

    video.addEventListener("canplaythrough",function(){
        video.play();
        $(".title-slice").addClass("opened-slices");
        $(".video-container").addClass("display-video");


        this.removeEventListener("canplaythrough",this,false);
    });

    //video.play();


}



});

/*
(function(){

if(window.location.pathname == "/landing/") {




    $(document).ready(function(){
    console.log("Trigger 1");
    $(".title-slice").addClass("opened-slices");

    });

    $(document).ready(function(){
    console.log("Trigger 2");
    $(".video-container").addClass("display-video");
    });






}else{
    console.log("we are not located at the landing page, therefore we dont do anything...");
}

console.log("lets avoid js files clashing by loading the landing in an external file shall we?... ");

})();

*/


