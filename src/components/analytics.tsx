import Script from 'next/script'

/**
 * Google Analytics 4. Loads only when NEXT_PUBLIC_GA_ID is set, which netlify.toml does for production deploys
 * only, so local development, deploy previews and branch deploys never send data.
 * The property is the same one connected to the old Squarespace site, so traffic history carries across.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID
  if (!id) return null
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  )
}
