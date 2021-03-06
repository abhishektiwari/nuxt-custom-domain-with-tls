export default function (context) {
  const host = (process.server
    ? context.req.headers.host
    : window.location.host
  ).toLowerCase()
  const whiteListedDomains = ['foo.bar', 'go.compare']
  context.domain_name = host
  const hostDomain = host.split('.').slice(-2).join('.')
  if (!whiteListedDomains.includes(hostDomain)) {
    return context.redirect('/error')
  }
}
