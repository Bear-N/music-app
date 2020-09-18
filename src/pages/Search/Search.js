import React, { Component } from 'react'
import { connect } from "react-redux"
import SearchBox from "./components/SearchBox/SearchBox"
import { defaultsearch, reqDefaultAction, inp, searchlist, reqSearchListAction, changeInpAction } from '../../store/modules/search'

class Search extends Component {
    componentDidMount() {
        const { reqDefault } = this.props
        reqDefault()
    }
    //改变关键字以及请求搜索列表
    change(e) {
        const { reqSearchList, changeInp } = this.props
        changeInp(e)
        reqSearchList()
    }
    //跳转歌曲
    toSong(id) {
        this.props.history.push("/song/" + id)
    }
    //点击关键字
    toInput(val) {
        this.change(val)
    }
    render() {
        const { defaultsearch, inp, searchlist } = this.props
        return (
            <div>
                <SearchBox
                    defaultsearch={defaultsearch}
                    inp={inp}
                    searchlist={searchlist}
                    toSong={(id) => this.toSong(id)}
                    toInput={(val) => this.toInput(val)}
                    change={this.change.bind(this)}>
                </SearchBox>
            </div>
        )
    }
}

const mapStateToProps = state => {

    return {
        defaultsearch: defaultsearch(state),
        inp: inp(state),
        searchlist: searchlist(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        reqDefault: () => dispatch(reqDefaultAction()),
        changeInp: (val) => dispatch(changeInpAction(val)),
        reqSearchList: () => dispatch(reqSearchListAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)