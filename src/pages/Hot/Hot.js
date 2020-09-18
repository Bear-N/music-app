import React, { Component } from 'react'
import Show from "./components/Show/Show"
import Hotsong from "./components/Hotsong/Hotsong"
import { connect } from "react-redux"
import {
    hotsong,
    reqHotIdAction
} from "../../store/modules/hot"

class Hot extends Component {
    componentDidMount() {
        const { reqHotId } = this.props
        reqHotId()
    }
    //跳转歌曲
    toSong(id) {
        this.props.history.push("/song/" + id)
    }
    render() {
        const { hotsong } = this.props
        return (
            <div className="hot">
                <Show></Show>
                <Hotsong hotsong={hotsong} toSong={(id)=>this.toSong(id)}></Hotsong>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        hotsong: hotsong(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reqHotId: () => dispatch(reqHotIdAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hot)