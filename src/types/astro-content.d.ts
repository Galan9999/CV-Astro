declare module 'astro:content' {
  interface ExperienceData {
    company:      string
    role:         string
    period:       string
    location:     string
    highlight:    string
    achievements: string[]
    stack:        string[]
    featured?:    boolean
  }

  interface ProjectData {
    title:       string
    description: string
    tech:        string[]
    url?:        string
    year:        number
  }

  interface ExperienceEntry {
    id:   string
    data: ExperienceData
  }

  interface ProjectEntry {
    id:   string
    data: ProjectData
  }

  type CollectionMap = {
    experience: ExperienceEntry
    projects:   ProjectEntry
  }

  export type CollectionEntry<C extends keyof CollectionMap = keyof CollectionMap> =
    CollectionMap[C]

  export function getCollection<C extends keyof CollectionMap>(
    collection: C,
    filter?: (entry: CollectionMap[C]) => boolean,
  ): Promise<CollectionMap[C][]>
}
