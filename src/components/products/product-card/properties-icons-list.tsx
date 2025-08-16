
import { propertyIconsMap } from "./propertyIconsMap";
import PropertiesIcon from "./properties-icon";
type FeatureValue = string[];

export interface FeaturesMap {
    [key: string]: FeatureValue;
}

export interface PropertiesIconsListProps {
    features: FeaturesMap;
}

export default function PropertiesIconsList({ features }: PropertiesIconsListProps) {
    return (
        <>
            {Object.entries(features).map(([key, value]) => {
                const icon = propertyIconsMap[key] ?? <span className="w-3 h-3">?</span>;
                return (
                    <PropertiesIcon key={key} label={value[0]}>
                        {icon}
                    </PropertiesIcon>
                );
            })}
        </>
    );
}
