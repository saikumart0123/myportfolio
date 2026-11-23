'use client'

import { useEffect, useState } from 'react'
import { Check, Copy, Menu, X } from 'lucide-react'
import { navigation, profile } from '../profile'

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    function update() {
      const marker = Math.min(180, window.innerHeight * .3)
      const current = [...navigation].reverse().find(([id]) => {
        const section = document.getElementById(id)
        return section && section.getBoundingClientRect().top <= marker
      })
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
      setActive(atBottom ? 'contact' : current?.[0] ?? 'home')
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  function renderLinks() {
    return navigation.map(([id, label]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)
  }

  return <nav aria-label="Main navigation" onKeyDown={event => {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      document.getElementById('menu-toggle')?.focus()
    }
  }}>
    <div className="desktop-nav">{renderLinks()}</div>
    <button id="menu-toggle" className="menu-toggle" type="button" aria-controls="mobile-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
      {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />} Menu
    </button>
    <div id="mobile-nav" className="mobile-nav" hidden={!open}>{renderLinks()}</div>
  </nav>
}

export function CopyEmail() {
  const [status, setStatus] = useState('')
  const copied = status === 'Email copied.'

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus('Email copied.')
    } catch {
      setStatus('Select and copy the email address above.')
    }
  }

  return <div>
    <button className="button outline" type="button" onClick={copy}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}{copied ? 'Copied' : 'Copy email'}</button>
    <p className="copy-status" role="status">{status}</p>
  </div>
}
