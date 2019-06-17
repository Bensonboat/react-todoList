
import React from "react"
import { TopBlock } from "../TopBlock"
import { HashRouter, Route } from "react-router-dom"
import { MyTasks } from '../MyTasks'


//匯入store和建構動作的事件
import {todoListStore} from "../../store"
import {addTodoList} from "../../actions"


class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <TopBlock />
                    <Route exact path='/' component={MyTasks}></Route>
                </div>
            </HashRouter>
        )
    }
}


//增加幾個測試用的全域函數
window.store = todoListStore
window.addTodlList = addTodoList

export { Main }