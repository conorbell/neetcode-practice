function bfs(graph, start) {
  //initialize queue as an array containing start
  const queue = [start];
  //initialize visited set
  const visited = new Set();
  //initialize results array
  const result = [];

  //while there are nodes in our queue
  while (queue.length) {
    //grab first element from queue and assign it to vertex
    const vertex = queue.shift();

    //if we haven't visited this vertex
    if (!visited.has(vertex)) {
      //add it to visited set and results.
      visited.add(vertex);
      result.push(vertex);

      //add neighbor of vertex to queue
      for (const neighbor of graph[vertex]) {
        queue.push(neighbor);
      }
    }
  }
  return result;
}
const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};

console.log(bfs(graph, 'A'));
