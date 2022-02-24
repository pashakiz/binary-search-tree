import React from 'react'
import { BinarySearchTree, useBinarySearchTree } from 'react-tree-vis'
import { useState } from 'react'

var SPACEBAR_KEY = 32;

export default function App() {

  const { ref, insert, remove } = useBinarySearchTree();

  const [insertValue, setInsertValue] = useState(0);
  const [removeValue, setRemoveValue] = useState(0);

  document.body.addEventListener('keyup', handlerSpaceBar);
  document.body.addEventListener('click', handlerClick);

  function handlerSpaceBar(event) {
    if(event.keyCode == SPACEBAR_KEY) {
      console.log('space pressed');
      insert(getRandomArbitrary(-100, 100));
    }
  }

  function handlerClick(event) {
    console.log('event.target.className:', event.target.className);
    console.log('???:', event.target.className == 'normal');
    if (event.target.className == 'normal') {
      console.log('data', event.target.textContent);
    }
  }

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

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

      <BinarySearchTree data={[0]} ref={ref} />
    </div>
  );

}
