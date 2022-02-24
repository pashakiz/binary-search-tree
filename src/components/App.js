import React from 'react'
import { BinarySearchTree, useBinarySearchTree } from 'react-tree-vis'
import { useState } from 'react'

export default function App() {

  const { ref, insert, remove } = useBinarySearchTree()

  const [insertValue, setInsertValue] = useState(0)
  const [removeValue, setRemoveValue] = useState(0)

  return (
    <div>
      <input
        type="number"
        onChange={(elem) => setInsertValue(parseInt(elem.currentTarget.value))}
      />
      <button onClick={() => insert(insertValue)}>Insert</button>
      <br />
      <input
        type="number"
        onChange={(elem) => setRemoveValue(parseInt(elem.currentTarget.value))}
      />
      <button onClick={() => remove(removeValue)}>Remove</button>

      <BinarySearchTree data={[2, 1, 3]} ref={ref} />
    </div>
  );

}
