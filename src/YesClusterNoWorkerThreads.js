const express = require("express");
const cluster = require("cluster");
const os = require("os");

class YesClusterNoWorkerThreads {
    constructor() {
        const port = 8081;
        const app = express();

        app.get("/long", (req, res) => {    
            for (let i = 0; i < 1e10; i++) {

            }
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

const yesClusterNoWorkerThreads = new YesClusterNoWorkerThreads();

module.exports = { YesClusterNoWorkerThreads };