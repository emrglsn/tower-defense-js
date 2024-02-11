function nextWave() {
  const waveButton = document.getElementById("waveButton");
  waveButton.addEventListener("click", () => {
    const wave = setWaveType(waveIndex)
    for (let e = 0; e < wave.length; e++) {
      // const xOffset = e * 150;
      const enemyType = findEnemyType(wave[e]);
      setTimeout(() => {
        enemies.push(
          new Enemy(
            { x: States.waypoints[0].x, y: States.waypoints[0].y },
            enemyType,
            waveIndex + 1
          )
        );
      }, e * 450);
    }

    waveIndex++;
    waveButton.innerText = "Next Wave " + (waveIndex + 1);
  });
}
