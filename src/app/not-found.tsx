import { StackedHeadline } from '@/components/brand/stacked-headline'
import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-start justify-center gap-8 py-20">
      <StackedHeadline as="h1" lines={['Page', 'Not', 'Found']} accent={1} />
      <p className="max-w-md text-lg/8 text-ink">That page does not exist, or it has moved.</p>
      <ButtonLink href="/" size="lg">
        Back to home
      </ButtonLink>
    </Container>
  )
}
