
public class RecentCounter {

    private static final int HISTORY_SPAN_IN_MILLISECONDS = 3000;
    private final Queue<Integer> queuePings;

    public RecentCounter() {
        queuePings = new LinkedList<>();
    }

    public int ping(int time) {
        queuePings.add(time);
        while (queuePings.peek() < time - HISTORY_SPAN_IN_MILLISECONDS) {
            queuePings.poll();
        }
        return queuePings.size();
    }
}
