import dynamic from "next/dynamic"

export const ChartContainer = dynamic(
  () => import("./chart").then((mod) => mod.ChartContainer),
  { ssr: false }
)
export const ChartTooltip = dynamic(
  () => import("./chart").then((mod) => mod.ChartTooltip),
  { ssr: false }
)
export const ChartTooltipContent = dynamic(
  () => import("./chart").then((mod) => mod.ChartTooltipContent),
  { ssr: false }
)
export const ChartLegend = dynamic(
  () => import("./chart").then((mod) => mod.ChartLegend),
  { ssr: false }
)
export const ChartLegendContent = dynamic(
  () => import("./chart").then((mod) => mod.ChartLegendContent),
  { ssr: false }
)
export const ChartStyle = dynamic(
  () => import("./chart").then((mod) => mod.ChartStyle),
  { ssr: false }
)
