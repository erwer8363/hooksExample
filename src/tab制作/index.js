/**
 * Created by ever on 2020/8/16.
 */
import React, {Fragment, useState} from 'react'
import PotatoCount from './PotatoCount'
export default function App() {
  const [render,setRender] = useState('')

  const showComponent = (name)=>{
    setRender(name)
  }

  const renderComponent = ()=>{
    switch (render){
      case 'showHideTotalCount':return <PotatoCount/>
      case 'showHidePotatoCount':return <PotatoCount/>
      case 'showHideMission': return <PotatoCount/>
      default: return <PotatoCount/>
    }
  }

    return (
      <Fragment>
        <ul>
          <li onClick={()=>showComponent('showHideTotalCount')}>统计</li>
          <li onClick={()=>showComponent('showHideTotalCount')}>番茄历史</li>
          <li onClick={()=>showComponent('showHideTotalCount')}>累计完成11个任务</li>
          <li onClick={()=>showComponent('showHideTotalCount')}>统计</li>
        </ul>
        <div>
          {renderComponent()}
        </div>
      </Fragment>
    )
}
