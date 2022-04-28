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
	Enqueue(value){
        let node=new Node(value);
        if(this.length==0)
        {
            this.head=node;
            this.tail=node;
        }
        else
        {
            this.tail.next=node;
            node.previous=this.tail;
            this.tail=node;
        }
        this.length++;
    }
	/******************************************************************************
	* Name: Queue.SumHalves()
	* Description: Whether the sum of the first half of the queue is equal to the sum of the second half.
	* Arguments: None
	* Returns: Boolean
	* Time: O(n)
	* Space: O(1)
	******************************************************************************/
	SumHalves()
	{
		/* Your Code Here */
        let sum1=0;
        let sum2=0;
        let node=this.head;
        for(let i=0;i<this.length/2;i++)
        {
            sum1+=node.value;
            node=node.next;
        }
        for(let i=0;i<this.length/2;i++)
        {
            sum2+=node.value;
            node=node.next;
        }
        return sum1==sum2;
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
class Stack
{
	constructor()
	{
		this.top=undefined;
	}
	Push(value){
        let newValue = new Stack(value,this.next);
        this.next = newValue;
        //Stack.next = new Stack(value,this.next)
    } /* Your Old Stack Code Here */
	Pop(){
        let something = this.next;
        this.next = this.next.next;
        return something.value;
    } /* Your Old Stack Code Here */
};
/******************************************************************************
* Class to represent a Queue but is implemented using two stacks to store the
* queued items without using any other objects or arrays to store the items.
* Retains the FIFO (First in First Out) ordering when adding / removing items.
******************************************************************************/
class TwoStackQueue
{
	constructor()
	{
		this.stack1=new Stack();
		this.stack2=new Stack();
	}
	Enqueue(value)
	{
		/* Your Code Here */
        console.log("value is here: -> ", value);
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
	Dequeue()
	{
		/* Your Code Here */
        if(this.length==0)
        {
            return undefined;
        }
        else if(this.length==1)
        {
            let temp = this.head;
            this.head = undefined;
            this.tail = undefined;
            this.length--;
            return temp.value;
        }
        else
        {
            let temp = this.head;
            this.head = this.head.next;
            this.head.previous = undefined;
            this.length--;
            return temp.value;
        }
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
let items1=[10,20,30,10,30,20];
let items2=[60,70,80,90,100,110];
let q1=new Queue();
let q2=new Queue();
let twoStackQueue=new TwoStackQueue();
for(let i=0;i<items1.length;i++)
{
	q1.Enqueue(items1[i]);
	q2.Enqueue(items2[i]);
	twoStackQueue.Enqueue(items1[i]);
}
q1.Log()
q2.Log()
twoStackQueue.Log()
console.log(q1.SumHalves()); /* Expected: true */
console.log(q2.SumHalves()); /* Expected: false */
while(twoStackQueue.stack2.top)
{
	console.log(twoStackQueue.stack2.Dequeue());  /* Expected: 10,20,30,10,30,20 */
}
twoStackQueue.Log();