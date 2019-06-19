import React from 'react'
import { InputTasksForm } from '../InputTasksForm'
import { addTodoList } from '../../actions'
import { connect } from 'react-redux';


class ConnectInputTask extends React.Component {

    constructor(props) {
        super(props)
        if (this.props.listData) {
            this.state = this.props.listData
        }
        else {
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
        }
        this.fileBox = React.createRef()
        this.changeState = this.changeState.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.tagImportant = this.tagImportant.bind(this)

        //如果有該事件就執行，沒有代表是新增狀態，並重新命名為changeListState
        this.changeListState = type => {
            if (this.props.changeState)
                this.props.changeState(type)
            else
                console.log('新增狀態所以沒有 this.props.changeState')
        }
    }

    changeState(event) {
        
        let value = event.target.value
        if (event.target.name === 'file') {
            value = value.substring(value.lastIndexOf('\\') + 1)          // ??????
        } else if (event.target.name === 'complete') {
            value = event.target.checked

            //一併更新狀態到外面的`List`組件去
            this.changeListState('complete')
        }

        this.setState({ [event.target.name]: value })
    }

    tagImportant() {
        if (this.state.important === '') {
            this.setState({ important: 'Y'})
        } else {
            this.setState({ important: ''})
        }

         //一併更新狀態到外面的`List`組件去
         this.changeListState('important')
    }

    submitTodo(){
        if(this.state.name === ''){
            alert('Please enter the targer!!')
        } else {

            if (this.state.id === ''){
                this.props.addTodoList(this.state)
                alert('Successful')    
            } else {
                this.props.editTodoList(this.state)
                alert('Edit successfully')
            }

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
                <div class={this.state.important === 'Y' ? 'important inputTaskTitle' : 'inputTaskTitle'}>
                    <input name='complete' type="checkbox" class="taskChk"
                        checked={this.state.complete}
                        onChange={this.changeState} />

                    <input name='name' type="text" class="taskTitle" placeholder="Type Something Here…"
                        class={'taskTitle' + (this.state.important === 'Y' ? ' important' : '') + (this.state.complete ? ' complete' : '')}  // 兩種 class 判斷新增的寫法  <-- & div的地方
                        value={this.state.name}
                        onChange={this.changeState} />

                    <i class={this.state.important === 'Y' ? 'fas fa-star fa-lg icon iconImportant' : 'far fa-star fa-lg icon'}
                        onClick={this.tagImportant}></i>

                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm closeAdd={this.props.closeAdd}
                                stateData={this.state}
                                changeState={this.changeState}
                                submitTodo={this.submitTodo}
                                filebox={this.filebox} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        //使用dispatch呼叫事件addTodoList操作store
        addTodoList: todoList => dispatch(addTodoList(todoList))
    }
}

const InputTask = connect(null,mapDispatchToProps)(ConnectInputTask)

export { InputTask }