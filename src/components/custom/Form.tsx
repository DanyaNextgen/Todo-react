import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Todo } from "@/types"
import { IoMdAddCircle } from "react-icons/io"
import { MdEdit } from "react-icons/md"
import { CiSaveDown1 } from "react-icons/ci";

interface TodoFormProps {
  editTodo: Todo | null
  onSubmit: (title: string, completed: boolean) => void
}

const Form: React.FC<TodoFormProps> = ({ editTodo, onSubmit }) => {
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
	editTodo
	  ? (setTitle(editTodo.title), setCompleted(editTodo.completed))
	  : (setTitle(""), setCompleted(false))
  }, [editTodo])

  function handleSubmit(e: any) {
    e.preventDefault()
    if (!title.trim()) return
    onSubmit(title, completed)
    setTitle("")
    setCompleted(false)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          {editTodo ? <>Edit Todo <MdEdit /></> : <>Add Todo <IoMdAddCircle /></>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task"
            className="border border-gray-300 rounded-md p-2"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="h-4 w-4"
            />
            <span>Completed</span>
          </label>
          <Button type="submit" className="size-[sm] bg-[#007FFF] hover:bg-[#007FFF] cursor-pointer">
            {editTodo ? <>Add Todo <CiSaveDown1 /></> : <>Add Todo <IoMdAddCircle /></>}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default Form

