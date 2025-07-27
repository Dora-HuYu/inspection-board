import React from 'react'
import InspectionItem from './InspectionItem'

function InspectionList({ tasks, deleteTask }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <InspectionItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  )
}

export default InspectionList
