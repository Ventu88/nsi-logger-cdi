require("dotenv").config();
const util = require("util");
const oracle = require("nsi-oracle-lib");

const callTwoParamProcedure = util.promisify(oracle.callTwoParamProcedure);

function logInfo(source, message) {
    logSomething(
        source,
        `INFO: ${message}`
    );
}

function logWarning(source, message) {
    logSomething(
        source,
        `WARNING: ${message}`
    );
}

function logError(source, message) {
    logSomething(
        source,
        `ERROR: ${message}`
    );
}

function logSomething(source, message) {
    callTwoParamProcedure(process.env.LOG_PROCEDURE, source, message)
        .then(null)
        .catch((err) => console.log(`Il log non funziona: ${err.message}`))
}

module.exports.logInfo = logInfo;
module.exports.logWarning = logWarning;
module.exports.logError = logError;