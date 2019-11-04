/**
 * Find 4 smallest elements in an array
 */

const MinHeap = require('../../_DataStructures_/Heaps/MinHeap');

function findKSmallest(collection, k) {
  if (!collection || !Array.isArray(collection)) {
    throw new Error('Invalid / missing collection');
  }

  // create a MinHeap using the collection
  const mh = new MinHeap(collection);
  const result = [];
  for (let i = 0; i < k; i += 1) {
    result.push(mh.getMin());
  }
  return result;
}

module.exports = findKSmallest;
