import { ServicePage, serviceMetadata } from '@/components/service-page'
import { socialMedia } from '@/data/service-pages'

export const metadata = serviceMetadata(socialMedia)

export default function Page() {
  return <ServicePage page={socialMedia} />
}
