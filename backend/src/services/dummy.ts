const { dummyProcess: repoDummyProcess } = require('../repositories/dummy');

exports.dummyProcess = async () => {
    console.log("executing dummy process in service")
    await repoDummyProcess();
    return
};