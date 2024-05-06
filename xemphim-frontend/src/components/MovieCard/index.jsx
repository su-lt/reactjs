import React from "react";
import { BiTime } from "react-icons/bi";

const MovieCard = ({ movie }) => {
    const { posterImg, title, starring, durationTime } = movie;
    return (
        <div className="card flex flex-col">
            <img src={posterImg} alt="" className="w-full h-[400px] shrink-0" />
            <div className="card-badge">
                <BiTime /> <p>{durationTime}</p>
            </div>
            <div className="p-4 flex flex-col flex-1 text-white">
                <h4 className="grow">{title}</h4>
                <p>{starring}</p>
            </div>
        </div>
    );
};

export default MovieCard;
