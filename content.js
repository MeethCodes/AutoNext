// content.js
console.log('Auto Next: Script loaded and initialized. Now listening for postMessage events.');

// Function to find and click the next episode link
function clickNextEpisode() {
    console.log('Auto Next: Attempting to find and click the next episode.');
    const activeEpisode = document.querySelector('.eps-item.active');

    if (activeEpisode) {
        console.log('Auto Next: Found active episode link.');
        const currentLi = activeEpisode.closest('.nav-item');
        if (currentLi) {
            console.log('Auto Next: Found current episode list item.');
            const nextLi = currentLi.nextElementSibling;
            if (nextLi) {
                console.log('Auto Next: Found next episode list item.');
                const nextEpisodeLink = nextLi.querySelector('a.eps-item');
                if (nextEpisodeLink) {
                    nextEpisodeLink.click();
                    console.log('Auto Next: Successfully clicked the next episode link!');
                } else {
                    console.log('Auto Next: ERROR - Next episode link not found. End of season reached.');
                }
            } else {
                console.log('Auto Next: No next list item found. End of season reached.');
            }
        } else {
            console.log('Auto Next: ERROR - Parent list item not found for active episode.');
        }
    } else {
        console.log('Auto Next: ERROR - No active episode found. The script might be on the wrong page.');
    }
}

// State variables to prevent accidental double-triggers
let lastTriggeredAt = 0;
const COOLDOWN_PERIOD = 5000; // 5 seconds cooldown

function triggerNextEpisode() {
    const now = Date.now();
    // Check if enough time has passed since the last trigger
    if (now - lastTriggeredAt < COOLDOWN_PERIOD) {
        console.log('Auto Next: Trigger suppressed due to cooldown period.');
        return;
    }
    lastTriggeredAt = now;
    clickNextEpisode();
}

// Main logic: listen for messages from the iframe
window.addEventListener('message', (event) => {
    // A quick check to see if the event comes from our iframe
    const iframe = document.getElementById('iframe-embed');
    if (iframe && event.source !== iframe.contentWindow) {
        // Log a message if the message is from an unexpected source
        console.log('Auto Next: Message received from unexpected source:', event.source);
        return;
    }

    console.log('Auto Next: Received a message event from the iframe.');
    let messageData = event.data;

    // PostMessage can send data as strings or objects. We need to check both.
    if (typeof messageData === 'string') {
        messageData = messageData.toLowerCase();
        // Check for common keywords indicating the video has ended
        if (messageData.includes('ended') || messageData.includes('finished') || messageData.includes('complete')) {
            console.log('Auto Next: Detected video ended via string message:', messageData);
            triggerNextEpisode();
        }
    } else if (typeof messageData === 'object' && messageData !== null) {
        // Check for common keywords in object keys or values
        const strData = JSON.stringify(messageData).toLowerCase();
        if (strData.includes('ended') || strData.includes('finished') || strData.includes('complete')) {
            console.log('Auto Next: Detected video ended via object message:', messageData);
            triggerNextEpisode();
        }
    }
});

// Guide to get started
console.log('Auto Next: Play a video and monitor the console. If the video player sends a postMessage when it ends, the script will detect it.');