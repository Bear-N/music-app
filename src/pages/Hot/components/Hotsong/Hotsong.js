import React from 'react'
import "./Hotsong.css"
import "../../../../assets/css/iconfont.css"
import {filterorder} from "../../../../filters/index"

export default function Hotsong(props) {
    const { hotsong, toSong } = props
    return (
        <div className="hotsong">
            <ul>
                {
                    hotsong.map((item, index) => {
                        return (
                            <li key={item.id} onClick={() => { toSong(item.id) }}>
                                <div className="num">{filterorder(index + 1)}</div>
                                <div className="left">
                                    <div className="name">{item.name}</div>
                                    <div className="bottom">
                                        <span>SQ</span>
                                        <span>
                                            {
                                                item.ar.map((i, num) => {
                                                    if (num === item.ar.length - 1) {
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
            </ul>
        </div>
    )
}
