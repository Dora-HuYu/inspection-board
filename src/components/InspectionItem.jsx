import React from 'react'

function InspectionItem({ task, index, deleteTask }) {
  return (
    <li
      style={{
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}
    >
      <div><strong>设备名称：</strong>{task.deviceName}</div>
      <div><strong>所属区域：</strong>{task.location}</div>
      <div><strong>状态：</strong>{task.status}</div>
      <button onClick={() => deleteTask(index)} style={{ marginTop: '5px' }}>
        删除任务
      </button>
    </li>
  )
}

export default InspectionItem
