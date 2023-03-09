const express = require("express");
const cluster = require("cluster");
const {Worker} = require("worker_threads");
const os = require("os");

class YesClusterYesWorkerThreads {
    constructor() {
        const port = 8082;
        const app = express();
        
        app.get("/long", (req, res) => {    
            const worker = new Worker(__dirname + "/worker.js", {
                workerData: {
        
                }
            });
            res.send(`Long complete by process ${process.pid}.`);
        });
        
        app.get("/short", (req, res) => {
            for (let i = 0; i < 10; i++) {
        
            }
            res.send(`Short complete by process ${process.pid}.`);
        });
        
        if (cluster.isMaster) {
            for (let i = 0; i < os.cpus().length; i++) {
                cluster.fork();
            }
            cluster.on("exit", (worker) => {
                console.log(`Process ${worker.process.pid} exit.`);
                cluster.fork();
            });
        } else {
            app.listen(port, () => {
                console.log(`Process ${process.pid} listening on port ${port}.`);
            });
        }
    }
}

const yesClusterYesWorkerThreads = new YesClusterYesWorkerThreads();

module.exports = { YesClusterYesWorkerThreads };