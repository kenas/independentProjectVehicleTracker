class ListNode {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null; //this will automaticlly run when the instance is created that mean set the head to null with each insert mehod
    }
    insert(data) {
        let item = new ListNode(data);
        if(this.head === null) {
            this.head = item
        } else {

            let current = this.head;
            while(current.next !== null) {
                current = current.next; 
            }

            current.next = item;
        }  
    }

    remove(data) {

        let current = this.head;
        if(current !== null && current.value === data) {
            this.head = this.head.next;
            return;
        }

        while(current !== null && current.next !== null) {
            if(current.next.value === data) {
                current.next = current.next.next;
                return;
            }

            current = current.next;
       }

    }

    //this should remove node the one which is one in front of the passing node Example E remove F
    removeNextTo(data) {
        let current = this.head;

        if(current !== null && current.value === data) {
            current.next = current.next.next;
            return;
        }

        while(current !== null && current.next !== null) {
            if(current.value === data) {
                // console.log('Yes, the node is here!')
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.value + " → ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

const test = new LinkedList();
test.insert('A');
test.insert('B');
test.insert('C');
test.insert('D');
test.insert('E');
test.insert('F');
test.removeNextTo('E');
// test.remove('C');
test.printList();

