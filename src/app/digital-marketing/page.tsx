import { ServicePage, serviceMetadata } from '@/components/service-page'
import { digitalMarketing } from '@/data/service-pages'

export const metadata = serviceMetadata(digitalMarketing)

export default function Page() {
  return <ServicePage page={digitalMarketing} />
}
