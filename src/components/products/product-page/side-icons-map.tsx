import ShareIcon from "@/components/icons/share";
import HeartIcon from "@/components/icons/heart";
type ActionType = "share" | "fave";

interface ISideIcon {
    iconComponent: (color?: string) => React.ReactNode;
    quote: string;
    action: ActionType; // 👈 restrict this to allowed values
}

export const sideIconsMap: ISideIcon[] = [
    {
        iconComponent: (color = "text-neutral-600") => <ShareIcon className={`h-5 w-5 ${color} cursor-pointer`} />,
        quote: "به اشتراک گذاری کالا",
        action: "share"
    },
    {
        iconComponent: (color = "text-neutral-600") => <HeartIcon className={`h-5 w-5 ${color} cursor-pointer`} />,
        quote: "افزودن به علاقه مندی ها",
        action: "fave"

    }
]

