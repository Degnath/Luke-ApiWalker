import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';


const Display = () => {
    const { category, id } = useParams();

    const [info, setInfo] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}/`)
            .then(res=>{
                console.log("MAKING AXIOS CALL TO GET INFO ABOUT SOMETHING")
                console.log(res)
                setInfo(res.data)

            })
            .catch(err=>console.log("error is",err))
    },[category,id])


    return (

        <div>
            {category==="people"?
                <>
                    <h1>{info.name}</h1>
                    <h3>Height: {info.height} cm</h3>
                    <h3>Mass: {info.mass} kg</h3>
                    <h3>Hair Color: {info.hair_color}</h3>
                    <h3>Skin Color: {info.skin_color}</h3>
                </>:
                category==="planets"?
                <>
                    <h1>{info.name}</h1>
                    <h3>Climate: {info.climate}</h3>
                    <h3>Terrain: {info.terrain}</h3>
                    <h3>Surface Water: {info.surface_water}</h3>
                    <h3>Population: {info.population}</h3>
                </>:
                category==="films"?
                <>
                    <h1>{info.title}</h1>
                    <h3>Director: {info.director}</h3>
                    <h3>Producer: {info.producer}</h3>
                </>:

                category==="starships"?
                <>
                    <h1>{info.name}</h1>
                    <h3>Model: {info.model}</h3>
                    <h3>Manufacturer: {info.manufacturer}</h3>
                </>:

                category==="species"?
                <>
                    <h1>{info.name}</h1>
                    <h3>Classification: {info.classification}</h3>
                    <h3>Skin Color: {info.skin_colors}</h3>
                    <h3>Hair Color: {info.hair_colors}</h3>
                    <h3>Language: {info.language}</h3>
                </>:
                category==="vehicles"?
                <>
                    <h1>{info.name}</h1>
                    <h3>Model: {info.model}</h3>
                    <h3>Manufacturer: {info.manufacturer}</h3>
                    <h3>Crew: {info.crew}</h3>
                </>:
                <>
                    <h1>huh? who dis</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="" />
                </>
            }

        </div>
    );
};

export default Display;