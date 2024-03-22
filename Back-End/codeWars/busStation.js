var number = function (busStops) {
  // Good Luck!
  let totalPeople = 0;

  for (let i = 0; i < busStops.length; i++) {
    //
    const [getOn, getOff] = busStops[i];
    totalPeople += getOn;
    totalPeople -= getOff;
    //
    if (totalPeople < 0) {
      totalPeople = 0;
    }
  }
  return totalPeople;
};
console.log(number([[10,0],[3,5],[5,8]]))