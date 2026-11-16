"use client"

import { useEffect } from "react"

// Skrypty zestawu taste-skill zmieniają DOM (pętle UI, efekty, momenty, menu).
// Ładujemy je dopiero po hydratacji Reacta, żeby React nie nadpisał ich zmian.
const SCRIPTS = ["system.js", "motion/motion.js", "layout/layout.js", "diagrams/mount.js"]

export function KitScripts() {
  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
    for (const src of SCRIPTS) {
      const url = `${base}/assets/${src}`
      if (document.querySelector(`script[src="${url}"]`)) continue
      const s = document.createElement("script")
      s.type = "module"
      s.src = url
      document.body.appendChild(s)
    }
  }, [])
  return null
}
