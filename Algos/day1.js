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

    /* Determine whether the list is empty. */
    IsEmpty()
    {
        /* Your Code Here */
        if (this.head==undefined){
            return true;
        }else {
            return false;
        }
    }

    /* Insert a node with the given value to the end of the list */
    PushBack(value)
    {
        /* Your Code Here */
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

    /* Insert an array of nodes with the given values to the end of the list. */
    PushBackN(arr)
    {
        /* Your Code Here */
        for (let i=0;i<arr.length;i++){
            this.PushBack(arr[i]);
        }
    }

    Iterate(fn)
    {
        for(let node=this.head;node;node=node.next){fn(node.value);}
    }
};

let test_data1=123;
let test_data2=234;
let test_data3=345;
let test_data4=[111,222,333,444,555];

/* Create our list */
let list=new List();
/* Insert nodes into the list: */
list.PushBack(test_data1);
list.PushBack(test_data2);
list.PushBack(test_data3);
/* Insert array of nodes into the list: */
list.PushBackN(test_data4);
/* Iterate our list, so we can see our node values */
list.Iterate(value=>console.log(value));

// console.log(list.IsEmpty());