## Directory structure
```
src
|-- components
|   |-- common
|   |   |-- TaskForm.tsx
|   |   |-- TaskItem.tsx
|   |   |-- PriorityBadge.tsx
|   |-- kanban
|   |   |-- KanbanBoard.tsx
|   |   |-- KanbanColumn.tsx
|   |-- calendar
|   |   |-- CalendarPage.tsx
|   |   |-- CalendarView.tsx
|   |-- table
|   |   |-- TablePage.tsx
|   |   |-- TaskTable.tsx
|   |-- App.tsx
|-- hooks
|   |-- useXXX.ts
|-- reducers
|   |-- xxxReducer.ts
|-- context
|   |-- xxxContext.ts
|-- router
|   |-- route.ts
|   |-- AppRouter.tsx
|-- styles
|   |-- // 
|-- index.tsx

```

### Kanban -> 進捗に応じて、初期処理で進捗ごとの配列を作成