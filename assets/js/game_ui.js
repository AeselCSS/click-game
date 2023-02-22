const points = 10;
const civilCasualties = 10;
const alienInvasion = false;

function scoreInit () {
  // initiate scoreboard
  document.querySelector("#points").innerHTML = `${points}`;
}

function timeInit () {
  // initiate timer
  document.querySelector("#time").innerHTML = `${time}`;
}