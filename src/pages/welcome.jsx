import ReactPlayer from 'react-player'


const WelcomePage = () => {

    return (
        <>
            <div className="container">
            <h1 className="display-4">Under construction. Available soon!</h1>
                <figure>
                    <blockquote className="blockquote">
                        <p>Playing at The Cucukoo's nest</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                            Doctor Jacob Spandorf at <cite title="Source Title">Yad Eliyahu</cite>
                    </figcaption>
                </figure>
                <p>Welcome to the website. Underconstruction but feel free to listen to stuff at the meantime</p>
                <ReactPlayer url="https://soundcloud.com/jacob-spandorf/sets/home-with-friends?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
            </div>
        </>
    )
}

export default WelcomePage