/**
 * Created by ever on 2020/11/28.
 */
const slow = (comp, delay = 1000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(comp), delay)
  })
}
export default slow
