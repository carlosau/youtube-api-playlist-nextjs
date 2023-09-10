const youtubeKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const vercelApi = 'https://api.github.com/repos/vercel/next.js'
const youtubePlaylistApi = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet'

export default async function Home() {
  
  const res = await fetch(`${youtubePlaylistApi}&key=${youtubeKey}`)
  const data = await res.json()
  console.log(data)

 return (
    <div className="space-y-4 text-center mt-4">
      <h1>Next.js</h1>
      <p>Result: </p>
    </div>
  )
}
