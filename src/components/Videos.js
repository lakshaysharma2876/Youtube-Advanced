
const Videos = ({info}) => {
    console.log(info);
    const views = Math.floor((info?.statistics?.viewCount)/1000)
  return (
    <div className ="w-72 cursor-pointer m-2">
        <img className = "rounded-xl" src = {info?.snippet?.thumbnails?.medium?.url} alt="Image"/>
        <h1 className = "font-semibold">{info?.snippet?.title}</h1>
        <h1 className = "text-gray-600 font font-semibold ">{info?.snippet?.channelTitle}</h1>
        {
          views > 1000 ? <h1 className = "text-gray-600 font font-semibold">{views}M views </h1>: <h1 className = "text-gray-600 font font-semibold">{views}K views </h1>
}
    </div>
  )
}

export default Videos