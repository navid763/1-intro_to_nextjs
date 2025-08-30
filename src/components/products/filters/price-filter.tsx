import { useState, useRef, useEffect, useCallback } from 'react';

// تعریف Types
interface PriceRange {
  min: number;
  max: number;
}

interface PresetOption {
  label: string;
  min: number;
  max: number;
}

interface PriceFilterProps {
  minPrice?: number;
  maxPrice?: number;
  step?: number;
  initialMin?: number;
  initialMax?: number;
  onPriceChange?: (priceRange: PriceRange) => void;
  currency?: string;
  className?: string;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice = 0,
  maxPrice = 10000000,
  step = 100000,
  initialMin = 0,
  initialMax = 10000000,
  onPriceChange = () => { },
  currency = "تومان",
  className = ""
}) => {
  const [minValue, setMinValue] = useState<number>(initialMin);
  const [maxValue, setMaxValue] = useState<number>(initialMax);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const [filterHasChanged, setFilterHasChanged] = useState<boolean>(false);


  const sliderRef = useRef<HTMLDivElement>(null);
  const minThumbRef = useRef<HTMLDivElement>(null);
  const maxThumbRef = useRef<HTMLDivElement>(null);

  // بروزرسانی مقادیر داخلی هنگام تغییر props
  useEffect(() => {
    setMinValue(initialMin);
    setMaxValue(initialMax);
  }, [initialMin, initialMax]);

  // فرمت کردن قیمت به صورت فارسی
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  // محاسبه درصد موقعیت روی اسلایدر
  const getPercent = useCallback((value: number): number => {
    if (maxPrice === minPrice) return 0;
    return ((value - minPrice) / (maxPrice - minPrice)) * 100;
  }, [minPrice, maxPrice]);

  // به‌روزرسانی مقادیر والد با debounce
  const debouncedPriceChange = useCallback(
    debounce((range: PriceRange) => {
      onPriceChange(range);
    }, 300),
    [onPriceChange]
  );

  useEffect(() => {
    debouncedPriceChange({ min: minValue, max: maxValue });
  }, [minValue, maxValue, debouncedPriceChange]);

  // مدیریت رویداد موس برای کشیدن
  const handleMouseDown = (type: 'min' | 'max') => (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(type);
    e.preventDefault();
  };

  // مدیریت حرکت موس
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const percent = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
    const value = Math.round((percent / 100) * (maxPrice - minPrice) + minPrice);

    if (isDragging === 'min') {
      const newMinValue = Math.min(value, maxValue - step);
      setMinValue(Math.max(minPrice, newMinValue));
    } else if (isDragging === 'max') {
      const newMaxValue = Math.max(value, minValue + step);
      setMaxValue(Math.min(maxPrice, newMaxValue));
    }
  }, [isDragging, minPrice, maxPrice, minValue, maxValue, step]);

  // توقف کشیدن
  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  // اضافه کردن event listener ها
  useEffect(() => {
    const preventSelect = (e: Event) => e.preventDefault();

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('selectstart', preventSelect);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('selectstart', preventSelect);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // مدیریت تغییر مقادیر از طریق input
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || minPrice;

    const valueAboveMin = Math.max(minPrice, value);
    const finalValue = Math.min(valueAboveMin, maxValue - step);
    setMinValue(finalValue);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || maxPrice;

    const valueBelowMax = Math.min(maxPrice, value);
    const finalValue = Math.max(valueBelowMax, minValue + step);

    setMaxValue(finalValue);
  };



  const handlePresetClick = (preset: PresetOption): void => {
    setMinValue(preset.min);
    setMaxValue(preset.max);
  };

  // بررسی اینکه آیا preset فعال است یا خیر
  const isPresetActive = (preset: PresetOption): boolean => {
    return minValue === preset.min && maxValue === preset.max;
  };

  useEffect(() => {
    if (minValue !== initialMin || maxValue !== initialMax) {
      setFilterHasChanged(true);
    } else {
      setFilterHasChanged(false);
    }
  }, [minValue, maxValue, initialMin, initialMax]);

  return (
    <div className={`w-full  p-2 ${className}`} dir="rtl">
      <div className="space-y-4">
        <div className="flex gap-2 items-center text-neutral-600 px-4">
          <span>فیلتر قیمت (تومان)</span>
          {filterHasChanged && <div className="h-1 w-1 bg-blue-600 rounded"></div>}
        </div>

        {/* نمایش مقادیر فعلی */}
        <div className="text-center space-y-1">
          <div className="text-sm text-gray-500">
            {formatPrice(maxValue)} -  {formatPrice(minValue)} {currency}
          </div>
        </div>

        {/* اسلایدر */}
        <div className="relative px-4 py-4">
          {/* خط پس‌زمینه */}
          <div
            ref={sliderRef}
            className="relative h-2 bg-gray-200 rounded-full cursor-pointer"
          >
            {/* خط فعال */}
            <div
              className="absolute h-2 bg-blue-500 rounded-full"
              style={{
                left: `${getPercent(minValue)}%`,
                right: `${100 - getPercent(maxValue)}%`
              }}
            />

            {/* نقطه حداقل */}
            <div
              ref={minThumbRef}
              className={`absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full cursor-grab transform -translate-x-1/2 -translate-y-1 shadow-sm transition-all duration-150 hover:scale-110 ${isDragging === 'min' ? 'cursor-grabbing scale-110 shadow-md' : ''
                }`}
              style={{ left: `${getPercent(minValue)}%` }}
              onMouseDown={handleMouseDown('min')}
              role="slider"
              aria-label="حداقل قیمت"
              aria-valuemin={minPrice}
              aria-valuemax={maxValue}
              aria-valuenow={minValue}
              tabIndex={0}
            />

            {/* نقطه حداکثر */}
            <div
              ref={maxThumbRef}
              className={`absolute w-4 h-4 bg-white border-2 border-blue-500 rounded-full cursor-grab transform -translate-x-1/2 -translate-y-1 shadow-sm transition-all duration-150 hover:scale-110 ${isDragging === 'max' ? 'cursor-grabbing scale-110 shadow-md' : ''
                }`}
              style={{ left: `${getPercent(maxValue)}%` }}
              onMouseDown={handleMouseDown('max')}
              role="slider"
              aria-label="حداکثر قیمت"
              aria-valuemin={minValue}
              aria-valuemax={maxPrice}
              aria-valuenow={maxValue}
              tabIndex={0}
            />
          </div>
        </div>

        {/* فیلدهای ورودی */}
        <div className="grid grid-cols-2 gap-2">

          <div>
            <label className="block text-xs text-gray-500 mb-1">حداکثر</label>
            <input
              type="number"
              value={maxValue}
              onChange={handleMaxChange}
              min={minValue + step}
              max={maxPrice}
              step={step}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              aria-label="حداکثر قیمت"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 mb-1">حداقل</label>
            <input
              type="number"
              value={minValue}
              onChange={handleMinChange}
              min={minPrice}
              max={maxValue - step}
              step={step}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              aria-label="حداقل قیمت"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%]  border-b border-neutral-200 h-1 mt-6"></div>
    </div>
  );
};

// تابع debounce برای بهبود عملکرد
function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export default PriceFilter;