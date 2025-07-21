import BatteryIcon from "@/components/icons/battery";
import CameraLensIcon from "@/components/icons/camera-lens";
import MemoryIcon from "@/components/icons/memory";
import ScreenSizeIcon from "@/components/icons/screen-size";

// برای تمام محصولات باید فیچر و آیکون مربوطه به آبجکت زیر اضافه شوند
export const propertyIconsMap: Record<string, React.ReactElement> = {
  battery: <BatteryIcon className="w-3 h-3" />,
  camera: <CameraLensIcon className="w-3 h-3" />,
  memory: <MemoryIcon className="w-3 h-3" />,
  screenSize: <ScreenSizeIcon className="w-3 h-3" />,
};