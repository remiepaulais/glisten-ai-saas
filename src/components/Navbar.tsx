'use client'

import React from 'react'
import WordMark from './WordMark'
import Link from 'next/link'
import ButtonLink from './ButtonLink'

import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'

type NavbarProps = {
  settings: Content.SettingsDocument
}

export default function Navbar({ settings }: NavbarProps) {
  return (
    <nav className='p-4 md:p-6' aria-label='Main'>
      <div className='mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center'>
        <Link href='/'>
          <WordMark />
          <span className='sr-only'>Glisten.ai Home Page</span>
        </Link>
        <ul className='flex gap-6'>
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              )
            }
            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className='inline-flex min-h-11 items-center'
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
