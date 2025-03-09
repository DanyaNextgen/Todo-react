import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2"><CiSearch />Search Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          className="border border-gray-300 rounded-md p-2"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </CardContent>
    </Card>
  )
}

export default Search

