addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */

async function handleRequest(request) {
  const data = {
    ip: request.headers.get('cf-connecting-ip'),
    country : request.headers.get('cf-ipcountry'),
  }
  const json = JSON.stringify(data, null, 2)
  return new Response(json, {
    status: 200,
    headers: {
        "content-type": "application/json;charset=UTF-8;",
        'token':"XXXXXXXXX"        
    }
    })
}