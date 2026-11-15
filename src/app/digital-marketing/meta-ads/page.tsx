import { ServicePage, serviceMetadata } from '@/components/service-page'
import { metaAds } from '@/data/service-pages'

export const metadata = serviceMetadata(metaAds)

export default function Page() {
  return <ServicePage page={metaAds} />
}
