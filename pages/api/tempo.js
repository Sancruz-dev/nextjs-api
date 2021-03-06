async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET
    const dynamicDate = new Date();

    const SubscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`)
    const SubscribersResponseJson = await SubscribersResponse.json()
    const inscritos = SubscribersResponseJson.total_subscribers

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    })
}

export default tempo;

// vrQh-Hs-YdRjhpsxshvoBJdYRrOWpPz8nMbXmAWm0NM