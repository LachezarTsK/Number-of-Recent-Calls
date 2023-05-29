
class RecentCounter {

    static HISTORY_SPAN_IN_MILLISECONDS = 3000;

    constructor() {
        //const {Queue} = require('@datastructures-js/queue');
        this.queuePings = new Queue();
    }

    /** 
     * @param {number} time
     * @return {number}
     */
    ping(time) {
        this.queuePings.enqueue(time);
        while (this.queuePings.front() < time - RecentCounter.HISTORY_SPAN_IN_MILLISECONDS) {
            this.queuePings.dequeue();
        }
        return  this.queuePings.size();
    }
}
