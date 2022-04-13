class BSTNode
{
    constructor(value)
    {
        this.left=undefined;
        this.right=undefined;
        this.value=value;
    }
};

class BST
{
    constructor()
    {
        this.root=undefined;
    }

    /* Worst Time Complexity O(N) <- Only happens if you have an unbalanced tree.  */
    /* Average Time Complexity: O(log n) */
    /* Best Time Complexity: O(1) <- Only happens if the list is empty */
    /* Description: Inserts the given node into the tree based on its value */
    Insert(value)
    {
        if (!this.root) return undefined
        let current = this.root
        while (current){
            if (value < current.value) {
                if (current.left) current = current.left //If there's something on the left, go there
                else {
                    current.left = new BSTNode(value) //if left is empty, create new one with value
                    return
                }
            }
            else {
                if (current.right) current = current.right
                else {
                    current.right = new BSTNode(value)
                    return
                }
            }
        }
    }

    /* Worst Time Complexity O(N) <- Only happens if you have an unbalanced tree.  */
    /* Average Time Complexity: O(log n) */
    /* Best Time Complexity: O(1) <- Only happens if the list is empty */
    /* Description: Inserts the given node into the tree RECURSIVELY based on its value */
    InsertRecursive(node,value)
    {
        if (!node) return undefined
        let current = node
        if (value < current.value) {
            if (current.left) this.InsertRecursive(current.left,value)
            else {
                current.left = new BSTNode(value)
                return
            }
        }
        else {
            if (current.right) this.InsertRecursive(current.right,value)
            else {
                current.right = new BSTNode(value)
                return
            }
        }
    }

    /* I'm just here to print your BST In-Order. */
    Log(node,fmt="")
    {
        if(!node) return fmt;
        fmt=this.Log(node.left,fmt);
        fmt+=node.value+"->";
        fmt=this.Log(node.right,fmt);
        return fmt;
    }
};
/*****************************************************************************/
/* Code Tests Below */
/*****************************************************************************/
let bst=new BST();

bst.root=new BSTNode(100);
bst.root.left=new BSTNode(50);
bst.root.right=new BSTNode(150);

bst.root.left.left=new BSTNode(25);
bst.root.left.right=new BSTNode(75);

bst.root.right.left=new BSTNode(125);
bst.root.right.right=new BSTNode(175);

bst.Insert(44);
console.log(bst.Log(bst.root));     /* Expected: 25->44->50->75->100->125->150->175-> */
bst.InsertRecursive(bst.root,22);
console.log(bst.Log(bst.root));        /* Expected: 22->25->44->50->75->100->125->150->175-> */