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

    IsEmpty(){
        if (this.head==undefined){
            return true;
        }else {
            return false;
        }
    }
    PushBack(value){
        value = new Node(value);
        if (this.IsEmpty()){
            this.head=value;
        }
        else{
            var temp = this.head;
            while (temp.next!=undefined){
                temp=temp.next;
            }
            temp.next=value;
        }
    }
    PushBackN(arr){
        for (let i=0;i<arr.length;i++){
            this.PushBack(arr[i]);
        }
    }
    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }
    PushFront(value){}
    PopFront(){}
    Average(){}

    /* Determines whether the given value was found within the list */
    /* ( Returns a bool, true or false ) */
    Contains(value)
    {
        /* Your Code Here */
        var runner = this.head;
        while(runner != undefined){
            if (runner.value == value){
                return true;
            }
            console.log(runner.value)
            runner = runner.next;
        }
        return false;
    }

    /* Recursively determines whether the given value was found within the list. */
    /* ( Returns a bool, true or false ) */
    ContainsR(node,value)
    {
        /* Your Code Here */
        // console.log("head-->", node)
        // console.log("value to find",value);
        /* Call Me Recursively! */
        if(!node) return false;
        if(node.value == value){
            return true;
        }
        node = node.next;
        return this.ContainsR(node,value)
    }

    /* Removes and returns the last value in the list. */
    /* Treat me like array.pop() would */
    PopBack()
    {
        /* Your Code Here */
    }

    /* EXTRA / OPTIONAL */
    /* Recursively finds and returns the largest number in the list. */
    MaxR(node)
    {
        /* Your Code Here */
    }
};

/* Create our list */
let list=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([123,234,345,456,567,678]);

// console.log(list.Contains(456)); /* Expected Output: true */
console.log(list.ContainsR(list.head,value=5)); /* Expected Output: true */
// console.log(list.PopBack()); /* Expected Output: 678 */
// console.log(list.PopBack()); /* Expected Output: 567 */
// console.log(list.Contains(567)); /* Expected Output: false */
/* Iterates our list, so we can see our node values */
/* I'm a freebie, don't change me. */
// list.Iterate(value=>console.log(value));
/*
    Expected Output:
    123
    234
    345
    456
*/