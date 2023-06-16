import { Method } from '@shared/enums/method.enum'
import { METHOD_KEY } from '../constants/method.storage-key'

export default function () {
    const storageMethod = localStorage.getItem(METHOD_KEY) as Method
    const values = Object.values(Method)
    if (values.includes(storageMethod as unknown as Method)) {
        return storageMethod
    }
    return Method.Metric
}
