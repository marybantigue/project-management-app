import { Metadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

enum MODE {
  DARK = 'dark',
  LIGHT = 'light'
}

export const siteConfig = {
  title: 'Project Management App',
  description: `Manage projects, tasks, and bugs with ease.`,
  mode: MODE.LIGHT
  // TODO: favicon
}

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Project Management App` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Project Management App` : title,
      description,
      url: 'http://localhost:3000',
      siteName: 'Project Management App', // https://developers.google.com/search/docs/appearance/site-names
      locale: 'en_US',
      type: 'website'
    }
  }
}
