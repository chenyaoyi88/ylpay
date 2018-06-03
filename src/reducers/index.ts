/**
 * Created by Rabbit on 2017/5/23.
 */
import { combineReducers } from 'redux';
// import ShiTuReducer from './ShiTuReducer';
// import GankReducer from './GankReducer';

// 很神奇的事情。。。除了叫nav，其他的都报错
// import nav from './StackReducer';

//取决于这里你加入了多少 reducer
const RootReducer = combineReducers({
  // ShiTuReducer,
  // GankReducer,
//   nav
});

export default RootReducer;
