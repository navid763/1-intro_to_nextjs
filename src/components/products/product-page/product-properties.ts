import { ProductProperties } from "./specifications";

export const productProperties: ProductProperties = {
    general: {
        label: "مشخصات کلی",
        specs: {
            region: {
                labelFa: "ریجن",
                labelEn: "Region",
                value: "چین",
                valueEn: "چین",
                slug: "region",
                code: "CN",
                type: "text"
            },
            phoneType: {
                labelFa: "نوع گوشی",
                labelEn: "Phone Type",
                value: "نوع گوشی موبایل",
                valueEn: "نوع گوشی موبایل",
                slug: "phone-type",
                code: "mobile",
                type: "text"
            },
            os: {
                labelFa: "سیستم عامل",
                labelEn: "Os",
                value: "iOS",
                valueEn: "iOS",
                slug: "os",
                code: "ios",
                type: "text"
            },
            category: {
                labelFa: "دسته‌بندی",
                labelEn: "Category",
                value: "پرچم‌دار",
                valueEn: "پرچم‌دار",
                slug: "category",
                code: "flagship",
                type: "text"
            },
            model: {
                labelFa: "مدل",
                labelEn: "Model",
                value: "iPhone ۱۶ CH",
                valueEn: "iPhone ۱۶ CH",
                slug: "model",
                code: "iPhone 16 CH",
                type: "text"
            },
            releaseDate: {
                labelFa: "زمان معرفی",
                labelEn: "Release Date",
                value: "۹ سپتامبر ۲۰۲۴",
                valueEn: "۹ سپتامبر ۲۰۲۴",
                slug: "release-date",
                code: "2024-09-09",
                type: "text"
            },
            dimensions: {
                labelFa: "ابعاد",
                labelEn: "Dimensions",
                value: "۱۴۷.۶x۷۱.۶x۷.۸ میلی‌متر",
                valueEn: "۱۴۷.۶x۷۱.۶x۷.۸ میلی‌متر",
                slug: "dimensions",
                code: "147.6x71.6x7.8",
                type: "text"
            },
            weight: {
                labelFa: "وزن",
                labelEn: "Weight",
                value: "۱۷۰ گرم",
                valueEn: 170,
                slug: "weight",
                code: 170,
                type: "number"
            },
            bodyMaterial: {
                labelFa: "توضیحات بدنه",
                labelEn: "Body Material",
                value: "قاب جلو و پشت از جنس شیشه / فریم از جنس آلومینیوم",
                valueEn: "قاب جلو و پشت از جنس شیشه / فریم از جنس آلومینیوم",
                slug: "body-material",
                code: "glass_aluminum",
                type: "text"
            },
            resistance: {
                labelFa: "قابلیت‌های مقاومتی",
                labelEn: "Resistance",
                value: [
                    "مقاوم در برابر نفوذ آب",
                    "مقاوم در برابر نفوذ گرد و غبار"
                ],
                valueEn: [
                    "مقاوم در برابر نفوذ آب",
                    "مقاوم در برابر نفوذ گرد و غبار"
                ],
                slug: "resistance",
                code: "ip68",
                type: "array"
            },
            simCount: {
                labelFa: "تعداد سیم کارت",
                labelEn: "Sim Count",
                value: "دو عدد",
                valueEn: 2,
                slug: "sim-count",
                code: 2,
                type: "number"
            },
            simType: {
                labelFa: "نوع سیم کارت",
                labelEn: "Sim Type",
                value: "سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)",
                valueEn: "سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)",
                slug: "sim-type",
                code: "nano",
                type: "text"
            },
            keyFeatures: {
                labelFa: "ویژگی‌های کلیدی",
                labelEn: "Key Features",
                value: [
                    "دارای گواهی IP۶۸ و ضد آب تا عمق ۶متری آب به مدت ۳۰ دقیقه",
                    "امکان ارتقا سیستم عامل به iOS نسخه ۱۸.۱",
                    "مجهز به سیستم ارتباطی Ultra Wideband",
                    "مجهز به سیستم پیام اضطراری SOS و مکان یابی توسط ماهواره"
                ],
                valueEn: [
                    "دارای گواهی IP۶۸ و ضد آب تا عمق ۶متری آب به مدت ۳۰ دقیقه",
                    "امکان ارتقا سیستم عامل به iOS نسخه ۱۸.۱",
                    "مجهز به سیستم ارتباطی Ultra Wideband",
                    "مجهز به سیستم پیام اضطراری SOS و مکان یابی توسط ماهواره"
                ],
                slug: "key-features",
                code: "uwb,sos,ip68,ios18",
                type: "array"
            }
        }
    },
    display: {
        label: "صفحه‌نمایش",
        specs: {
            technology: {
                labelFa: "فناوری صفحه‌نمایش",
                labelEn: "Technology",
                value: "LTPO Super Retina XDR OLED",
                valueEn: "LTPO Super Retina XDR OLED",
                slug: "technology",
                code: "oled",
                type: "text"
            },
            refreshRate: {
                labelFa: "نرخ بروزرسانی تصویر",
                labelEn: "Refresh Rate",
                value: "۶۰ هرتز",
                valueEn: 60,
                slug: "refresh-rate",
                code: 60,
                type: "number"
            },
            brightness: {
                labelFa: "روشنایی صفحه‌نمایش",
                labelEn: "Brightness",
                value: "۲۰۰۰ نیت",
                valueEn: 2000,
                slug: "brightness",
                code: 2000,
                type: "number"
            },
            size: {
                labelFa: "اندازه",
                labelEn: "Size",
                value: "۶.۱ اینچ",
                valueEn: 6.1,
                slug: "size",
                code: 6.1,
                type: "number"
            },
            screenToBodyRatio: {
                labelFa: "نسبت صفحه‌نمایش به بدنه",
                labelEn: "Screen To Body Ratio",
                value: "۸۶.۸%",
                valueEn: 86.8,
                slug: "screen-to-body-ratio",
                code: 86.8,
                type: "number"
            },
            aspectRatio: {
                labelFa: "نسبت تصویر",
                labelEn: "Aspect Ratio",
                value: "۱۹.۵:۹",
                valueEn: "۱۹.۵:۹",
                slug: "aspect-ratio",
                code: "19.5:9",
                type: "text"
            },
            resolution: {
                labelFa: "رزولوشن صفحه‌نمایش",
                labelEn: "Resolution",
                value: "۱۱۷۹x۲۵۵۶ پیکسل",
                valueEn: "۱۱۷۹x۲۵۵۶ پیکسل",
                slug: "resolution",
                code: "1179x2556",
                type: "text"
            },
            pixelDensity: {
                labelFa: "تراکم پیکسلی",
                labelEn: "Pixel Density",
                value: "۴۶۰ پیکسل بر اینچ",
                valueEn: 460,
                slug: "pixel-density",
                code: 460,
                type: "number"
            },
            screenProtection: {
                labelFa: "نوع محافظ صفحه‌نمایش",
                labelEn: "Screen Protection",
                value: "Corning Gorilla Glass",
                valueEn: "Corning Gorilla Glass",
                slug: "screen-protection",
                code: "gorilla_glass",
                type: "text"
            },
            otherFeatures: {
                labelFa: "سایر قابلیت‌ها",
                labelEn: "Other Features",
                value: [
                    "پشتیبانی از HDR۱۰",
                    "پشتیبانی از Dolby Vision"
                ],
                valueEn: [
                    "پشتیبانی از HDR۱۰",
                    "پشتیبانی از Dolby Vision"
                ],
                slug: "other-features",
                code: "hdr10,dolby_vision",
                type: "array"
            }
        }
    },
    processor: {
        label: "پردازنده",
        specs: {
            chipset: {
                labelFa: "تراشه",
                labelEn: "Chipset",
                value: "Apple A۱۸ (۳ nm)",
                valueEn: "Apple A۱۸ (۳ nm)",
                slug: "chipset",
                code: "A18",
                type: "text"
            },
            cpu: {
                labelFa: "پردازنده مرکزی",
                labelEn: "Cpu",
                value: "شش هسته‌ای (دو هسته ۴.۰۴ گیگاهرتزی و چهار هسته ۲.۲ گیگاهرتزی)",
                valueEn: "شش هسته‌ای (دو هسته ۴.۰۴ گیگاهرتزی و چهار هسته ۲.۲ گیگاهرتزی)",
                slug: "cpu",
                code: "6_core",
                type: "text"
            },
            frequency: {
                labelFa: "فرکانس پردازنده",
                labelEn: "Frequency",
                value: "۲.۲ - ۴.۰۴ گیگاهرتز",
                valueEn: 4.04,
                slug: "frequency",
                code: 4.04,
                type: "number"
            },
            gpu: {
                labelFa: "پردازنده گرافیکی",
                labelEn: "Gpu",
                value: "گرافیک ۵ هسته‌ای Apple GPU",
                valueEn: "گرافیک ۵ هسته‌ای Apple GPU",
                slug: "gpu",
                code: "5_core_gpu",
                type: "text"
            }
        }
    },
    memory: {
        label: "حافظه",
        specs: {
            internal: {
                labelFa: "حافظه داخلی",
                labelEn: "Internal",
                value: "۱۲۸ گیگابایت",
                valueEn: 128,
                slug: "internal",
                code: 128,
                type: "number"
            },
            ram: {
                labelFa: "رم",
                labelEn: "Ram",
                value: "۸ گیگابایت",
                valueEn: 8,
                slug: "ram",
                code: 8,
                type: "number"
            },
            memoryCardSupport: {
                labelFa: "پشتیبانی از کارت حافظه",
                labelEn: "Memory Card Support",
                value: "فاقد پشتیبانی از کارت حافظه",
                valueEn: false,
                slug: "memory-card-support",
                code: false,
                type: "boolean"
            },
            memoryCardStandard: {
                labelFa: "استاندارد کارت حافظه",
                labelEn: "Memory Card Standard",
                value: "NVMe",
                valueEn: "NVMe",
                slug: "memory-card-standard",
                code: "nvme",
                type: "text"
            }
        }
    },
    connectivity: {
        label: "اتصالات",
        specs: {
            networks: {
                labelFa: "شبکه‌های مخابراتی",
                labelEn: "Networks",
                value: [
                    "۲G",
                    "۳G",
                    "۴G",
                    "۵G"
                ],
                valueEn: [
                    "۲G",
                    "۳G",
                    "۴G",
                    "۵G"
                ],
                slug: "networks",
                code: "2g,3g,4g,5g",
                type: "array"
            },
            bluetoothVersion: {
                labelFa: "نسخه بلوتوث",
                labelEn: "Bluetooth Version",
                value: "۵.۳",
                valueEn: 5.3,
                slug: "bluetooth-version",
                code: 5.3,
                type: "number"
            },
            bluetoothFeatures: {
                labelFa: "مشخصات بلوتوث",
                labelEn: "Bluetooth Features",
                value: [
                    "پشتیبانی از تکنولوژی A۲DP و اتصال بهتر با سایر وسایل الکترونیکی",
                    "مجهز به تکنولوژی LE و مصرف بهینه باتری"
                ],
                valueEn: [
                    "پشتیبانی از تکنولوژی A۲DP و اتصال بهتر با سایر وسایل الکترونیکی",
                    "مجهز به تکنولوژی LE و مصرف بهینه باتری"
                ],
                slug: "bluetooth-features",
                code: "a2dp,le",
                type: "array"
            },
            gps: {
                labelFa: "تکنولوژی‌های مکان‌یابی",
                labelEn: "Gps",
                value: [
                    "GPS",
                    "GLONASS",
                    "QZSS",
                    "GALILEO",
                    "BDS"
                ],
                valueEn: [
                    "GPS",
                    "GLONASS",
                    "QZSS",
                    "GALILEO",
                    "BDS"
                ],
                slug: "gps",
                code: "gps,glonass,qzss,galileo,bds",
                type: "array"
            },
            radio: {
                labelFa: "رادیو",
                labelEn: "Radio",
                value: "عدم پشتیبانی",
                valueEn: false,
                slug: "radio",
                code: false,
                type: "boolean"
            },
            ports: {
                labelFa: "درگاه‌ها و فناوری‌های ارتباطی",
                labelEn: "Ports",
                value: [
                    "USB Type-C ۲.۰",
                    "DisplayPort"
                ],
                valueEn: [
                    "USB Type-C ۲.۰",
                    "DisplayPort"
                ],
                slug: "ports",
                code: "usb_c,displayport",
                type: "array"
            },
            wireless: {
                labelFa: "شبکه‌های ارتباطی قابل پشتیبانی",
                labelEn: "Wireless",
                value: [
                    "NFC",
                    "QZSS",
                    "Wi-Fi",
                    "بلوتوث"
                ],
                valueEn: [
                    "NFC",
                    "QZSS",
                    "Wi-Fi",
                    "بلوتوث"
                ],
                slug: "wireless",
                code: "nfc,qzss,wifi,bluetooth",
                type: "array"
            }
        }
    },
    camera: {
        label: "دوربین",
        specs: {
            rearCameraCount: {
                labelFa: "تعداد دوربین‌های پشت",
                labelEn: "Rear Camera Count",
                value: "۲ ماژول دوربین",
                valueEn: 2,
                slug: "rear-camera-count",
                code: 2,
                type: "number"
            },
            mainLens: {
                labelFa: "نوع لنز دوربین اصلی",
                labelEn: "Main Lens",
                value: "عریض",
                valueEn: "عریض",
                slug: "main-lens",
                code: "wide",
                type: "text"
            },
            mainResolution: {
                labelFa: "رزولوشن دوربین اصلی",
                labelEn: "Main Resolution",
                value: "۴۸ مگاپیکسل",
                valueEn: 48,
                slug: "main-resolution",
                code: 48,
                type: "number"
            },
            mainSpecs: {
                labelFa: "مشخصات دوربین اصلی",
                labelEn: "Main Specs",
                value: "دریچه دیافراگم f/۱.۶ - فاصله کانونی ۲۶ میلی‌متر - اندازه لنز ۱/۱.۵۶ اینچ - فوکوس Dual Pixel PDAF - لرزشگیر اپتیکال - HDR و Panorama",
                valueEn: "دریچه دیافراگم f/۱.۶ - فاصله کانونی ۲۶ میلی‌متر - اندازه لنز ۱/۱.۵۶ اینچ - فوکوس Dual Pixel PDAF - لرزشگیر اپتیکال - HDR و Panorama",
                slug: "main-specs",
                code: "f1.6,26mm,1/1.56,pdaf,ois,hdr",
                type: "text"
            },
            secondaryLens: {
                labelFa: "نوع لنز دوربین دوم",
                labelEn: "Secondary Lens",
                value: "فوق عریض",
                valueEn: "فوق عریض",
                slug: "secondary-lens",
                code: "ultrawide",
                type: "text"
            },
            secondaryResolution: {
                labelFa: "رزولوشن دوربین دوم",
                labelEn: "Secondary Resolution",
                value: "۱۲ مگاپیکسل",
                valueEn: 12,
                slug: "secondary-resolution",
                code: 12,
                type: "number"
            },
            secondarySpecs: {
                labelFa: "مشخصات دوربین دوم",
                labelEn: "Secondary Specs",
                value: "دریچه f/۲.۲ - فاصله کانونی ۱۳ میلی‌متر - زاویه ۱۲۰ درجه - پیکسل ۰.۷ میکرومتر - فوکوس PDAF",
                valueEn: "دریچه f/۲.۲ - فاصله کانونی ۱۳ میلی‌متر - زاویه ۱۲۰ درجه - پیکسل ۰.۷ میکرومتر - فوکوس PDAF",
                slug: "secondary-specs",
                code: "f2.2,13mm,120deg,0.7um,pdaf",
                type: "text"
            },
            focusTech: {
                labelFa: "فناوری فوکوس",
                labelEn: "Focus Tech",
                value: "PDAF",
                valueEn: "PDAF",
                slug: "focus-tech",
                code: "pdaf",
                type: "text"
            },
            video: {
                labelFa: "ویژگی‌های فیلم‌برداری",
                labelEn: "Video",
                value: [
                    "رزولوشن ۴K با ۶۰fps",
                    "رزولوشن ۱۰۸۰p با ۱۲۰fps",
                    "قابلیت HDR",
                    "پشتیبانی از Dolby Vision HDR تا ۶۰fps",
                    "ضبط استریو"
                ],
                valueEn: [
                    "رزولوشن ۴K با ۶۰fps",
                    "رزولوشن ۱۰۸۰p با ۱۲۰fps",
                    "قابلیت HDR",
                    "پشتیبانی از Dolby Vision HDR تا ۶۰fps",
                    "ضبط استریو"
                ],
                slug: "video",
                code: "4k60,1080p120,hdr,dolby_vision,stereo",
                type: "array"
            },
            flash: {
                labelFa: "فلش",
                labelEn: "Flash",
                value: "Dual LED",
                valueEn: "Dual LED",
                slug: "flash",
                code: "dual_led",
                type: "text"
            },
            selfieResolution: {
                labelFa: "رزولوشن دوربین سلفی",
                labelEn: "Selfie Resolution",
                value: "۱۲ مگاپیکسل",
                valueEn: 12,
                slug: "selfie-resolution",
                code: 12,
                type: "number"
            },
            selfieSpecs: {
                labelFa: "مشخصات دوربین سلفی",
                labelEn: "Selfie Specs",
                value: "دریچه f/۱.۹ - فاصله ۲۳ میلی‌متر - اندازه لنز ۱/۳.۶ اینچ - فوکوس PDAF - سنسور SL ۳D - HDR - ضبط استریو - فیلمبرداری ۴K/۶۰fps و ۱۰۸۰p/۱۲۰fps - لرزشگیر ژیروسکوپی",
                valueEn: "دریچه f/۱.۹ - فاصله ۲۳ میلی‌متر - اندازه لنز ۱/۳.۶ اینچ - فوکوس PDAF - سنسور SL ۳D - HDR - ضبط استریو - فیلمبرداری ۴K/۶۰fps و ۱۰۸۰p/۱۲۰fps - لرزشگیر ژیروسکوپی",
                slug: "selfie-specs",
                code: "f1.9,23mm,1/3.6,pdaf,sl3d,hdr,4k60,gyro",
                type: "text"
            }
        }
    },
    sound: {
        label: "صدا",
        specs: {
            speaker: {
                labelFa: "اسپیکر",
                labelEn: "Speaker",
                value: "استریو",
                valueEn: "استریو",
                slug: "speaker",
                code: "stereo",
                type: "text"
            },
            output: {
                labelFa: "خروجی صدا",
                labelEn: "Output",
                value: "USB Type-C",
                valueEn: "USB Type-C",
                slug: "output",
                code: "usb_c",
                type: "text"
            }
        }
    },
    software: {
        label: "نرم‌افزار",
        specs: {
            os: {
                labelFa: "سیستم عامل",
                labelEn: "Os",
                value: "iOS",
                valueEn: "iOS",
                slug: "os",
                code: "ios",
                type: "text"
            },
            osVersion: {
                labelFa: "نسخه سیستم عامل",
                labelEn: "Os Version",
                value: "iOS ۱۸",
                valueEn: "iOS ۱۸",
                slug: "os-version",
                code: "18",
                type: "text"
            }
        }
    },
    sensors: {
        label: "حس‌گرها",
        specs: {
            sensors: {
                labelFa: "حس‌گرها",
                labelEn: "Sensors",
                value: [
                    "قطب‌نما (Compass)",
                    "شتاب‌سنج (Accelerometer)",
                    "مجاورت (Proximity)",
                    "فشارسنج (Barometer)",
                    "ژیروسکوپ (Gyro)",
                    "تشخیص چهره بیومتریک (Face ID)"
                ],
                valueEn: [
                    "قطب‌نما (Compass)",
                    "شتاب‌سنج (Accelerometer)",
                    "مجاورت (Proximity)",
                    "فشارسنج (Barometer)",
                    "ژیروسکوپ (Gyro)",
                    "تشخیص چهره بیومتریک (Face ID)"
                ],
                slug: "sensors",
                code: "compass,accelerometer,proximity,barometer,gyro,face_id",
                type: "array"
            }
        }
    },
    battery: {
        label: "باتری",
        specs: {
            capacity: {
                labelFa: "ظرفیت باتری",
                labelEn: "Capacity",
                value: "۳۵۶۱ میلی‌آمپر ساعت",
                valueEn: 3561,
                slug: "capacity",
                code: 3561,
                type: "number"
            },
            type: {
                labelFa: "نوع باتری",
                labelEn: "Type",
                value: "لیتیوم یون",
                valueEn: "لیتیوم یون",
                slug: "type",
                code: "li_ion",
                type: "text"
            },
            power: {
                labelFa: "توان شارژ",
                labelEn: "Power",
                value: "۲۵ وات",
                valueEn: 25,
                slug: "power",
                code: 25,
                type: "number"
            },
            chargingTypes: {
                labelFa: "قابلیت‌های شارژ",
                labelEn: "Charging Types",
                value: [
                    "شارژ با سیم",
                    "شارژ بی‌سیم",
                    "شارژ معکوس"
                ],
                valueEn: [
                    "شارژ با سیم",
                    "شارژ بی‌سیم",
                    "شارژ معکوس"
                ],
                slug: "charging-types",
                code: "wired,wireless,reverse",
                type: "array"
            },
            details: {
                labelFa: "مشخصات باتری",
                labelEn: "Details",
                value: "شارژ با سیم با PD۲.۰، ۵۰٪ در ۳۰ دقیقه / شارژ بی‌سیم MagSafe با ۲۵ وات / شارژ بی‌سیم Qi۲ با ۱۵ وات / شارژ معکوس با ۴.۵ وات",
                valueEn: "شارژ با سیم با PD۲.۰، ۵۰٪ در ۳۰ دقیقه / شارژ بی‌سیم MagSafe با ۲۵ وات / شارژ بی‌سیم Qi۲ با ۱۵ وات / شارژ معکوس با ۴.۵ وات",
                slug: "details",
                code: "pd2.0,magsafe25w,qi2_15w,reverse4.5w",
                type: "text"
            }
        }
    },
    inBox: {
        label: "اقلام همراه",
        specs: {
            accessories: {
                labelFa: "اقلام همراه",
                labelEn: "Accessories",
                value: "کابل USB Type-C",
                valueEn: "کابل USB Type-C",
                slug: "accessories",
                code: "usb_c_cable",
                type: "text"
            }
        }
    }
}