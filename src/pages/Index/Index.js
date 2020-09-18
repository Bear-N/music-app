import React, { Component } from 'react'
import { Switch, Redirect, Route, NavLink } from "react-router-dom"
import asyncC from "../../utils/asyncComponent"
import Header from "../../components/Header/Header"
import "./Index.css"

const Recommend = asyncC(() => import("../Recommend/Recommend"))
const Hot = asyncC(() => import("../Hot/Hot"))
const Search = asyncC(() => import("../Search/Search"))

export default class Index extends Component {
    render() {
        return (
            <div className="index">
                <Header></Header>

                <div className="tab">
                    <NavLink to="/index/recommend" activeClassName="select">推荐</NavLink>
                    <NavLink to="/index/hot" activeClassName="select">热歌榜</NavLink>
                    <NavLink to="/index/search" activeClassName="select">搜索</NavLink>
                </div>

                <Switch>
                    <Route path="/index/recommend" component={Recommend}></Route>
                    <Route path="/index/hot" component={Hot}></Route>
                    <Route path="/index/search" component={Search}></Route>
                    <Redirect to="/index/recommend"></Redirect>
                </Switch>
            </div>
        )
    }
}
