/* eslint-disable react/display-name */
import React, { useMemo } from 'react'
import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'
import Magnet from './Magnet'
import YoutubeEmbed from './YoutubeEmbed'
import CountdownTimer from './CountdownTimer'
import ProjectCard from './ProjectCard'
import FaqSection from './FaqSection'
import TestimonialCard from './TestimonialCard'

const Wrapper: React.ComponentType<{ layout: string }> = ({ layout, ...rest }) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout {...rest} />
}

export const MDXComponents: ComponentMap = {
  Image,
  //@ts-ignore
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  //@ts-ignore
  BlogNewsletterForm,
  Magnet,
  YoutubeEmbed,
  CountdownTimer,
  ProjectCard,
  FaqSection,
  TestimonialCard,
}

interface Props {
  layout: string
  mdxSource: string
  [key: string]: unknown
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }: Props) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
