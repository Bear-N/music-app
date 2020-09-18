import React from 'react'
import { SearchBar } from 'antd-mobile';
import "./SearchBox.css"
import { filterorder } from "../../../../filters/index"

export default function SearchBox(props) {
    const { defaultsearch, inp, change, searchlist, toSong, toInput } = props

    return (
        <div className="searchbox">
            <SearchBar
                placeholder="请输入关键词"
                value={inp}
                onChange={(val) => change(val)} />
            {inp === "" ? <ul className="default">
                {
                    defaultsearch.map(item => {
                        return (
                            <li key={item.first} onClick={() => toInput(item.first)}>{item.first}</li>
                        )
                    })
                }
            </ul> : null}

            {inp !== "" ? <ul className="searchlist">
                {
                    searchlist.map((item, index) => {
                        return (
                            <li key={item.id} onClick={() => { toSong(item.id) }}>
                                <div className="num">{filterorder(index + 1)}</div>
                                <div className="left">
                                    <div className="name">{item.name}</div>
                                    <div className="bottom">
                                        <span>SQ</span>
                                        <span>
                                            {
                                                item.artists.map((i, num) => {
                                                    if (num === item.artists.length - 1) {
                                                        return i.name + "-" + item.name
                                                    } else {
                                                        return i.name + "/"
                                                    }
                                                })
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="right">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul> : null}
        </div>
    )
}
