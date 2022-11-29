const initial_data={
    list:[]
}
const reducer=(state=initial_data,action)=>{
      switch(action.type){
          case "ADD_TODO_SUCCESS":
              const {id,inputval}=action.payload
              return{
                  ...state,
                  list:[
                      ...state.list,
                      {
                          id:id,
                          inputval:inputval,
                      }
                  ]
              }
            case "ADD_TODO_STARTED":
                return{
                    ...state
                }
                case "ADD_TODO_FAILURE":
                    return{
                        ...state,
                        msg:"fail"
                    }
                    case "DELETE_TODO":
                        const Remaining_item=state.list.filter((item)=> item.id!==action.id)
                        return{
                            ...state,
                            list:Remaining_item
                        }
                        case "UPDATE_TODO":
                            return{
                                ...state,

                            }
                
         default: return state     
      }
}
export default reducer