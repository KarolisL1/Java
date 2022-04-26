class Node
{
    constructor(value)
    {
        this.value=value;
        this.next=undefined;
        this.previous=undefined;
    }
};

class Queue
{
    constructor()
    {
        this.head=undefined;
        this.tail=undefined;
        this.length=0;
    }

    /* Time:O(1) */
    /* Space:O(1) */
    /* Adds the given value to the back of the queue. */
    Enqueue(value)
    {
        /* Your Code Here */
        let m = new Node(value);
        if(this.head === undefined)
        {
            this.head = m;
            this.tail = m;
        }
        else
        {
            this.tail.next = m;
            m.previous = this.tail;
            this.tail = m;
        }
        this.length++;
    }

    /* Time:O(1) */
    /* Space:O(1) */
    /* Removes and returns the value at the front of the queue. */
    Dequeue()
    {
        /* Your Code Here */
        if(q.length === 0) return undefined;
        let something = q.head;
        q.head = q.head.next;
        q.head.previous = undefined;
        q.length--;
        return something.value;
    }

    /* Time:O(1) */
    /* Space:O(1) */
    /* Returns but does NOT remove the value at the front of the queue. */
    Front()
    {
        /* Your Code Here */
        let something = this.head;
        return something.value;
    }

    /* Time:O(1) */
    /* Space:O(1) */
    /* Returns but does NOT remove the value at the back of the queue. */
    Back()
    {
        /* Your Code Here */
        let something = this.tail;
        return something.value;
    }

    /* Time:O(1) */
    /* Space:O(1) */
    /* Returns whether the queue is empty. */
    IsEmpty()
    {
        /* Your Code Here */
        if (this.head === undefined) return true;
        return false;
    }

    /* Time:O(1) <- Yes, this should be constant time ;) */
    /* Space:O(1) */
    /* Returns the number of nodes or items in the queue. */
    Size()
    {
        /* Your Code Here */
        return this.length;
    }

    Log()
    {
        let str="";
        for(var node=this.head;node;node=node.next)
        {
            str+=node.value+"->";
        }
        console.log(str);
    }
};

let q=new Queue();
q.Enqueue(16);
q.Enqueue(32);
q.Enqueue(64);
q.Enqueue(128);
q.Enqueue(256);
q.Log();                     /* Expected: 16->32->64->128->256-> */
console.log(q.Dequeue());     /* Expected: 16 */
console.log(q.Dequeue());     /* Expected: 32 */
console.log(q.Front());     /* Expected: 64 */
console.log(q.Back());         /* Expected: 256 */
console.log(q.IsEmpty())     /* Expected: false */
console.log(q.Size());        /* Expected: 3 */