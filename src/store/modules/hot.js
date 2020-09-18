import { reqAllRank, reqRankDeatail } from "../../utils/request"

const initState = {
    hotid: "",//热歌榜id
    hotsong: [],//热歌榜
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeHotId":
            return {
                ...state,
                hotid: action.hotid
            }
        case "changeHotSong":
            return {
                ...state,
                hotsong: action.hotsong
            }
        default:
            return state;
    }
}

//actions
export const changeHotIdAction = (hotid) => {
    return { type: "changeHotId", hotid }
}

export const changeHotSongAction = (hotsong) => {
    return { type: "changeHotSong", hotsong }
}

//组件触发请求
export const reqHotIdAction = () => {
    return (dispatch, getState) => {
        const { hotid } = getState().hot
        if (hotid !== "") {
            return;
        }
        reqAllRank().then(res => {
            dispatch(changeHotIdAction(res.data.list[0].id))
            dispatch(reqHotSongAction())
        })
    }
}

export const reqHotSongAction = () => {
    return (dispatch, getState) => {
        const { hotsong, hotid } = getState().hot
        if (hotsong.length > 0) {
            return;
        }

        reqRankDeatail(hotid).then(res => {
            dispatch(changeHotSongAction(res.data.playlist.tracks))
        })
    }
}

//导出数据
export const hotid = state => state.hot.hotid;
export const hotsong = state => state.hot.hotsong.filter((item, index) => index < 20);
export default reducer;