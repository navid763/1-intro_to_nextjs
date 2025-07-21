import Return7Icon from "@/components/icons/delivery-advantages/7-day-returning";
import Answering247Icon from "@/components/icons/delivery-advantages/Answering-247";
import ExpressDeliveryIcon from "@/components/icons/delivery-advantages/express";
import OriginalIcon from "@/components/icons/delivery-advantages/original";
import PayInSpotIcon from "@/components/icons/delivery-advantages/payment-on-the-spot";

export default function DeliveryAdvantageItem() {
    const iconsMap = [
        { icon: <Return7Icon className="w-9 h-9" />, label: "7 روز ضمانت بازگشت کالا" },
        { icon: <Answering247Icon className="w-9 h-9" />, label: "24 ساعته / 7 روز هفته" },
        { icon: <ExpressDeliveryIcon className="w-9 h-9" />, label: "امکان تحویل اکسپرس" },
        { icon: <OriginalIcon className="w-9 h-9" />, label: "ضمانت اصل بودن کالا" },
        { icon: <PayInSpotIcon className="w-9 h-9" />, label: "امکان پرداخت در محل" }
    ];

    return (
        <>
            {
                iconsMap.map(i => {
                    return (
                        <div className="flex items-center justify-center gap-1" key={i.label}>
                            {i.icon}
                            <span>{i.label}</span>
                        </div>
                    )
                })
            }
        </>
    )
}