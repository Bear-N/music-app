import { reqDefaultSearch, reqSearch } from "../../utils/request"

const initState = {
    defaultsearch: [],//默认搜索词
    inp: "",//搜索
    searchlist: []//搜索列表
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeDefault":
            return {
                ...state,
                defaultsearch: action.defaultsearch
            }
        case "changeInp":
            return {
                ...state,
                inp: action.inp
            }
        case "changeSearchList":
            return {
                ...state,
                searchlist: action.searchlist
            }
        default:
            return state;
    }
}

//actions
export const changeDefaultAction = (defaultsearch) => {
    return { type: "changeDefault", defaultsearch }
}

export const changeInpAction = (inp) => {
    return { type: "changeInp", inp }
}

export const changeSearchListAction = (searchlist) => {
    return { type: "changeSearchList", searchlist }
}

//组件触发请求
export const reqDefaultAction = () => {
    return (dispatch, getState) => {
        const { defaultsearch } = getState().search
        if (defaultsearch.length > 0) {
            return;
        }
        reqDefaultSearch().then(res => {
            dispatch(changeDefaultAction(res.data.result.hots))
        })
    }
}

export const reqSearchListAction = () => {
    return (dispatch, getState) => {
        if (getState().search.inp !== "") {
            reqSearch(getState().search.inp).then(res => {
                if (res.data.result.songCount === 0) {
                    dispatch(changeSearchListAction([]))
                } else {
                    dispatch(changeSearchListAction(res.data.result.songs))
                }
            })
        }
    }
}

//导出数据
export const inp = state => state.search.inp;
export const searchlist = state => state.search.searchlist;
export const defaultsearch = state => state.search.defaultsearch;
export default reducer;