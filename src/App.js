import React, { useState } from 'react'
import InspectionList from './components/InspectionList'

function App() {
  const [tasks, setTasks] = useState([])
  const [deviceName, setDeviceName] = useState('')
  const [location, setLocation] = useState('')

  const addTask = () => {
    if (deviceName.trim() === '' || location.trim() === '') return
    const newTask = {
      deviceName,
      location,
      status: '待巡检'
    }
    setTasks([...tasks, newTask])
    setDeviceName('')
    setLocation('')
  }

  const deleteTask = (index) => {
    const updated = [...tasks]
    updated.splice(index, 1)
    setTasks(updated)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>设备巡检任务看板</h2>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="设备名称"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="所属区域"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={addTask} style={{ marginLeft: '10px' }}>添加任务</button>
      </div>

      {tasks.length === 0 ? (
        <p>暂无巡检任务，请添加。</p>
      ) : (
        <>
          <InspectionList tasks={tasks} deleteTask={deleteTask} />
          <p style={{ marginTop: '10px' }}>当前任务数量：{tasks.length}</p>
        </>
      )}
    </div>
  )
}

export default App
