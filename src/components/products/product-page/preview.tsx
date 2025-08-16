

export default function ReviewSection({ htmlContent }: { htmlContent: string }) {
    return (
        <div
            className="prose prose-sm lg:prose-base max-w-none w-full flex justify-center mt-10 p-4"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
}

export const previewHtml = `
   <div style="direction: rtl; text-align: right; font-family: sans-serif; line-height: 1.8;">
  <h2 style="font-size: 20px; font-weight: bold; text-align: start;">طراحی و ساخت</h2>
  <p>
    گوشی پوکو M5s با طراحی زیبا و بدنه‌ی خوش‌ساخت، در نگاه اول حس یک گوشی بالارده را القا می‌کند.
    با وجود قیمت اقتصادی، استفاده از متریال مناسب باعث شده تا کیفیت ساخت آن قابل قبول باشد.
  </p>
  <div style="text-align: center; margin: 20px 0;">
    <img src="https://picsum.photos/id/1015/400/300" alt="نمای طراحی گوشی" style="max-width: 100%; border-radius: 8px;" />
  </div>
  
  <h2 style="font-size: 20px; font-weight: bold; text-align: start;">صفحه نمایش</h2>
  <p>
    صفحه‌نمایش AMOLED با رزولوشن Full HD+ تجربه‌ای شفاف و روان از کار با گوشی ارائه می‌دهد.
    روشنایی مناسب و رنگ‌های زنده، آن را برای استفاده در محیط‌های پرنور مناسب کرده‌اند.
  </p>
  <div style="text-align: center; margin: 20px 0; justify-content: center;">
    <img src="https://picsum.photos/id/1019/400/600" alt="نمایشگر گوشی" style="max-width: 100%; border-radius: 8px;" />
  </div>
</div>
 `