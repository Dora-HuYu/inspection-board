# 设备巡检任务看板

这是一个React 入门项目，用于展示我第一周学习 B站【2025】React入门实战教程 React 前 1–7 节课程的成果。
https://www.bilibili.com/video/BV1CQdWYDEG7?utm_source=chatgpt.com&vd_source=9051b8474cb624f30e02488e37827d4b&spm_id_from=333.788.videopod.episodes

---

## 项目简介

本项目模拟一个简单的设备巡检任务看板，支持用户添加设备任务、查看任务清单、删除任务等基础功能。

---

## 项目功能

- 添加新的巡检任务（设备名称 + 所属区域）
- 展示当前所有任务列表
- 删除指定任务
- 显示任务总数量
- 若无任务，显示提示信息

---

## 所用技术
React JSX：使用 JSX 构建组件结构 
useState：用于状态管理：任务列表、输入框  
props：父组件传参给子组件
事件绑定 onClick：添加 / 删除按钮操作 
列表渲染 map：动态渲染任务项列表
条件渲染：若任务为空显示提示信息
组件化：App/ InspectionList/ InspectionItem结构

---

## 项目结构
src/
├── App.jsx
├── main.jsx
└── components/
    ├── InspectionList.jsx
    └── InspectionItem.jsx

## 如何运行本项目

### 1. 克隆代码
```bash
git clone https://github.com/your-username/inspection-board.git
cd inspection-board

### 2. 安装依赖
npm install

### 3. 启动开发服务器
npm start

