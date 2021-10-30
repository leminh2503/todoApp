import React, {useState} from 'react';
import EditTask from './EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray, taskList, setTaskList}) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{backgroundColor: colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{backgroundColor: colors[index%5].secondaryColor, borderRadius: "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{position: "absolute", right : "20px", bottom : "20px"}}>
                    <i class = "far fa-edit mr-3" style={{color : colors[index%5].primaryColor, cursor : "pointer",paddingRight: "20px"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{color : colors[index%5].primaryColor, cursor : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;