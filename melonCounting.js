function countMelons(melonList) {
    // Take in an array and return an object
    // of # of melons by melon type.

    const melonCounts = {};

    for (const melon of melonList) {
        if (melonCounts.hasOwnProperty(melon)) {
            melonCounts[melon] +=1;
        } else {
            melonCounts[melon] = 1;
        }
    }

    return melonCounts;
}