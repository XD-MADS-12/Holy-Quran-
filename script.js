const API_KEY = 'AIzaSyCSaVwvthRWkgKfbnr5t7AK8sDv7ia_jm8'; // Your YouTube API Key
const CHANNEL_ID = 'UCvMfE7iLpU4kFnQ1avkWzcg'; // Channel ID (Shamsul Haque)

const videoContainer = document.getElementById('videoContainer');

// Fetch YouTube videos from the given channel
async function fetchVideos() {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
    );
    const data = await response.json();

    // Loop through each video item and create the video card
    data.items.forEach((item) => {
        if (item.id.kind === "youtube#video") {
            const videoId = item.id.videoId;
            const videoTitle = item.snippet.title;

            // Create a video card element
            const videoElement = document.createElement('div');
            videoElement.classList.add('video');
            videoElement.innerHTML = `
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/${videoId}" 
                    title="${videoTitle}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <h3>${videoTitle}</h3>
            `;
            videoContainer.appendChild(videoElement);
        }
    });
}

// Call the fetch function
fetchVideos();
