
#include <queue>
using namespace std;

class RecentCounter {
    
    static const int HISTORY_SPAN_IN_MILLISECONDS = 3000;
    queue<int> queuePings;

public:
    RecentCounter() = default;

    int ping(int time) {
        queuePings.push(time);
        while (queuePings.front() < time - HISTORY_SPAN_IN_MILLISECONDS) {
            queuePings.pop();
        }
        return queuePings.size();
    }
};
