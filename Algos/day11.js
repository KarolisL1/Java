class MinHeap
{
    constructor()
    {
        this.data=[null,10,40,20,60,50,30,70];
    }

    /* Description: Inserts a value into the heap, maintaining order. */
    /* Instructions: */
        /* 1. push the value to the end of the array.*/
        /* 2. Iteratively swap the new number with its parent value while it is */
        /* smaller than it's parent. */
    /* Time: O(log n) */
    /* Space: O(1) */
    Insert(value)
    {
        Insert(value)
    {
        var temp;
        this.data.push(value);
        console.log(this.data);
        var i = this.data.length - 1;

        while(i > 0) {
            temp = this.data[Math.floor(i/2)];
            if(this.data[i] < temp) {
            this.data[Math.floor(i/2)] = this.data[i];
            this.data[i] = temp;
            }
            else
                return this.data;
            i = Math.floor(i/2);
        }
        return this.data;
    }
    }

    /* Description: Returns the smallest value in the heap without removing it. */
    /* Time: O(1) */
    /* Space: O(1) */
    Min()
    {
        /* Your Code Here */
    }

    Log()
    {
        let fmt="[";
        for(let i=1;i<this.data.length;i++) fmt+=this.data[i]+",";
        fmt=fmt.substring(0,fmt.length-1)+"]";
        console.log(fmt);
    }
};

let heap=new MinHeap();
heap.Insert(5);
heap.Log(); /* Expected: 5,10,40,20,60,50,30,70 */
console.log(heap.Min()); /* Expected: 5 */