/**
 * Created by ever on 2020/8/29.
 */
export const getRandomId = ()=> Math.random().toString(36).substr(2)
export const isEmpty = (obj)=>{return Object.keys(obj).length === 0}
