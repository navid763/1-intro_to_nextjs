"use client"
import { useState, useEffect } from "react";

export default function Tabs() {
    const tabs = [
        { label: "معرفی", id: "introduction" },
        { label: "بررسی تخصصی", id: "review" },
        { label: "مشخصات", id: "specifications" },
        { label: "دیدگاه‌ها", id: "comments" }
    ];
    const [activeTab, setActiveTab] = useState(tabs[0].label);

    const clickHandler = (label: string) => {
        setActiveTab(label);
        const targetTab = tabs.find(tab => tab.label === label);
        if (targetTab) {
            const element = document.getElementById(targetTab.id);
            if (element) {
                const tabsElement = document.getElementById('tabs-container');
                const offset = tabsElement ? tabsElement.offsetHeight : 0;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset - 20;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    };


    const handleScroll = () => {
        const sections = tabs.map(tab => ({
            label: tab.label,
            id: tab.id,
            element: document.getElementById(tab.id)
        })).filter(s => s.element !== null);

        let found = false;

        for (let i = sections.length - 1; i >= 0; i--) {
            const rect = sections[i].element!.getBoundingClientRect();
            if (rect.top <= 100) {
                setActiveTab(sections[i].label);
                found = true;
                break;
            }
        }

        // اگر هیچ تب فعال نشد (مثلاً انتهای صفحه)، آخرین تب را فعال کن
        if (!found && sections.length > 0) {
            const lastSection = sections[sections.length - 1];
            const lastRect = lastSection.element!.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            if (window.scrollY + viewportHeight >= document.body.scrollHeight - 5) {
                // در انتهای کامل صفحه هستیم
                setActiveTab(lastSection.label);
            }
        }
    };



    // اضافه کردن event listener برای اسکرول
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // پاک کردن event listener هنگام حذف کامپوننت
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div id="tabs-container" className="w-[95%] flex justify-start gap-3 px-4 border-b border-neutral-300">

            {tabs.map(tab => {
                return (
                    <div className="flex flex-col h-8 justify-between cursor-pointer" onClick={() => clickHandler(tab.label)} key={tab.id}>
                        <span className="text-neutral-600 px-2 text-sm">{tab.label}</span>
                        <div className={`w-full h-1 rounded-t-md ${activeTab == tab.label ? "bg-red-600" : ""} transition-all duration-200 `}></div>
                    </div>
                )
            })}

        </div>
    )
}