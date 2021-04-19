/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
输入：head = [1,2,3,4]
输出：[2,1,4,3]
输入：head = []
输出：[]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// a ->b->c

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
let a = new ListNode(1, null)
let b = new ListNode(2, a)
let c = new ListNode(3, b)
let d = new ListNode(2, c)
console.log(d)
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  } else {
    let c = head.next
    head.next = swapPairs(c.next)
    c.next = head
    return c
  }
}

console.log(swapPairs(d))
