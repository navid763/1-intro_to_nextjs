"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./navbar.css";
import CartOnHeader from "../cart/cart-icon";

export default function Navbar() {
    const navLinks = [
        { href: "/", title: "Home" },
        { href: "/products", title: "Products" }
    ]

    const pathName = usePathname();

    return (
        <nav dir="ltr">
            <div className="navs">
                {navLinks.map((nav, i) => {
                    return <Link href={nav.href} key={i} className={pathName === nav.href ? 'selected' : ''}>{nav.title}</Link>
                })}
                <div className="w-0.5 h-6 border-l border-neutral-200"></div>
                <CartOnHeader />
            </div>
            <div className="logo-container">
                <Link href={"http://localhost:3000"}>
                    <Image src={"/images/logo.png"} width={150} height={90} alt="logo" className="mr-6" />
                </Link>
            </div>
        </nav>
    )
}