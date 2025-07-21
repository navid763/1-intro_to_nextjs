"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadCrumbs() {
    const path = usePathname();
    const paths = path.split("/").slice(1);

    return (
        <div className="bread-crumbs flex gap-1 text-xs text-gray-600 px-4 py-2 mr-6 mt-2">
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
        </div>
    );
}
