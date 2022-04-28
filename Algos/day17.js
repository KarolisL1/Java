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
    /******************************************************************************
    * Name: Queue.Compare(otherQueue)
    * Description: Determines whether two queues have the exact same values
    * Arguments:
        * 1: Queue otherQueue
    * Returns: Boolean
    * Time: O(n)
    * Space: O(1)
    ******************************************************************************/
    Compare(otherQueue){
        if( this.length != otherQueue.length ){
            return false;
        }
        let runner2 = otherQueue.head;
        for(let runner1 = this.head;runner1;runner1 = runner1.next){
                if(runner1.value == runner2.value) {
                    runner2 = runner2.next;
                    continue;
                }
                return false;
        }
        return true;
    }
    /******************************************************************************
    * Name: Queue.IsPalindrome()
    * Description: Determines whether the queue is a palindrome
    * Arguments:
        * None
    * Returns: Boolean
    * Time: O(n)
    * Space: O(1)
    * Examples:
        * 1 2 3 2 1 <- true
        * 5 3 1 8 4 <- false
        * r a c e c a r <- true
        * h a r r y p o t t e r <- false
    ******************************************************************************/    
    IsPalindrome(){
        let tempQueue = new Queue();
        for(let runner = this.tail; runner; runner = runner.previous){
            tempQueue.Enqueue(runner.value)
        }
        return this.Compare(tempQueue);
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

let items=[10,20,30,20,10];
let items2=[60,70,80,90,100];
let q=new Queue();
let q2=new Queue();
let q3=new Queue();
for(let i=0;i<items.length;i++)
{
    q.Enqueue(items[i]);
    q2.Enqueue(items[i]);
    q3.Enqueue(items2[i]);
}
q.Log();
q2.Log();
q3.Log();
console.log(q.Compare(q2));      /* Expected: true */
console.log(q2.Compare(q3));     /* Expected: false */
// console.log(q.IsPalindrome());     /* Expected: true */
// console.log(q3.IsPalindrome()); /* Expected: false */