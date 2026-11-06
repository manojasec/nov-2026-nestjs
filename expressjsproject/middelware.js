

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now());
  next();
};
 

module.exports = timeLog;