import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { Counter } from './ui/Counter';
import type { CounterSchema } from './model/types/counterSchema';

export {
  Counter,
  counterReducer,
  CounterSchema,
};
