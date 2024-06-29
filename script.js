



function countDown(time) {
    // Get the HTML element where the countdown will be displayed
    const countdownElement = document.getElementById('countdown');

    
    const timer = () => {
        // Calculate minutes and seconds from the remaining time
        const min = String(Math.trunc(time / 60)).padStart(2, '0');
        const sec = String(Math.trunc(time % 60)).padStart(2, '0');

        // Update the countdown display with the current time
        countdownElement.textContent = `${min}:${sec}`;

        // Check if the countdown has reached zero
        if (time === 0) {
            // If countdown is zero, clear the interval and update text
            clearInterval(intervalId);
            countdownElement.textContent = "Click to re-send otp";
        }

        // Decrement the remaining time for the next iteration
        time--;
    };

    // Initial call to the timer function to start the countdown immediately
    timer();

    // Set interval to update the timer every second (1000 milliseconds)
    const intervalId = setInterval(timer, 1000);
}

// Start the countdown with an initial time of 10 seconds
countDown(10);
