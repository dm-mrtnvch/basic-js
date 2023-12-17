const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOGARITHMIC_DECOY_CONSTANT = Math.log(2)
const DECOY_RATE_PER_YEAR = LOGARITHMIC_DECOY_CONSTANT / HALF_LIFE_PERIOD

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sampleActivityValidations = {
    isString: typeof sampleActivity === 'string',
    isNumber: !isNaN(parseFloat(sampleActivity)),
    isPositive: parseFloat(sampleActivity) > 0,
    isLessThanModernActivity: parseFloat(sampleActivity) < MODERN_ACTIVITY
  }

  for (let validation in sampleActivityValidations) {
    if (!sampleActivityValidations[validation]) return false
  }

  const activityRation = Math.log(MODERN_ACTIVITY / Number(sampleActivity))
  const age = activityRation / DECOY_RATE_PER_YEAR
  return Math.ceil(age)
}

module.exports = {
  dateSample
};
