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

    Iterate()
    {
        let str="";
        for(let node=this.head;node;node=node.next)
        {
            str+=node.value+"->";
        }
        console.log(str);
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

    /* Add all nodes of the supplied list to this list */
    Concat(other_list)
    {
        if(this.head == null){
            this.head = other_list.head;
            return this;
        }
        var runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = other_list.head;
    return this;
    }

    /* Finds the node with the smallest value and moves it to the front. */
    MinToFront()
    {
        if(this.head == null){
            return this;
        }
        var runner = this.head;
        var min = runner;
        while(runner.next != null){
            if(runner.value < min.value){
                min = runner;
            }
            runner = runner.next;
        }
        if(min != this.head){
            var prev = this.head;
            while(prev.next != min){
                prev = prev.next;
            }
            prev.next = min.next;
            min.next = this.head;
            this.head = min;
        }
    return this;
    }

    /* Split our list into two lists, where the second list starts with the node */
    /* that has the given value */
    Split(value)
    {
        if (this.head == null) {
            console.log("List is empty");
            return this;
        }

        var runner = this.head;

        while (runner.next != null && runner.next.value != value) {
            runner = runner.next;
        }

        if (runner.next == null) {
            console.log("Value not in list");
            return this;
        }

        var tempNode = new List();
        tempNode.head = runner.next;
        runner.next = null;
        return tempNode;
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/

/* Creates our list */
let list=new List();
let list2=new List();

/* ( Use your solution from day 1 for this to work! ) */
/* Remember, it just shoves all of these into our list! */
list.PushBackN([765,234,545,112]);
list2.PushBackN([65,567,433,656]);

list=list.Concat(list2);
list.Iterate();
/*
    Expected:765->234->545->112->65->567->433->656
*/
list.MinToFront();
list.Iterate();
// /*
//     Expected:65->765->234->545->112->567->433->656
// */
let split_list=list.Split(545);
list.Iterate();
split_list.Iterate();
/*
    Expected:65->765->234->
    Expected:545->112->567->433->656
*/