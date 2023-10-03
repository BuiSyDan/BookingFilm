import React from 'react';
import _ from 'lodash';

export default function JoinDemo() {
  let arr = ['dan', 'anh', 'hau'];

  let person = [
    { id: 1, name: 'dan' },
    { id: 2, name: 'anh' },
    { id: 3, name: 'hau' }
  ]



  //es6
  const result = arr.join('-');

  const getPerson = _.find(person, item => item.id === 2);


  //lodash
  _.join(arr,)
  const resultLodash = _.join(arr, '*')
  return (
    <div>
      {result}
      <br />
      {resultLodash}
      <div className='bg-green-300'>
        <p>Name: {getPerson.name}, Id: {getPerson.id}</p>
      </div>
    </div>
  )
}
