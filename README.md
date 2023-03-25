# Cluster and Worker Threads Demo

A small project to trial and demo the performance variance between three different implementations of the same simple web server. Uses JavaScript, [express](https://www.npmjs.com/package/express), and [loadtest](https://www.npmjs.com/package/loadtest).

## Results

## Methodology

### Tasks 
There are two tasks that each implementation of this web server can perform: 
1. A "short" task and
2. A "long" task

### Implementation One (`NoClusterNoWorkerThreads.js`):
- Does not use cluster and does not use worker threads. 

### Implementation Two (`YesClusterNoWorkerThreads.js`):
- Uses cluster but does not use worker threads.

### Implementation Three (`YesClusterYesWorkerThreads.js`, `worker.js`):
- Uses cluster and worker threads.
- Creates a worker _only_ for the long task. 

### Request Simulation 
- Uses [loadtest](https://www.npmjs.com/package/loadtest) to simulate requests.

## Motivation 

I was curious about the variance in performance for the different implementations. 