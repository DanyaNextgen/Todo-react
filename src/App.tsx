import { useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Search from "@/components/custom/Search"
import Tasks from "@/components/custom/Tasks"
import Form from "@/components/custom/Form"
import { Todo } from "@/types"

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo | null>(null);
  const [search, setSearch] = useState("");

  function handleTodoSubmit(title: string, completed: boolean) {
	editTodo
	  ? (setTodos(
		  todos.map((todo) =>
			todo.id === editTodo.id ? { ...todo, title, completed } : todo
		  )
		),
		setEditTodo(null))
	  : setTodos([
		  ...todos,
		  {
			id: Math.random(),
			title,
			completed,
			created_at: new Date().toISOString(),
		  }
		])
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase().trim())
  )

  return (
    <div className="w-full h-screen bg-[#0A0A0B] text-white">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="p-4">
          <div className="space-y-4">
            <Search search={search} setSearch={setSearch} />
            <Tasks
              todos={filteredTodos}
              handleEdit={setEditTodo}
              handleDelete={deleteTodo}
            />
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel className="p-4">
          <Form editTodo={editTodo} onSubmit={handleTodoSubmit} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default App;
