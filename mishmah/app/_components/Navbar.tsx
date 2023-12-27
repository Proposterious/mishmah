import Link from "next/link";
import Image from "next/image";

import mdaSquare from "../../public/assets/edits/multicolored_dreams_author_square.jpg";



function Navbar() {

    return (
        <header className="flex flex-row justify-start py-2 | bg-zinc-900">
            <Image src={mdaSquare}
            width={76} height={20}
            className="ml-12" 
            alt="placeholder-logo" />

            <nav id="main-nav" className="pr-36 | flex flex-row mx-auto self-center space-x-6">
                <Link href="/" className="text-slate-200 text-xl">
                    Home
                </Link>

                <Link href="/about" className="text-slate-200 text-xl">
                    About
                </Link>

                <Link href="/works" className="text-slate-200 text-xl">
                    Works
                </Link>

                <Link href="/blog" className="text-slate-200 text-xl">
                    Blog
                </Link>
            </nav>

        </header>
     );
}

export default Navbar;