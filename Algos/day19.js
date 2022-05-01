class PNode
{
    constructor(priority,value)
    {
        this.priority=priority;
        this.value=value;
        this.next=undefined;
        this.previous=undefined;
    }
};
class PQueue
{
    constructor()
    {
        this.head=undefined;
        this.tail=undefined;
    }
    /*
        Name: Queue.Enqueue(priority,value)
        Args:
            1. Integer priority
            2. Any value
        Returns: N/A
        Description:
            Inserts a new node in the correct order in the list based on the given priority.
        Time: O(N)
        Space: O(1)
    */
    Enqueue(priority,value)
    {
        /* Your Code Here */
    }
    /*
        Name: Queue.Dequeue()
        Args:
            1. N/A
        Returns: Any value
        Description:
            Returns and removes the node with the highest priority in the list.
            This should always be the head node.
        Time: O(1)
        Space: O(1)
    */    
    Dequeue()
    {
        /* Your Code Here */
    }
    Log()
    {
        for(var str="",node=this.head;node;node=node.next)
        {
            str+=node.priority+":"+node.value+"->";
        }
        console.log(str);
    }
};
let pqueue=new PQueue();
pqueue.Enqueue(2,"mary");
pqueue.Enqueue(4,"jim");
pqueue.Enqueue(1,"ellen");
pqueue.Enqueue(3,"bob");
console.log(pqueue.Log()); /* Expected: 1:ellen->2:mary->3:bob->4:jim */
console.log(pqueue.Dequeue()); /* Expected: "ellen" */