// To Create node of the tree
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstSearch = (root) => {
    const stack = [root]; // initialises with  root
    const result = []; // to store the result
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return result;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(depthFirstSearch(a));
//Output:  [a, b, d, e, c, f, g]
 