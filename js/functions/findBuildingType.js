function findBuildingType(type) {
    if (type === "1") {
      return buildingTypes.tower01;
    } else if (type === "2") {
      return buildingTypes.tower02;
    } else if (type === "3") {
      return buildingTypes.tower03;
    } else if (type === "4") {
      return buildingTypes.tower04;
    } else if (type === "5") {
      return buildingTypes.tower05;
    } else {
      return null;
    }
  }