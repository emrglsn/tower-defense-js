const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.height = 720;
canvas.width = 720 * 1.5;
const enemies = [];
var waveIndex = 0;
const placementTiles = [];
const mouse = {
  x: undefined,
  y: undefined,
};
var activeTile = null;
const buildings = [];
var currentBuildingType = null;
var activeTower = null;
var towerinfo = false;
var hearts = 10;
var coins = 0;

var autowave = false;

const coinsDiv = document.getElementById("coins");
const heartsDiv = document.getElementById("hearts");
coinsDiv.innerText = coins;
heartsDiv.innerText = hearts;
var soundActive = true;
const background = new Background();

nextWave();
adjustPlacementTiles();

function animate() {
  const gameAnimation = requestAnimationFrame(animate);
  background.draw();
  autoWaveController();
  placementTilesController();
  buildingOP();
  enemyHealthController();
  const GO = gameoverController();
  if (GO) {
    cancelAnimationFrame(gameAnimation);
  }
}

canvasclick();
animate();
mousemove();
