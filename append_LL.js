function LinkedList() {

    var Node = function(element){ // {1}
        this.element = element;
        this.next = null;
    };

    var length = 0; // {2}
    var head = null; // {3}

    this.append = function(element){};
    this.insert = function(position, element){};
    this.removeAt = function(position){};
    this.remove = function(element){};
    this.indexOf = function(element){};
    this.isEmpty = function() {};
    this.size = function() {};
    this.toString = function(){};
    this.print = function(){};
}


this.append = function(element){
    var node = new Node(element), //{1}
        current; //{2}

    if (head === null){ //first node on list //{3}
        head = node;
    } else {
        current = head; //{4}
        //loop the list until find last item
        while(current.next){
            current = current.next;
        }
        //get last item and assign next to node to make the link
        current.next = node; //{5}
    }
    length++; //update size of list //{6}
};
