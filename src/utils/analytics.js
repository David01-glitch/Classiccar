// Lightweight Google Analytics (GA4) + Consent Mode v2 helpers.
const GA_ID = 'G-4J046JXWVC'
const CONSENT_KEY = 'ccm-consent'

function gtag() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(arguments)
}

export function getStoredConsent() {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch (e) {
    return null
  }
}

export function grantConsent() {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CONSENT_KEY, 'granted')
  } catch (e) {}
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  })
}

export function denyConsent() {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CONSENT_KEY, 'denied')
  } catch (e) {}
  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  })
}

export function trackPageView(path) {
  if (typeof window === 'undefined') return
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
    send_to: GA_ID
  })
}

export function trackEvent(action, params = {}) {
  if (typeof window === 'undefined') return
  gtag('event', action, params)
}
