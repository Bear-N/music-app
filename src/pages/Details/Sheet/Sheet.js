import React from 'react'
import "./Sheet.css"
import "../../../assets/css/iconfont.css"

export default function Sheet(props) {
    const { toBack, coverimg, covername } = props
    return (
        <div className="sheet">
            <div className="top">
                <div className="back iconfont icon-fanhui" onClick={() => toBack()}></div>
                <div className="bottom">
                    <img src={coverimg} alt="" />
                    <div className="des">{covername}</div>
                </div>
            </div>
        </div>
    )
}
