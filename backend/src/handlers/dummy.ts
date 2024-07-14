import {Handler} from "express";

const { dummyProcess: serviceDummyProcess } = require('../services/dummy');


const dummyProcess = async (req:any, res:any, next:any) => {
    console.log(process.env.BACKEND_PORT)
    try {
        console.log("executing dummy process in handler")
        await serviceDummyProcess();
        res.send("this is dummy!")
    } catch (error) {
        next(error);
    }
};


const dummyHandlers: Record<string, Handler> = {};


dummyHandlers.dummyProcess = dummyProcess;

module.exports = dummyHandlers;
// Implement other handler functions for user actions
