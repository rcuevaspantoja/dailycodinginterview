console.clear();
class ListNode{
    constructor( data ){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor( head = null){
        this.head = head
    }
}

//demo
let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4

let list = new LinkedList( node1 );

//mostrar lista enlazada
let node = list.head
while( node ){

    process.stdout.write(" "+ node.data )
    if( node.next != null){
        process.stdout.write( " ->" )
    }
    node = node.next
}


