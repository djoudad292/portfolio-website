import { Shell } from "@/components/console/shell"
import { CommandPalette } from "@/components/command-palette"
import { Toaster } from "sonner"

export default function Home() {
  return (
    <>
      <Shell />
      <CommandPalette />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#11141b",
            border: "1px solid #232936",
            color: "#f4f6fb",
          },
        }}
      />
    </>
  )
}
