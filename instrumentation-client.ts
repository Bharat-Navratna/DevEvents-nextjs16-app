import posthog from "posthog-js"

const posthogConfig: any = {
  api_host: "/ingest",
  ui_host: "https://eu.posthog.com",
  // `defaults` (date-based config flag) was previously present. Map it into
  // `default_properties` so the information is still available on captured events.
  default_properties: {
    defaults_date: '2025-05-24',
  },
  capture_exceptions: true, // enables Error Tracking
  debug: process.env.NODE_ENV === "development",
}

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, posthogConfig)
