const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const httpProxy = require('http-proxy')

const dev = process.env.NODE_ENV !== 'production'
const hostname = dev ? 'localhost' : 'app.duocnv.top'
const port = process.env.PORT || 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

// Proxy chuyển hướng yêu cầu đến Strapi
const proxy = httpProxy.createProxyServer()
const strapiUrl = process.env.STRAPI_URL || 'http://0.0.0.0:8100'

// Thêm xử lý lỗi cho Proxy
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err)
  res.writeHead(500, { 'Content-Type': 'text/plain' })
  res.end('Proxy error occurred.')
})

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      // Danh sách đường dẫn cần proxy
      const strapiPaths = [
        '/admin',
        '/api',
        '/i18n',
        '/content-manager',
        '/i18n/locales',
        '/upload',
      ]
      // Kiểm tra và chuyển hướng
      if (strapiPaths.some((path) => pathname.startsWith(path))) {
        proxy.web(req, res, { target: strapiUrl, changeOrigin: true })
      } else {
        // Xử lý Next.js nếu không phải yêu cầu proxy
        await handle(req, res, parsedUrl)
      }
    } catch (err) {
      console.error('Error occurred handling:', req.url, err)
      res.statusCode = 500
      res.end('Internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
