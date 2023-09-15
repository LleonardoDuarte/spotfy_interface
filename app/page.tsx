import {
  Home as Homeicon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <Homeicon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-200"
            >
              <Library />
              Your library
            </a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3 ">
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Hot Hits brasil
            </a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Creme
            </a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Hip Hop 2000/2010
            </a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Sensação
            </a>
            <a href="" className="text-small text-zinc-400">
              Aquelas
            </a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Melhores do Samba
            </a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Revelação ao vivo no Morro
            </a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Antigas
            </a>
            <a href="" className="text-small text-zinc-400 hover:text-zinc-100">
              Rap
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex flex-items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <a
              href="#"
              className="bg-white/10 flex items-center gap-4 group rounded overflow-hidden hover:bg-white/20 transition-colors"
            >
              <img className="w-21 h-24" src="/album.jpg" alt="capa" />
              <strong>Nada como um dia</strong>
              <button className="p-4 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 group transition-colors"
            >
              <img className="w-21 h-24" src="/album2.jpg" alt="capa" />
              <strong>Get rich or die trying</strong>
              <button className="p-4 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 group transition-colors"
            >
              <img className="w-21 h-24" src="/album3.jpg" alt="capa" />
              <strong>Me against the world</strong>
              <button className="p-4 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 group transition-colors"
            >
              <img className="w-21 h-24" src="/album4.jpg" alt="capa" />
              <strong>Sobrevivendo no inferno</strong>
              <button className="p-4 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 group transition-colors"
            >
              <img className="w-21 h-24" src="/album5.jpg" alt="capa" />
              <strong>Rap é compromisso</strong>
              <button className="p-4 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/10 rounded flex items-center gap-4 hover:bg-white/20 group transition-colors"
            >
              <img className="w-21 h-24" src="/album6.jpg" alt="capa" />
              <strong>509-e</strong>
              <button className="p-4 rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
