import React from 'react'
import './top.scss'
import { InfoOutlined, PlayArrow } from '@material-ui/icons'

const Top = ({ type }) => {
    return (
        <div className='main'>
            {type && (
                <div className="cat">
                    <span>
                        {type === "movie" ? "Movies" : "WebSeries"}</span>
                    <select name="genre" id="genre">
                        <option >Genre</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Documentry">Documentry</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Western">Western</option>



                    </select>
                </div>
            )}
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className="data">
                <img src="data:image/jpeg;base64,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" alt="" />
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime dolores alias sequi asperiores deleniti debitis odio mollitia eos dolore a exercitationem quas atque consequuntur illum, harum labore vitae laborum reprehenderit? Animi hic voluptate, aliquam corrupti eligendi explicabo praesentium nulla asperiores, distinctio porro vero. Maxime qui quis ipsum fuga saepe!</span>

                <div className="buttons">
                    <button className="play"><PlayArrow /><span>Play</span></button>
                    <button className="more"><InfoOutlined /><span>More</span></button>
                </div>

            </div>


        </div>
    )
}

export default Top
