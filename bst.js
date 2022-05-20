//create a class for a binary search tree.  Create a method that will add to the BST only if the number doenst already exist
class Node {
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}

class binarySearchTree {
    constructor(root=null){
        this.root=root
    }
    findOrInsert(data){
        console.log(data)
        let currentNode = this.root;
        let numSteps = 1;
        while(true){
            if(data===currentNode.data){
                console.log("complete in " + numSteps)
                return console.log(`${data} already in BST`,currentNode)
            }
            if(data>currentNode.data){
                if(!currentNode.right){
                    console.log("complete in " + numSteps)
                    return currentNode.right = new Node(data)
                }
                currentNode = currentNode.right
                numSteps++;
            }
            if(data<currentNode.data){
                if(!currentNode.left){
                    console.log("complete in " + numSteps)
                    return currentNode.left = new Node(data)
                }
                currentNode = currentNode.left
                numSteps++;
            }
        }
    }
}

const myBST = new binarySearchTree(new Node(8))
