import { Photo } from '@/components/elements/placeholder'
import { team } from '@/data/team'

/** Team cards with capsule portraits. Portraits are placeholders until a `photo` is set in src/data/team.ts. */
export function TeamGrid() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {team.map((person) => (
        <article key={person.name} className="flex flex-col gap-5">
          <Photo
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            label="Portrait"
            ratio="portrait"
            shape="capsule"
            sizes="160px"
            className="w-32"
          />
          <div>
            <h3 className="text-2xl/8 font-extrabold text-torchlight">{person.name}</h3>
            <p className="text-ink">{person.title}</p>
          </div>
          {person.bio && <p className="text-sm/6 text-ink/90">{person.bio}</p>}
        </article>
      ))}
    </div>
  )
}
