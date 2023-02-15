class Graph {
    vertexes : Vertex[];
    isOriented : boolean;
}

class Vertex {
    number : number;
    edges : Edge[];
}

class Edge {
    correspondingVertexNumber : number;
    weight : number;
}