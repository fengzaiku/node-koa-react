
import {withRouter} from "react-router"
import Child from "../components/child"
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    return state;
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // dispatch1: () => {
        //     dispatch(actionCreator)
        // }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Child))
