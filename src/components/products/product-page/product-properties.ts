import { IProductProperty } from "./specifications";

export const productProperties: IProductProperty[] = [
    {
        general: [
            [
                { region: ["چین", "ریجن", "CN"] },
                { phoneType: ["نوع گوشی موبایل", "نوع گوشی", "mobile"] },
                { os: ["iOS", "سیستم عامل", "ios"] },
                { category: ["پرچم‌دار", "دسته‌بندی", "flagship"] },
                { model: ["iPhone ۱۶ CH", "مدل", "iPhone 16 CH"] },
                { releaseDate: ["۹ سپتامبر ۲۰۲۴", "زمان معرفی", "2024-09-09"] },
                { dimensions: ["۱۴۷.۶x۷۱.۶x۷.۸ میلی‌متر", "ابعاد", "147.6x71.6x7.8"] },
                { weight: ["۱۷۰ گرم", "وزن", 170] },
                { bodyMaterial: ["قاب جلو و پشت از جنس شیشه... / فریم از جنس آلومینیوم", "توضیحات بدنه", "glass_aluminum"] },
                { resistance: [["مقاوم در برابر نفوذ آب", "مقاوم در برابر نفوذ گرد و غبار"], "قابلیت‌های مقاومتی", "ip68"] },
                { simCount: ["دو عدد", "تعداد سیم کارت", 2] },
                { simType: ["سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)", "نوع سیم کارت", "nano"] },
                {
                    keyFeatures: [
                        [
                            "دارای گواهی IP۶۸ و ضد آب تا عمق ۶متری آب به مدت ۳۰ دقیقه",
                            "امکان ارتقا سیستم عامل به iOS نسخه ۱۸.۱",
                            "مجهز به سیستم ارتباطی Ultra Wideband",
                            "مجهز به سیستم پیام اضطراری SOS و مکان یابی توسط ماهواره"
                        ],
                        "ویژگی‌های کلیدی",
                        "uwb,sos,ip68,ios18"
                    ]
                }
            ],
            "مشخصات کلی"
        ]
    },
    {
        display: [
            [
                { technology: ["LTPO Super Retina XDR OLED", "فناوری صفحه‌نمایش", "oled"] },
                { refreshRate: ["۶۰ هرتز", "نرخ بروزرسانی تصویر", 60] },
                { brightness: ["۲۰۰۰ نیت", "روشنایی صفحه‌نمایش", 2000] },
                { size: ["۶.۱ اینچ", "اندازه", 6.1] },
                { screenToBodyRatio: ["۸۶.۸%", "نسبت صفحه‌نمایش به بدنه", 86.8] },
                { aspectRatio: ["۱۹.۵:۹", "نسبت تصویر", "19.5:9"] },
                { resolution: ["۱۱۷۹x۲۵۵۶ پیکسل", "رزولوشن صفحه‌نمایش", "1179x2556"] },
                { pixelDensity: ["۴۶۰ پیکسل بر اینچ", "تراکم پیکسلی", 460] },
                { screenProtection: ["Corning Gorilla Glass", "نوع محافظ صفحه‌نمایش", "gorilla_glass"] },
                { otherFeatures: [["پشتیبانی از HDR۱۰", "پشتیبانی از Dolby Vision"], "سایر قابلیت‌ها", "hdr10,dolby_vision"] }
            ],
            "صفحه‌نمایش"
        ]
    },
    {
        processor: [
            [
                { chipset: ["Apple A۱۸ (۳ nm)", "تراشه", "A18"] },
                { cpu: ["شش هسته‌ای (دو هسته ۴.۰۴ گیگاهرتزی و چهار هسته ۲.۲ گیگاهرتزی)", "پردازنده مرکزی", "6_core"] },
                { frequency: ["۲.۲ - ۴.۰۴ گیگاهرتز", "فرکانس پردازنده", 4.04] },
                { gpu: ["گرافیک ۵ هسته‌ای Apple GPU", "پردازنده گرافیکی", "5_core_gpu"] }
            ],
            "پردازنده"
        ]
    },
    {
        memory: [
            [
                { internal: ["۱۲۸ گیگابایت", "حافظه داخلی", 128] },
                { ram: ["۸ گیگابایت", "رم", 8] },
                { memoryCardSupport: ["فاقد پشتیبانی از کارت حافظه", "پشتیبانی از کارت حافظه", false] },
                { memoryCardStandard: ["NVMe", "استاندارد کارت حافظه", "nvme"] }
            ],
            "حافظه"
        ]
    },
    {
        connectivity: [
            [
                { networks: [["۲G", "۳G", "۴G", "۵G"], "شبکه‌های مخابراتی", "2g,3g,4g,5g"] },
                { bluetoothVersion: ["۵.۳", "نسخه بلوتوث", 5.3] },
                {
                    bluetoothFeatures: [
                        [
                            "پشتیبانی از تکنولوژی A۲DP و اتصال بهتر با سایر وسایل الکترونیکی",
                            "مجهز به تکنولوژی LE و مصرف بهینه باتری"
                        ],
                        "مشخصات بلوتوث",
                        "a2dp,le"
                    ]
                },
                { gps: [["GPS", "GLONASS", "QZSS", "GALILEO", "BDS"], "تکنولوژی‌های مکان‌یابی", "gps,glonass,qzss,galileo,bds"] },
                { radio: ["عدم پشتیبانی", "رادیو", false] },
                { ports: [["USB Type-C ۲.۰", "DisplayPort"], "درگاه‌ها و فناوری‌های ارتباطی", "usb_c,displayport"] },
                { wireless: [["NFC", "QZSS", "Wi-Fi", "بلوتوث"], "شبکه‌های ارتباطی قابل پشتیبانی", "nfc,qzss,wifi,bluetooth"] }
            ],
            "اتصالات"
        ]
    },
    {
        camera: [
            [
                { rearCameraCount: ["۲ ماژول دوربین", "تعداد دوربین‌های پشت", 2] },
                { mainLens: ["عریض", "نوع لنز دوربین اصلی", "wide"] },
                { mainResolution: ["۴۸ مگاپیکسل", "رزولوشن دوربین اصلی", 48] },
                {
                    mainSpecs: [
                        "دریچه دیافراگم f/۱.۶ - فاصله کانونی ۲۶ میلی‌متر - اندازه لنز ۱/۱.۵۶ اینچ - فوکوس Dual Pixel PDAF - لرزشگیر اپتیکال - HDR و Panorama",
                        "مشخصات دوربین اصلی",
                        "f1.6,26mm,1/1.56,pdaf,ois,hdr"
                    ]
                },
                { secondaryLens: ["فوق عریض", "نوع لنز دوربین دوم", "ultrawide"] },
                { secondaryResolution: ["۱۲ مگاپیکسل", "رزولوشن دوربین دوم", 12] },
                {
                    secondarySpecs: [
                        "دریچه f/۲.۲ - فاصله کانونی ۱۳ میلی‌متر - زاویه ۱۲۰ درجه - پیکسل ۰.۷ میکرومتر - فوکوس PDAF",
                        "مشخصات دوربین دوم",
                        "f2.2,13mm,120deg,0.7um,pdaf"
                    ]
                },
                { focusTech: ["PDAF", "فناوری فوکوس", "pdaf"] },
                {
                    video: [
                        [
                            "رزولوشن ۴K با ۶۰fps",
                            "رزولوشن ۱۰۸۰p با ۱۲۰fps",
                            "قابلیت HDR",
                            "پشتیبانی از Dolby Vision HDR تا ۶۰fps",
                            "ضبط استریو"
                        ],
                        "ویژگی‌های فیلم‌برداری",
                        "4k60,1080p120,hdr,dolby_vision,stereo"
                    ]
                },
                { flash: ["Dual LED", "فلش", "dual_led"] },
                { selfieResolution: ["۱۲ مگاپیکسل", "رزولوشن دوربین سلفی", 12] },
                {
                    selfieSpecs: [
                        "دریچه f/۱.۹ - فاصله ۲۳ میلی‌متر - اندازه لنز ۱/۳.۶ اینچ - فوکوس PDAF - سنسور SL ۳D - HDR - ضبط استریو - فیلمبرداری ۴K/۶۰fps و ۱۰۸۰p/۱۲۰fps - لرزشگیر ژیروسکوپی",
                        "مشخصات دوربین سلفی",
                        "f1.9,23mm,1/3.6,pdaf,sl3d,hdr,4k60,gyro"
                    ]
                }
            ],
            "دوربین"
        ]
    },
    {
        sound: [
            [
                { speaker: ["استریو", "اسپیکر", "stereo"] },
                { output: ["USB Type-C", "خروجی صدا", "usb_c"] }
            ],
            "صدا"
        ]
    },
    {
        software: [
            [
                { os: ["iOS", "سیستم عامل", "ios"] },
                { osVersion: ["iOS ۱۸", "نسخه سیستم عامل", "18"] }
            ],
            "نرم‌افزار"
        ]
    },
    {
        sensors: [
            [
                {
                    sensors: [
                        [
                            "قطب‌نما (Compass)",
                            "شتاب‌سنج (Accelerometer)",
                            "مجاورت (Proximity)",
                            "فشارسنج (Barometer)",
                            "ژیروسکوپ (Gyro)",
                            "تشخیص چهره بیومتریک (Face ID)"
                        ],
                        "حس‌گرها",
                        "compass,accelerometer,proximity,barometer,gyro,face_id"
                    ]
                }
            ],
            "حس‌گرها"
        ]
    },
    {
        battery: [
            [
                { capacity: ["۳۵۶۱ میلی‌آمپر ساعت", "ظرفیت باتری", 3561] },
                { type: ["لیتیوم یون", "نوع باتری", "li_ion"] },
                { power: ["۲۵ وات", "توان شارژ", 25] },
                { chargingTypes: [["شارژ با سیم", "شارژ بی‌سیم", "شارژ معکوس"], "قابلیت‌های شارژ", "wired,wireless,reverse"] },
                {
                    details: [
                        "شارژ با سیم با PD۲.۰، ۵۰٪ در ۳۰ دقیقه / شارژ بی‌سیم MagSafe با ۲۵ وات / شارژ بی‌سیم Qi۲ با ۱۵ وات / شارژ معکوس با ۴.۵ وات",
                        "مشخصات باتری",
                        "pd2.0,magsafe25w,qi2_15w,reverse4.5w"
                    ]
                }
            ],
            "باتری"
        ]
    },
    {
        inBox: [
            [
                { accessories: ["کابل USB Type-C", "اقلام همراه", "usb_c_cable"] }
            ],
            "اقلام همراه"
        ]
    }
];