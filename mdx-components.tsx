import Link from 'next/link'
import type { ComponentProps } from 'react'

// Type for MDX components - using Record for flexibility
type MDXComponents = Record<string, React.ComponentType<Record<string, unknown>>>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ className, ...props }: ComponentProps<'h1'>) => (
      <h1 
        className={`text-4xl font-bold mb-6 mt-8 text-neutral-900 dark:text-neutral-100 ${className || ''}`}
        {...props}
      />
    ),
    h2: ({ className, ...props }: ComponentProps<'h2'>) => (
      <h2 
        className={`text-3xl font-semibold mb-4 mt-6 text-neutral-900 dark:text-neutral-100 ${className || ''}`}
        {...props}
      />
    ),
    h3: ({ className, ...props }: ComponentProps<'h3'>) => (
      <h3 
        className={`text-2xl font-semibold mb-3 mt-5 text-neutral-900 dark:text-neutral-100 ${className || ''}`}
        {...props}
      />
    ),
    h4: ({ className, ...props }: ComponentProps<'h4'>) => (
      <h4 
        className={`text-xl font-semibold mb-2 mt-4 text-neutral-900 dark:text-neutral-100 ${className || ''}`}
        {...props}
      />
    ),
    
    // Paragraphs
    p: ({ className, ...props }: ComponentProps<'p'>) => (
      <p 
        className={`mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300 ${className || ''}`}
        {...props}
      />
    ),
    
    // Links
    a: ({ className, href, ...props }: ComponentProps<'a'>) => {
      const isExternal = href?.startsWith('http')
      const linkClassName = `text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2 transition-colors ${className || ''}`
      
      if (isExternal) {
        return (
          <a
            className={linkClassName}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        )
      }
      
      return (
        <Link
          className={linkClassName}
          href={href || '#'}
          {...props}
        />
      )
    },
    
    // Lists
    ul: ({ className, ...props }: ComponentProps<'ul'>) => (
      <ul 
        className={`list-disc list-inside mb-4 space-y-2 text-neutral-700 dark:text-neutral-300 ${className || ''}`}
        {...props}
      />
    ),
    ol: ({ className, ...props }: ComponentProps<'ol'>) => (
      <ol 
        className={`list-decimal list-inside mb-4 space-y-2 text-neutral-700 dark:text-neutral-300 ${className || ''}`}
        {...props}
      />
    ),
    li: ({ className, ...props }: ComponentProps<'li'>) => (
      <li 
        className={`ml-4 ${className || ''}`}
        {...props}
      />
    ),
    
    // Blockquote
    blockquote: ({ className, ...props }: ComponentProps<'blockquote'>) => (
      <blockquote 
        className={`border-r-4 border-neutral-300 dark:border-neutral-600 pr-4 my-4 italic text-neutral-600 dark:text-neutral-400 ${className || ''}`}
        {...props}
      />
    ),
    
    // Code blocks
    code: ({ className, ...props }: ComponentProps<'code'>) => {
      const isInline = !className?.includes('language-')
      return isInline ? (
        <code 
          className={`bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono text-neutral-800 dark:text-neutral-200 ${className || ''}`}
          {...props}
        />
      ) : (
        <code 
          className={`block bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg overflow-x-auto text-sm font-mono text-neutral-800 dark:text-neutral-200 ${className || ''}`}
          {...props}
        />
      )
    },
    
    // Horizontal rule
    hr: ({ className, ...props }: ComponentProps<'hr'>) => (
      <hr 
        className={`my-8 border-neutral-200 dark:border-neutral-700 ${className || ''}`}
        {...props}
      />
    ),
    
    // Images - using regular img for markdown compatibility
    img: ({ className, alt, ...props }: ComponentProps<'img'>) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img 
        className={`rounded-lg my-4 max-w-full h-auto ${className || ''}`}
        alt={alt || ''}
        {...props}
      />
    ),
    
    // Tables
    table: ({ className, ...props }: ComponentProps<'table'>) => (
      <div className="overflow-x-auto my-4">
        <table 
          className={`min-w-full border-collapse border border-neutral-200 dark:border-neutral-700 ${className || ''}`}
          {...props}
        />
      </div>
    ),
    th: ({ className, ...props }: ComponentProps<'th'>) => (
      <th 
        className={`border border-neutral-200 dark:border-neutral-700 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 font-semibold text-left ${className || ''}`}
        {...props}
      />
    ),
    td: ({ className, ...props }: ComponentProps<'td'>) => (
      <td 
        className={`border border-neutral-200 dark:border-neutral-700 px-4 py-2 ${className || ''}`}
        {...props}
      />
    ),
    
    // Allow custom components to override
    ...components,
  }
}
