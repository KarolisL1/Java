class Node
{
    constructor(value)
    {
        this.next=undefined;
        this.value=value;
    }
};

class List
{
    constructor()
    {
        this.head=undefined;
    }

    PushBack(value)
    {
        var newNode = new Node(value)
        if(this.head == null){
            this.head = newNode
            return newNode
        }
        var findNext = this.head;
        while (findNext.next != null) {
            findNext = findNext.next
        }
        findNext.next = newNode
    return this
    }

    PushBackN(arr)
    {
        for (var i = 0;i < arr.length; i++){
            this.PushBack(arr[i])
        }
    return this
    }

    /* Time:O(n) */
    /* Space:O(1) */
    /* Description: Iteratively reverses the linked list in-place. Don't make a new list. */
    /*
        Instructions (These go IN your loop):
        1. Store .next (The one AFTER your runner), because if you lose it, you can't go back.
        2. Set current's next to previous.
        3. Set previous to current
        4. Set current to step one's value. (The old next)
        5. Set head to previous (I go outside the loop when you're done).
    */
    Reverse()
    {
        /* Your code here */
        let current = this.head;
        let previous = null;
        while (current != null) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this;
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
let items=[10,20,30,40,50];
let list=new List();
list.PushBackN(items); /* Remember Me? Bring me back for this to work! */
list.Reverse();
list.Log(); /* Expected: 50->40->30->20->10-> */