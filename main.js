const APIKey = 'AIzaSyAPO3YqWBmK8YyA_RexEILgeZt3rONy0dM';
const Userid = 'UCZZ3hwtaMbZlseGOQe0v_aQ';
const subscriberCount= document.getElementById('subscriberCount');
const viewCount = document.getElementById('viewCount');
const videoCount = document.getElementById('videoCount');



let getdata = () => {

    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        subscriberCount.innerHTML = `${data["items"][0].statistics.subscriberCount} Subscruber`
        videoCount.innerHTML = `${data["items"][0].statistics.videoCount} Video`
    })

}

getdata();
// How to make your personal soc
// Create a sub domain for your 
// HOW TO CHECK IF THE USER IS 
// Create Product Card Design by
// Create Social Media Viewer By
// Create Age Calculator Using h
// HOW TO ADD FONT AWESOME LINK 
