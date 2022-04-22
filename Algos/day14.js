class Node
{
    constructor(value)
    {
        this.next=undefined;
        this.previous=undefined;
        this.value=value;
    }
};

class List
{
    constructor()
    {
        this.head=undefined;
        this.tail=undefined;
    }

    /* 
        Description:
        Inserts a new node with the given value at the FRONT of the list.
     */
    /* Time: O(1) */
    /* Space: O(1) */
    PushFront(value)
    {
        /* Your Code Here */
        let newNode = new Node(value);
        let temp = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.head.next = temp;
        return this
    }

    /* 
        Description:
        Inserts a new node with the given value at the END of the list.
     */
    /* Time: O(1) */
    /* Space: O(1) */
    PushBack(value)
    {
        if(this.head===undefined)
        {
            this.head=new Node(value);
            this.tail=this.head;
        }
        else
        {
            let temp=new Node(value);
            this.tail.next=temp;
            temp.previous=this.tail;
            this.tail=temp;
        }
    }

    Log()
    {
        let str="";
        for(let r=this.head;r;r=r.next) str+=r.value+"->";
        console.log(str);
    }
};

/*****************************************************************************/
/* Code Tests Below: */
/*****************************************************************************/
let list=new List();
list.PushBack(10);
list.PushBack(20);
list.PushBack(30);
list.PushFront(40);
list.Log(); /* Expected: 40->10->20->30 */