import React, { Component } from 'react'
import { connect } from "react-redux"
import {
    banner,
    reqBannerAction,
    reclist,
    reqRecListAction,
    newsong,
    reqNewSongAction
} from "../../store/modules/recommend"
import Banner from "./components/Banner/Banner"
import Reclist from "./components/Reclist/Reclist"
import Newsong from "./components/Newsong/Newsong"

class Recommend extends Component {
    componentDidMount() {
        const { reqBanner, reqRecList, reqNewSong } = this.props
        reqBanner()
        reqRecList()
        reqNewSong()
    }
    //跳转歌单
    toListDetail(id) {
        this.props.history.push("/details/" + id)
    }
    //跳转歌曲
    toSong(id) {
        this.props.history.push("/song/" + id)
    }
    render() {
        const { banner, reclist, newsong } = this.props
        return (
            <div className="recommend" >
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
                {reclist.length > 0 ? <Reclist reclist={reclist} toListDetail={(id) => this.toListDetail(id)}></Reclist> : null}
                {newsong.length > 0 ? <Newsong newsong={newsong} toSong={(id)=>{this.toSong(id)}}></Newsong> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        banner: banner(state),
        reclist: reclist(state),
        newsong: newsong(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reqBanner: () => dispatch(reqBannerAction()),
        reqRecList: () => dispatch(reqRecListAction()),
        reqNewSong: () => dispatch(reqNewSongAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)