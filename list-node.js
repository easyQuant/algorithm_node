// 链表
function ListNode (val) {
    this.val = val
    this.next = null
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)

// 关联链表节点
node1.next = node2

// 插入节点
const node3 = new ListNode(3)

// 把后面的节点指向新加入的节点的next
node3.next = node2

// 把node1的next指向新的节点
node1.next = node3

// 删除节点
// 获取node3节点
let target = node1.next

// 把node1.next指向node3
node1.next = target.next