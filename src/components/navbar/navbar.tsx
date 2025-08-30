"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import CartOnHeader from "../cart/cart-icon";
import "./navbar.css";

export default function Navbar() {
    const navLinks = [
        { href: "/", title: "Home" },
        { href: "/products", title: "Products" }
    ]

    const [showSubHeader, setShowSubHeader] = useState(true);
    // به جای useState از useRef استفاده می‌کنیم
    const lastScrollY = useRef(0);


    const headerRef = useRef<HTMLElement>(null); // یک ref برای نگه‌داری ارجاع به تگ heade

    const pathName = usePathname();

    useEffect(() => {
        const scrollControl = () => {
            const currentScrollY = window.scrollY;

            // اگر در بالای صفحه هستیم، همیشه نوار را نشان بده
            if (currentScrollY <= 10) {
                setShowSubHeader(true);
            }
            // اگر به پایین اسکرول می‌کنیم، نوار را نشان بده
            else if (currentScrollY > lastScrollY.current) {
                setShowSubHeader(true);
            }
            // اگر به بالا اسکرول می‌کنیم، نوار را پنهان کن
            else {
                setShowSubHeader(false);
            }
            // مقدار آخرین اسکرول را در ref ذخیره کن
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", scrollControl);

        return () => {
            window.removeEventListener("scroll", scrollControl)
        };

    }, []); // dependency array را خالی می‌گذاریم تا فقط یک بار اجرا شود



    useEffect(() => {
        // یک تایمر تعریف می‌کنیم تا بعدا بتوانیم آن را پاک کنیم
        const timer = setTimeout(() => {
            if (headerRef.current) {
                const height = headerRef.current.offsetHeight;
                document.documentElement.style.setProperty('--header-height', `${height}px`);
            }
        }, 160); // کمی بیشتر از زمان انیمیشن (150ms)

        // از اجرای تایمرهای اضافی جلوگیری می‌کند
        return () => {
            clearTimeout(timer);
        };

    }, [showSubHeader]);

    return (
        <header ref={headerRef} className="sticky top-0 z-40 bg-white shadow-md">
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

            <div className={`w-full  bg-white transition-all duration-150 ease-in-out ${showSubHeader ? ' visible h-10 ' : ' invisible h-0 '}`}>
                categories
            </div>
        </header>
    )
}