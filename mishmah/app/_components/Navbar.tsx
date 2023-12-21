import Image from "next/image";

import amor from "../../public/amor_amor.jpg";

function Navbar() {
    return (
        <nav id="main-nav" className="flex flex-row justify-center space-x-4 py-6 | bg-zinc-900">
            <Image src={amor}
            width={200} height={20} 
            alt="placeholder-logo" />

            <div className="text-slate-200 text-xl">Home</div>
            <div className="text-slate-200 text-xl">About</div>
            <div className="text-slate-200 text-xl">Works</div>
            <div className="text-slate-200 text-xl">Blog</div>
        </nav>
     );
}

export default Navbar;