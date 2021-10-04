const Gifs = ({ gif }) => {
    return(
        <>
            <div>
            <video
              autoplay="true"
              loop="true"
              src={gif}
              className="gif"
            />
          </div>
        </>
    )
}

export default Gifs