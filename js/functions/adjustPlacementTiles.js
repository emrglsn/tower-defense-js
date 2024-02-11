function adjustPlacementTiles() {
    const placementTiles2D = [];
    for (let i = 0; i < States.placementTilesData.length; i += 27) {
      placementTiles2D.push(States.placementTilesData.slice(i, i + 27));
    }
    placementTiles2D.forEach((row, y) => {
      row.forEach((symbol, x) => {
        if (symbol === 1191) {
          placementTiles.push(new PlacementTile({ x: x * 40, y: y * 40 }));
        }
      });
    });
  }