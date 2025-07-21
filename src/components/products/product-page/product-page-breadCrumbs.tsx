"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadCrumbs() {
    const path = usePathname();
    let paths = path.split("/");
    paths = paths.slice(1, paths.length - 1);

    return (
        <div className="w-full flex justify-start gap-1 text-xs text-gray-600 px-4 py-2 mr-6 mt-2">
            <Link href="/">Home</Link> /
            {paths.map((pathName, index) => {
                const href = '/' + paths.slice(0, index + 1).join('/');

                return (
                    <span className="flex items-center gap-1" key={index}>
                        <Link href={href}>{pathName}</Link>
                        {index < paths.length - 1 && <span>/</span>}
                    </span>
                );
            })}
            <span>/</span>
            <Link href="#">product name</Link>
        </div>
    );
}
