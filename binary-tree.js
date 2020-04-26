// // 实现二叉树遍历
// function TreeNode (val) {

//     // 数据域
//     this.val = val

//     // 二叉树的左右子节点都设置为null
//     this.left = this.right = null
// }

// const root = new TreeNode('A')

// root.left = new TreeNode('B')
// root.left.left = new TreeNode('D')
// root.left.right = new TreeNode('E')

// root.right = new TreeNode('C')
// root.right.right = new TreeNode('F')

// console.log('root ', root)

const root = {
    val: "A",

    left: {
        val: "B",

        left: {
            val: "D"
        },

        right: {
            val: "E"
        }
    },

    right: {
        val: "C",

        right: {
            val: "F"
        }
    }
};

// 先序遍历
function preorder(root) {

    // 如果root为null 则返回
    if (!root) {
        return
    }

    console.log('当前遍历的节点 ', root.val)

    // 遍历左侧子节点
    preorder(root.left)

    // 遍历右侧子节点
    preorder(root.right)
}

console.log('二叉树前序遍历')
preorder(root)

// 中序遍历
function inorder(root) {

    if (!root) {
        return
    }

    // 先遍历左侧子节点
    inorder (root.left)

    console.log('当前便利的节点 ', root.val)

    // 在遍历右侧子节点
    inorder(root.right)
}

console.log('二叉树中序遍历')
inorder(root)

// 后序遍历
function postorder(root) {

    if (!root) {
        return
    }

    // 先遍历左侧的子节点
    postorder(root.left)

    // 在遍历右侧的子节点
    postorder(root.right)

    console.log('当前便利的节点 ', root.val)
}

console.log('二叉树后序遍历')
postorder(root)