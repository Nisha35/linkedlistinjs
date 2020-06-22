// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// linkedlist means create list in which each node link to other
// ?from first node we get next then next
// in js we can say that complex nested object
// create node
class ListNode{
  constructor(data){
    this.data =data
    this.next=null
  }
}
// create list
class LinkedList{
  constructor(head=null){
    this.head=head
  }
}
let node1=new ListNode(2);
let node2= new ListNode(5);
node1.next=node2

let list= new LinkedList(node1)
console.log(list.head)
console.log(list.head.next.data)



appDiv.innerHTML = `<h1>JS Starter</h1>`;
