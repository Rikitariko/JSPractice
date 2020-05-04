    function newNode(binaryTree, num) {
        binaryTree.left = {};
        binaryTree.right = {};
        binaryTree.num = num;
    }

    function add(binaryTree, x) {
        if (Object.keys(binaryTree).length === 0) {
            newNode(binaryTree, x);
            return;
        }
        if (binaryTree.num > x)
            add(binaryTree.left, x);
        else if (binaryTree.num < x)
            add(binaryTree.right, x);
    }

    function printTree(binaryTree) {
        if (Object.keys(binaryTree).length === 0)
            return "";
        let l = printTree(binaryTree.left);
        let r = printTree(binaryTree.right);
        return l + binaryTree.num.toString() + " " + r;
    }

    let binaryTree = {};
    let array = [5, 8, 16, 4, 6, 78, 19, 90];

    for (let i = 0; i < array.length; i++)
        add(binaryTree, array[i]);

    console.log(printTree(binaryTree));