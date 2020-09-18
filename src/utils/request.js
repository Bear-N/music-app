import axios from "axios"
// import qs from "qs"

//请求拦截
axios.interceptors.request.use(config => {
    return config;
})

//响应拦截
axios.interceptors.response.use(res => {
    console.log(`本次请求的地址是:${res.config.url}`);
    console.log(res);
    return res;
})

//轮播图
export const reqBanner = () => {
    return axios({
        url: "/banner",
        params: { type: 1 }
    })
}

//推荐歌单
export const reqRecList = () => {
    return axios({
        url: "/personalized",
        params: { limit: 6 }
    })
}

//最新音乐
export const reqNewSong = () => {
    return axios({
        url: "/personalized/newsong",
    })
}

//所有榜单
export const reqAllRank = () => {
    return axios({
        url: "/toplist",
    })
}

//排行榜详情
export const reqRankDeatail = (id) => {
    return axios({
        url: "/top/list",
        params: { id: id }
    })
}

//获取歌单详情
export const reqListDetail = (id) => {
    return axios({
        url: "/playlist/detail",
        params: { id: id }
    })
}

//热搜列表(简略)
export const reqDefaultSearch = () => {
    return axios({
        url: "/search/hot",
    })
}

//搜索
export const reqSearch = (keywords) => {
    return axios({
        url: "/search",
        params: { keywords: keywords, limit: 10 }
    })
}

//获取歌词
export const reqLyric = (id) => {
    return axios({
        url: "/lyric",
        params: { id: id }
    })
}