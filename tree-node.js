// 二叉树节点的构造函数
function TreeNode (val) {

    // 数据域
    this.val = val

    // 二叉树的左右子节点都设置为null
    this.left = this.right = null
}

// 创建节点
const node = new TreeNode(1)

// 添加左侧子节点
node.left = new TreeNode(2)

// 添加右侧子节点
node.right = new TreeNode(3)