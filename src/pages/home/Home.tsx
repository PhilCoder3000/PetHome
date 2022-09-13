import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store/configureStore';
import { decrement, increment } from './slice';

export function Home() {
  const count = useSelector((state: RootState) => state.home.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>inc</button>
      <button onClick={() => dispatch(decrement())}>dec</button>
    </div>
  )
}