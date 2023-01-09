const ArticleCard = (props) => {
  const { article, withPicture } = props

  return (
    <div
        className="p-4 bg-gray-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 h-full"
      >
        { withPicture ? (
        <div className="rounded-xl h-1/2">
          <img
            src={`${import.meta.env.DEV_URL}${
              article?.attributes?.cover?.data?.attributes?.url
            }`}
            alt={article?.attributes?.cover?.data?.attributes?.name}
            className="rounded-md object-cover"
          />
        </div>
        ) : null}
        <div className="flex flex-col h-full">
          <div className="py-1 font-bold text-lg">{article?.attributes?.title}</div>
          <div className="py-1 text-xs truncate">
            {article?.attributes?.description}
          </div>
        </div>
      </div>
  )
}

export default ArticleCard