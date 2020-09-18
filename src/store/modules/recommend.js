import { reqBanner, reqRecList, reqNewSong } from "../../utils/request"

const initState = {
    banner: [],//轮播图
    reclist: [],//推荐歌单
    newsong: []//最新音乐
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "changeBanner":
            return {
                ...state,
                banner: action.banner
            }
        case "changeRecList":
            return {
                ...state,
                reclist: action.reclist
            }
        case "changeNewSong":
            return {
                ...state,
                newsong: action.newsong
            }
        default:
            return state;
    }
}

//actions
export const changeBannerAction = (banner) => {
    return { type: "changeBanner", banner }
}

export const changeRecListAction = (reclist) => {
    return { type: "changeRecList", reclist }
}

export const changeNewSongAction = (newsong) => {
    return { type: "changeNewSong", newsong }
}


//组件触发请求
export const reqBannerAction = () => {
    return (dispatch, getState) => {
        const { banner } = getState().recommend
        if (banner.length > 0) {
            return;
        }
        reqBanner().then(res => {
            dispatch(changeBannerAction(res.data.banners))
        })
    }
}

export const reqRecListAction = () => {
    return (dispatch, getState) => {
        const { reclist } = getState().recommend
        if (reclist.length > 0) {
            return;
        }
        reqRecList().then(res => {
            dispatch(changeRecListAction(res.data.result))
        })
    }
}

export const reqNewSongAction = () => {
    return (dispatch, getState) => {
        const { newsong } = getState().recommend
        if (newsong.length > 0) {
            return;
        }
        reqNewSong().then(res => {
            dispatch(changeNewSongAction(res.data.result))
        })
    }
}


//导出数据
export const banner = state => state.recommend.banner;
export const reclist = state => state.recommend.reclist;
export const newsong = state => state.recommend.newsong;
export default reducer;