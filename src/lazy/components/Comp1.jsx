/**
 * Created by ever on 2020/11/28.
 */
import React from 'react'

export default function Comp1({suffix = ''}) {
  return (
    <div
      style={{
        height: 50,
        lineHeight: '50px',
        width: '100%',
        border: '1px solid',
      }}
    >
      加载成功{suffix}
    </div>
  )
}
