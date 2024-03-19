// Definición de la clase Nodo
function Node(data) {
    this.data = data;
    this.next = null;
}

// Definición de la clase Lista Enlazada
function LinkedList() {
    this.head = null;
    this.tail = null;
}

// Método para insertar un elemento en la lista si no está duplicado
LinkedList.prototype.insertUnique = function(data) {
    if (!this.contains(data)) {
        var newNode = new Node(data);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }
};

// Método para verificar si un elemento ya existe en la lista
LinkedList.prototype.contains = function(data) {
    var current = this.head;
    while (current) {
        if (current.data === data) {
            return true;
        }
        current = current.next;
    }
    return false;
};

// Método para mostrar nodos que tienen un valor superior a un valor dado
LinkedList.prototype.displayNodesGreaterThan = function(value) {
    var current = this.head;
    while (current) {
        if (current.data > value) {
            console.log(current.data);
        }
        current = current.next;
    }
};

// Ejemplo de uso
var list = new LinkedList();
list.insertUnique(10);
list.insertUnique(20);
list.insertUnique(20); // No se insertará ya que es un duplicado
list.insertUnique(30);
list.displayNodesGreaterThan(9); // Mostrará 9, 20 y 30
// El número que ponga dentro del paréntesis, es el número que será tomado en cuenta cómo referencia
