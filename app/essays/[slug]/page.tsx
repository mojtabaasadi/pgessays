import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import { essays, type EssaySlug } from '../essays'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const titles: Record<string, string> = {
    identity: "هویتت را کوچک نگه دار",
  }
  
  return {
    title: titles[slug] ?? slug,
  }
}

export async function generateStaticParams() {
  return Object.keys(essays).map((slug) => ({
    slug,
  }))
}

export default async function EssayPage({ params }: PageProps) {
  const { slug } = await params
  
  // Use static mapping for Turbopack compatibility
  const Component = essays[slug as EssaySlug]
  
  if (!Component) {
    return redirect('/')
  }
  
  return (
    <main className="prose prose-neutral dark:prose-invert mx-auto max-w-2xl py-10 px-4">
      <Component />
    </main>
  )
}

