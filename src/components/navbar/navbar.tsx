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

            <div className={`w-full flex justify-around bg-white transition-all duration-150 ease-in-out ${showSubHeader ? ' visible h-10 ' : ' invisible h-0 '}`}>
                <div className="w-[40%] flex  items-center justify-center">
                    <img src="/images/phones/s24fe/1.jpg" alt="user image" className="w-[40px] h-[40px] rounded-[50%] mb-1" />
                    <span className="text-sm">user name</span>
                </div>


                <div className="w-[40%] flex items-center justify-center">
                    <button className="bg-[#f3f7fe] text-[#1557c2]  font-bold px-3 py-1.5 border-0 cursor-pointer rounded-[8px] transition duration-300 hover:bg-[#3b82f6] hover:text-white">log in</button>
                </div>
            </div>
        </header>
    )
}