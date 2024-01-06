type Todo={
    title:string,
    description:string,
    done: boolean,
    id:string
}
type UpdateTodoInput=Partial<Todo>
function updateTdo(id:string,newProps:UpdateTodoInput){

}
updateTdo("1",{done:true});