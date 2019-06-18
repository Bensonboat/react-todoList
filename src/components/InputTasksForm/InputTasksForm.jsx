import React from 'react'
import { InputName } from '../InputName'

class InputTasksForm extends React.Component{
    render(){
        return(
            <div class='InputTasksForm'>
                <div class='InputTask'>
                    <InputName class='fas fa-calendar-alt' inputName='Deadline'/>

                    <div class="inputForm">
                        <input  name='date' 
                                type="date" 
                                class="inputStyle inputDateTime" 
                                value={this.props.stateData.date} />
                        
                        <input  name='time' 
                                type="time" 
                                class="inputStyle inputDateTime" 
                                value={this.props.stateData.time} />
                    </div>

                    <InputName className="fas fa-file" inputName="File" />

                    <div class="inputForm">
                        <input  name='file' 
                                type="file" 
                                class="inputStyle" 
                                ref = {this.props.filebox}              //file 要加上 ref !!!
                                onChange={this.props.changeState} />
                        <br/>
                        <span class="inputStyle">{this.props.stateData.file}</span>
                    </div>

                    <InputName className="far fa-comment-dots" inputName="Comment" />

                    <div class="inputForm">
                        <textarea   name='commit' 
                                    rows="7" 
                                    cols="55" 
                                    class="inputStyle"
                                    value={this.props.stateData.commit}
                                    onChange={this.props.changeState}>

                        </textarea>
                    </div>

                    <div>
                        <button type="button" class="addButton cancelButton" onClick={this.props.closeAdd}> Ｘ Cancel</button>
                        <button type="button" class="addButton saveButton" onClick={this.props.submitTodo}> ＋ Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export { InputTasksForm }