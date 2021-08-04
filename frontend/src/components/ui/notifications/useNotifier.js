import { useDispatch } from 'react-redux'
import { enqueueSnackbar, removeSnackbar } from '../../../store/actionCreators/index'

const useNotifier = () => {
    const dispatch = useDispatch()

    const notify = (message, variant, options, format) => {
        dispatch(enqueueSnackbar(message, variant, options, format))
    }

    const unotify = (key) => {
        dispatch(removeSnackbar(key))
    }

    const dismissAll = () => {
        dispatch(removeSnackbar())
    }
    return { notify, unotify, dismissAll };
}

export default useNotifier;