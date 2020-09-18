import { reqLyric } from "../../utils/request"

const initState = {
    songid: "",//歌曲id
    lyric: [],//歌词
    index: 0,//记录歌词位置
    isplay: false,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeSongId":
            return {
                ...state,
                songid: action.songid
            }
        case "changeLyric":
            return {
                ...state,
                lyric: action.lyric
            }
        case "changeIndex":
            return {
                ...state,
                index: action.index
            }
        case "changePlay":
            return {
                ...state,
                isplay: action.isplay
            }
        default:
            return state;
    }
}

//actions
export const changeSongIdAction = (songid) => {
    return { type: "changeSongId", songid }
}

export const changeLyricAction = (lyric) => {
    return { type: "changeLyric", lyric }
}

export const changeIndexAction = (index) => {
    return { type: "changeIndex", index }
}

export const changePlayAction = (isplay) => {
    return { type: "changePlay", isplay }
}

//组件触发请求
export const reqLyricAction = (id) => {
    return (dispatch, getState) => {
        reqLyric(id).then(res => {
            let lyric = res.data.lrc.lyric;
            let arr = lyric.split('[').slice(1);
            let result = [];
            let id = 1;
            arr.forEach(item => {
                let tempArr = item.split(']');
                result.push({
                    id: id++,
                    time: tempArr[0].slice(0, 5),
                    lyc: tempArr[1]
                })
            })
            lyric = result.filter(item => item.lyc !== '\n' && item.lyc !== "")

            dispatch(changeLyricAction(lyric))
        })
    }
}

//导出数据
export const songid = state => state.song.songid;
export const lyric = state => state.song.lyric;
export const index = state => state.song.index;
export const isplay = state => state.song.isplay;
export default reducer;