
using System;
using System.Collections.Generic;

public class RecentCounter
{
    private static readonly int HISTORY_SPAN_IN_MILLISECONDS = 3000;
    private readonly Queue<int> queuePings;

    public RecentCounter()
    {
        queuePings = new Queue<int>();
    }

    public int Ping(int time)
    {
        queuePings.Enqueue(time);
        while (queuePings.Peek() < time - HISTORY_SPAN_IN_MILLISECONDS)
        {
            queuePings.Dequeue();
        }
        return queuePings.Count;
    }
}
