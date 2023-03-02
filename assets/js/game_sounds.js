
function playBackgroundMusic () {
    document.querySelector("#audio_game_theme").currentTime = 0;
    document.querySelector("#audio_game_theme").volume = 0.5;
    document.querySelector("#audio_game_theme").play();
}

function playClickElementSound (elementType) {
    document.querySelector("#audio_explosion").currentTime = 0;
    document.querySelector("#audio_explosion").volume = 0.2;
    document.querySelector("#audio_explosion").play();
    if (elementType === "enemy") {
        document.querySelector("#audio_yay").currentTime = 0;
        document.querySelector("#audio_yay").volume = 0.3;
        document.querySelector("#audio_yay").play();
    } else if (elementType === "civilian") {
        document.querySelector("#audio_oh_no").currentTime = 0;
        document.querySelector("#audio_oh_no").volume = 0.3;
        document.querySelector("#audio_oh_no").play();
    } else {
        console.log("Error: Unknown element type");
    }
}

let delayedUfoSound;

function delayedUfoSpawnSound () {
    delayedUfoSound = setTimeout(() => {
        playUfoSpawnedSound();
    }, 4500);
}

function clearDelayedUfoSpawnSound () {
    if (delayedUfoSound) {
    clearTimeout(delayedUfoSound);
    } else {
    console.log("Error: No delayed ufo sound to clear");
    }
}

function playUfoSpawnedSound () {
    document.querySelector("#audio_ufo").currentTime = 0;
    document.querySelector("#audio_ufo").volume = 0.3;
    document.querySelector("#audio_ufo").play();
}

function playTimesUpSound () {
    document.querySelector("#audio_times_up").currentTime = 0;
    document.querySelector("#audio_times_up").volume = 0.3;
    document.querySelector("#audio_times_up").play();
}

function playStartScreenSound () {
    document.querySelector("#audio_start_screen").currentTime = 0;
    document.querySelector("#audio_start_screen").volume = 0.3;
    document.querySelector("#audio_start_screen").play();
}

function playGameOverScreenSound () {
    document.querySelector("#audio_game_over").currentTime = 0;
    document.querySelector("#audio_game_over").volume = 0.5;
    document.querySelector("#audio_game_over").play();
}

function playLevelCompleteScreenSound () {
    document.querySelector("#audio_level_complete").currentTime = 0;
    document.querySelector("#audio_level_complete").volume = 0.5;
    document.querySelector("#audio_level_complete").play();
}

function stopNonGameScreenSounds () {
    document.querySelector("#audio_start_screen").pause();
    document.querySelector("#audio_start_screen").currentTime = 0;
    document.querySelector("#audio_game_over").pause();
    document.querySelector("#audio_game_over").currentTime = 0;
    document.querySelector("#audio_level_complete").pause();
    document.querySelector("#audio_level_complete").currentTime = 0;
}

function stopGameSounds () {
    clearDelayedUfoSpawnSound();
    document.querySelector("#audio_game_theme").pause();
    document.querySelector("#audio_game_theme").currentTime = 0;
    document.querySelector("#audio_explosion").pause();
    document.querySelector("#audio_explosion").currentTime = 0;
    document.querySelector("#audio_yay").pause();
    document.querySelector("#audio_yay").currentTime = 0;
    document.querySelector("#audio_oh_no").pause();
    document.querySelector("#audio_oh_no").currentTime = 0;
    document.querySelector("#audio_ufo").pause();
    document.querySelector("#audio_ufo").currentTime = 0;
    document.querySelector("#audio_times_up").pause();
    document.querySelector("#audio_times_up").currentTime = 0;
}

function stopScreenSounds () {
    document.querySelector("#audio_start_screen").pause();
    document.querySelector("#audio_start_screen").currentTime = 0;
    document.querySelector("#audio_game_over").pause();
    document.querySelector("#audio_game_over").currentTime = 0;
    document.querySelector("#audio_level_complete").pause();
    document.querySelector("#audio_level_complete").currentTime = 0;
}