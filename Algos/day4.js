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

    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }

    /* Insert a node with the given value to the end of the list */
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

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        for (var i = 0;i < arr.length; i++){
            this.PushBack(arr[i])
        }

    return this
    }

    /* Return the second to last node's value in the list */
    SecondToLast()
    {
        if(this.head == undefined){
            return undefined
        }
        let runner = this.head;
        while(runner.next.next != null){
            runner = runner.next
        }
        return runner.value
    }

    /* Remove a node whose value matches the given value */
    /* ( You will need to fix .next pointers too! ) */
    RemoveValue(value)
    {
        if(this.head == undefined){
            return undefined
        }
        let runner = this.head;
        if(runner.value == value){
            this.head = runner.next
            return this
        }
        while(runner.next != null){
            if(runner.next.value == value){
                runner.next = runner.next.next
                return this
            }
            runner = runner.next
        }
        return this
    }

    /* Inserts a new node before a node whose value is the search_value. */
    /* Example: */
    /*
        Before:
        10
        30
        40
        Prepend(20,30)
        After:
        10
        20
        30
        40
    */
    Prepend(new_value,search_value)
    {
        /* Your Code Here */
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/

/* Creates our list */
let list=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([111,222,333,444,555,666]);

console.log(list.SecondToLast()) /* Expected: 555 */

list.RemoveValue(333); /* No Output */

/* I'm a freebie, don't delete me! */
list.Iterate(value=>console.log(value));
/*
    Expected Output after RemoveValue(333):
    111
    222
        <-- this was 333
    444
    555
    666
*/

list.Prepend(333,444);

/* I'm a freebie, don't delete me! */
list.Iterate(value=>console.log(value));
/*
    Expected Output after Prepend(333,444):
    111
    222
    333 <- 333 should be back
    444
    555
    666
*/