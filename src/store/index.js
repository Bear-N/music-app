import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import recommend from "./modules/recommend"
import hot from "./modules/hot"
import details from "./modules/details"
import search from "./modules/search"
import song from "./modules/song"

// import {reqAllRank} from "../store/modules/hot"

//创建根reducer
const reducer=combineReducers({
    recommend,
    hot,
    details,
    search,
    song
})

//创建仓库
const store=createStore(reducer,applyMiddleware(thunk))

//测试
// store.dispatch(reqAllRank())

//添加监听
// store.subscribe(()=>{
//     console.log(store.getState());
// })


export default store;
