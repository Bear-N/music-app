import React, { Component } from 'react'
import { connect } from "react-redux"
import Sheet from "./Sheet/Sheet"
import DetailList from "./DetailList/DetailList"
import { songlist, reqSongListAction, coverimg, covername } from '../../store/modules/details'

class Details extends Component {
    componentDidMount() {
        let id = this.props.match.params.id
        const { reqSongList } = this.props
        reqSongList(id)
    }

    //后退
    toBack() {
        this.props.history.goBack(-1)
    }
    //跳转歌曲
    toSong(id) {
        this.props.history.push("/song/" + id)
    }
    render() {
        const { songlist, coverimg, covername } = this.props
        return (
            <div className="detail">
                <Sheet toBack={() => this.toBack()} coverimg={coverimg} covername={covername}></Sheet>
                <DetailList songlist={songlist} toSong={(id)=>this.toSong(id)}></DetailList>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coverimg: coverimg(state),
        covername: covername(state),
        songlist: songlist(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reqSongList: (id) => dispatch(reqSongListAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)