const EARTH_GRAVITY = 9.8;

const countWeightOnEarthNotPureFunction = (mass) => {
    return `${mass * EARTH_GRAVITY}N`;
}

const countWeightOnEarthPureFunction = (mass) => {
    const EARTH_GRAVITY = 9.8;
    return `${EARTH_GRAVITY * mass}N`
}