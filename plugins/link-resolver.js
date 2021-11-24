export default function (doc) {
  const staticRoute = ['competences', 'statistiques', 'simple_page']
  console.log('link-resolver called', doc.uid, doc.type, doc.lang)
  if (staticRoute.includes(doc.type)) {
    const locale = doc.lang !== 'fr-fr' ? `/${doc.lang}` : ''
    return `${locale}/${doc.uid}`
  }
  if (doc.type === 'news_item') {
    return `/actualites/${doc.uid}`
  }
  if (doc.type === 'index') {
    return `/`
  }
}
