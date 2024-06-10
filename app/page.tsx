
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"

export default function Home() {
  return (
   <div className="flex h-screen items-center justify-between">
   <Sidebar/>
   <Content/>
   </div>
  );
}
