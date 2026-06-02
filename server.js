import express from 'express'
import compression from 'compression'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const PORT = process.env.PORT || 8080

const app = express()

// Gzip/deflate all responses.
app.use(compression())
app.disable('x-powered-by')

// Long cache for fingerprinted assets, short cache for HTML.
app.use(
  express.static(DIST, {
    // Don't 301 /blog → /blog/. Let the catch-all serve dist/blog/index.html
    // with a clean 200 instead.
    redirect: false,
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
      } else if (/\.(js|css|jpg|jpeg|png|webp|svg|woff2?)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      }
    }
  })
)

// Serve the matching pre-rendered HTML. vite-react-ssg emits flat files
// (e.g. dist/blog.html and dist/legal/terms.html), so for each request we try
// "<path>.html", then "<path>/index.html", before falling back to the
// pre-rendered 404 page.
app.get('*', (req, res) => {
  const cleanPath = req.path.replace(/\/+$/, '') || '/'

  if (cleanPath === '/') {
    return res.sendFile(path.join(DIST, 'index.html'))
  }

  const candidates = [
    path.join(DIST, `${cleanPath}.html`),
    path.join(DIST, cleanPath, 'index.html')
  ]
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return res.sendFile(candidate)
    }
  }

  return res.status(404).sendFile(path.join(DIST, '404', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Classic Car Memories running on http://localhost:${PORT}`)
})
