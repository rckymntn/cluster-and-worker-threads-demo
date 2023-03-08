const express = require("express");

class NoClusterNoWorkerThreads {

    constructor() {
        const port = 8080;
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

        app.listen(port, () => {
            console.log(`Process ${process.pid} listening on port ${port}.`);
        });
    }
}

const noClusterNoWorkerThreads = new NoClusterNoWorkerThreads();

module.exports = { NoClusterNoWorkerThreads };