import React from 'react';

import {Counter} from '../../common/counter';

export const CounterView = ({counters, update, destroy}) => {
    const {collection} = counters;

    const renderCounterList = (collection) => {
        return Object.keys(collection).map((id) => {
            return <Counter
                key={id}
                counter={collection[id]}
                update={update}
                destroy={destroy}/>
            }
        )
  };

  return (
      <div>{renderCounterList(collection)}</div>
  )
};
