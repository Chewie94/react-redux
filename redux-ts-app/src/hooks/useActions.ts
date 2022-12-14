import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { ActionCreatorsÂ } from '../store/action-creators'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
