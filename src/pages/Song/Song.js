import React, { Component } from 'react'
import { connect } from "react-redux"
import Cover from "./Cover/Cover"
import {
    lyric,
    index,
    isplay,
    songid,
    reqLyricAction,
    changeIndexAction,
    changePlayAction,
    changeSongIdAction
} from '../../store/modules/song'


class Song extends Component {
    constructor() {
        super()
        this.outer = React.createRef()
        this.inner = React.createRef()
        this.audio = React.createRef()
    }
    componentDidMount() {
        const { reqLyric, changeSongId } = this.props
        let id = this.props.match.params.id
        changeSongId(id)
        reqLyric(id)
    }
    //后退
    toBack() {
        this.props.history.goBack()
    }
    componentWillUnmount() {
        const { changePlay } = this.props
        changePlay(false)
        let audio = this.audio.current;
        audio.ontimeupdate = null
    }
    //歌曲播放
    playAudio() {
        const { lyric, changeIndex, isplay, changePlay } = this.props
        let audio = this.audio.current;
        let inner = this.inner.current;

        //改变播放状态
        changePlay(!isplay)
        !isplay ? audio.play() : audio.pause()
        console.log(!isplay);


        //播放触发
        audio.ontimeupdate = () => {
            let outerH = this.outer.current.clientHeight ? this.outer.current.clientHeight : 0
            let itemHeight = outerH / 6;

            //当前播放时间
            let currentTime = audio.currentTime;//歌曲当前时间 80.132324--'01:20' 
            // let duration = audio.duration;//歌曲总时间 183.12332

            let transTime = (Math.floor(currentTime / 60) + '').padStart(2, '0') + ":" + (Math.floor(currentTime % 60) + '').padStart(2, '0')
            // let transTime2 = (Math.floor(duration / 60) + '').padStart(2, '0') + ":" + (Math.floor(duration % 60) + '').padStart(2, '0')
            let index = lyric.findIndex(item => item.time === transTime);
            if (index === -1) {
                return;
            }

            changeIndex(index)
            inner.style.top = -(index - 3) * itemHeight + "px"
        }
    }
    tstart(e) {
        this.startY = e.touches[0].clientY;
        this.endY = 0;
    }
    tmove(e) {
        this.endY = e.touches[0].clientY;
        console.log("move");

    }
    tend(e) {
        let inner = this.inner.current;
        let audio = this.audio.current;
        let outerH = this.outer.current.clientHeight;
        let itemHeight = outerH / 6;
        const { lyric, index, changeIndex } = this.props
        //如果endY是0，代表没有走过move函数，所以是个点击
        if (this.endY === 0) {
            return;
        }
        let idx = index
        if (this.startY > this.endY + 30) {//上
            idx += 3
            if (idx >= lyric.length - 1) {
                idx = lyric.length - 1
            }
        }
        if (this.endY > this.startY + 30) {//下
            idx -= 3
            if (idx <= 0) {
                idx = 0
            }
        }
        changeIndex(idx)
        inner.style.top = -(idx - 3) * itemHeight + "px"
        let time = lyric[idx].time;
        let transTime = parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);//66
        audio.currentTime = transTime;
    }
    render() {
        const { lyric, index, songid, isplay } = this.props
        return (
            <div>
                <Cover
                    lyric={lyric}
                    index={index}
                    songid={songid}
                    outer={this.outer}
                    inner={this.inner}
                    audio={this.audio}
                    isplay={isplay}
                    tstart={(e) => this.tstart(e)}
                    tmove={(e) => this.tmove(e)}
                    tend={(e) => this.tend(e)}
                    playAudio={() => this.playAudio()}
                    toBack={() => this.toBack()}>
                </Cover>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);

    return {
        songid: songid(state),
        lyric: lyric(state),
        index: index(state),
        isplay: isplay(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reqLyric: (id) => dispatch(reqLyricAction(id)),
        changeIndex: (index) => dispatch(changeIndexAction(index)),
        changePlay: (isplay) => dispatch(changePlayAction(isplay)),
        changeSongId: (id) => dispatch(changeSongIdAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song)
