const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }

  return members.filter(item => typeof item === "string").flatMap(item => item.trim().toUpperCase()[0]).sort().join("");
};
