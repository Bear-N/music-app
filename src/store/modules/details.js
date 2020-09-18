import { reqListDetail } from "../../utils/request"

const initState = {
    coverimg: "",//封面
    covername: "",//歌单名称
    songlist: [],//歌单列表
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeCoverImg":
            return {
                ...state,
                coverimg: action.coverimg
            }
        case "changeCovername":
            return {
                ...state,
                covername: action.covername
            }
        case "changeSongList":
            return {
                ...state,
                songlist: action.songlist
            }
        default:
            return state;
    }
}

//actions
export const changeCoverImgAction = (coverimg) => {
    return { type: "changeCoverImg", coverimg }
}

export const changeCoverNameAction = (covername) => {
    return { type: "changeCovername", covername }
}

export const changeSongListAction = (songlist) => {
    return { type: "changeSongList", songlist }
}

//组件触发请求
export const reqSongListAction = (id) => {
    return (dispatch, getState) => {
        reqListDetail(id).then(res => {
            // console.log(res.data.playlist);
            dispatch(changeCoverImgAction(res.data.playlist.coverImgUrl))
            dispatch(changeCoverNameAction(res.data.playlist.name))
            dispatch(changeSongListAction(res.data.playlist.tracks))
        })
    }
}

//导出数据
export const coverimg = state => state.details.coverimg
export const covername = state => state.details.covername
export const songlist = state => state.details.songlist
export default reducer;