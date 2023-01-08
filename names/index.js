const peoplesNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peoplesNames) => {
  return getFirstNames(peoplesNames);
};

module.exports = getPeopleInCity;
