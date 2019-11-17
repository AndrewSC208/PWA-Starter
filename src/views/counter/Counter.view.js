import React from 'react';

import {Counter} from '../../common/counter';

export const CounterView = ({counter, update, destroy}) => {
  const {collection} = counter;
  const renderCounterList = (collection) => {
      return collection.map((c) => {
          return <Counter
              key={c.id}
              counter={c}
              update={update}
              destroy={destroy}/>
          }
      )
  };

  return (
      <div>{renderCounterList(collection)}</div>
  )
};
