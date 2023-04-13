const worker_threads = require("worker_threads");

const long = () => {
    for (let i = 0; i < 1e5; i++) {
        console.log(i);
    }
}

long();