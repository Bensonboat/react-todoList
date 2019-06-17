import React from 'react'
import { InputTasksForm } from '../InputTasksForm'
import { addTodoList } from '../../actions'


class InputTask extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            date: '',
            time: '',
            file: '',
            commit: '',
            important: '',
            complete: false
        }
        this.fileBox = React.createRef()
        this.changeState = this.changeState.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.tagImportant = this.tagImportant.bind(this)
    }

    changeState(event) {
        let value = event.target.value
        if (event.target.name === 'file') {
            value = value.substring(value.lastIndexOf('\\') + 1)          // ??????
        } else if (event.target.name === 'completed') {
            value = event.target.checked
        }

        this.setState({ [event.target.name]: value })
    }

    tagImportant() {
        if (this.state.important == '') {
            this.state.important == 'Y'
        } else {
            this.state.important == ''
        }
    }

    submitTodo(){
        if(this.state.name == ''){
            alert('Please enter the targer!!')
        } else {
            this.props.addTodoList(this.state)  // 從哪裡傳進來的 ??  props 用處? redux算是這個的父組件??
            alert('Successful')
            this.props.closeAdd()
            this.setState({
                id:'',
                name:'',
                date:'',
                time:'',
                file:'',
                commit:'',
                important:'',
                complete:false
            })

            //不受控組件另外處理
            this.filebox.current.value = ''

        }
    }

    render() {
        return (
            <div>
                <div class={this.state.important == 'Y' ? 'important inputTaskTitle' : 'inputTaskTitle'}>
                    <input name='completed' type="checkbox" class="taskChk"
                        checked={this.state.complete}
                        onChange={this.changeState} />

                    <input name='name' type="text" class="taskTitle" placeholder="Type Something Here…"
                        class={'taskTitle' + (this.state.important == 'Y' ? 'important' : '') + (this.state.completed ? 'complete' : '')}  // 兩種 class 判斷新增的寫法  <-- & div的地方
                        value={this.state.name}
                        onChange={this.changeState} />

                    <i class={this.state.important == 'Y' ? 'fas fa-star fa-lg icon iconImportant' : 'far fa-star fa-lg icon'}
                        onClick={this.tagImportant}></i>

                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm closeAdd={this.props.closeAdd} />
            </div>
        )
    }
}

export { InputTask }