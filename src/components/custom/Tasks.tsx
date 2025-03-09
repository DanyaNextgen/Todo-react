import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Todo } from "@/types"
import { MdEdit } from "react-icons/md"
import { TiDelete } from "react-icons/ti"

interface TasksProps {
  todos: Todo[]
  handleEdit: (todo: Todo) => void
  handleDelete: (id: number) => void
}

const Tasks: React.FC<TasksProps> = ({ todos, handleEdit, handleDelete }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-md bg-white text-black">
      <Table className="min-w-full">
        <TableHeader className="bg-gray-200">
          <TableRow>
            <TableCell className="font-semibold">Title</TableCell>
            <TableCell className="font-semibold">Created At</TableCell>
            <TableCell className="font-semibold">Completed</TableCell>
            <TableCell className="font-semibold">Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id} className="hover:bg-gray-100">
              <TableCell>{todo.title}</TableCell>
              <TableCell>{new Date(todo.created_at).toLocaleString()}</TableCell>
              <TableCell>{todo.completed ? "True" : "False"}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button  onClick={() => handleEdit(todo)} className="text-[#007FFF] bg-white hover:bg-white cursor-pointer">
					          Edit <MdEdit /> 
                  </Button>
                  <Button onClick={() => handleDelete(todo.id)} className="text-[#FF3F3F] bg-white hover:bg-white cursor-pointer">
                    Delete <TiDelete />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Tasks;

