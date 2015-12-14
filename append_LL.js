function LinkedList() {

    this.length = 0; // {2}
    this.head = null; // {3}

    this.insert = function(position, element){};
    this.removeAt = function(position){};
    this.remove = function(element){};
    this.indexOf = function(element){};
    this.isEmpty = function() {};
    this.size = function() {};
    this.toString = function(){};
    this.print = function(){};
}

function Node (element){ // {1}
    this.element = element;
    this.next = null;
}

LinkedList.prototype.append = function(element){
    var node = new Node(element), //{1}
        current; //{2}

    if (this.head === null){ //first node on list //{3}
        this.head = node;
    } else {
        current = this.head; //{4}
        //loop the list until find last item
        while(current.next){
            current = current.next;
        }
        //get last item and assign next to node to make the link
        current.next = node; //{5}
    }
    this.length++; //update size of list //{6}
};

var list = new LinkedList();
list.append(15);
list.append(10);

console.log(list.head);
