"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          color: "var(--toast-title)",
          "--normal-bg": "var(--toast-bg)",
          "--normal-border": "var(--toast-border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
