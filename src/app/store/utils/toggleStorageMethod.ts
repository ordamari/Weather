import { Method } from '@shared/enums/method.enum'
import { METHOD_KEY } from '../constants/method.storage-key'
import getStorageMethod from './getStorageMethod'

export default function () {
    const storageMethod = getStorageMethod()
    const afterToggle =
        storageMethod === Method.Metric ? Method.Imperial : Method.Metric
    localStorage.setItem(METHOD_KEY, afterToggle)
    return afterToggle
}
