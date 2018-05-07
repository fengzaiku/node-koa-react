import {combineReducers} from 'redux'

const updateMusicProgress=function(state={currentTime:0, percentage:false},action){
    switch(action.type){
        case 'UPDATEPROGRESS':
            return Object.assign({},state,action.date)
        default:
            return state;
    }
}
export default combineReducers({
    updateMusicProgress
})