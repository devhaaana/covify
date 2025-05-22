export default async function handler(req, res) {
    const query = req.query.query || 'nature';
    const apiKey = process.env.UNSPLASH_KEY;
  
    const result = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${apiKey}`
    );
  
    if (!result.ok) {
        return res.status(result.status).json({ error: 'Unsplash API error' });
    }
  
    const data = await result.json();
    res.status(200).json(data);
}