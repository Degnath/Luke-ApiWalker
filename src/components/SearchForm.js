import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const SearchForm = () => {

    //state variable to store the categories from the api call
    const [categories, setCategories]= useState([])

    //state variable to store the info collected in the form
    const [formInfo, setFormInfo] = useState({
        category:"people",
        id: ""
    })

    //initialize useHistory and store it in a variable so we can use it
    const history = useHistory();


    //when page loads up, want the axios to call the starwars api and get all the categories, and store the categories in a state variable to that it can be pre-populate at the dropdown with those categories informations.
    useEffect(()=>{
        //use axios to get all the categories
        axios.get("https://swapi.dev/api/")
            .then(res=>{
                console.log("res looks like-->", res)
                console.log(Object.keys(res.data))
                setCategories(Object.keys(res.data))
            })
            .catch(err=> console.log(err))
    },[])

    //this changeHandler is to keep track of inputs changing in the form and it will update by  state variable collecting the formInfo with the info form the form
    const changeHandler= (e)=>{
        console.log("checking inputs!!!")
        console.log(e.target.value) //e.target.value is the information selected or typed in the from inputs
        console.log(e.target.name) //e.target.name is the name of the input that was changed-->and this name of the input matches a key in our state variable formInfo 
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })

    }


    //submit handler-->which is my function that runs after the from is submitted
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("form to check if it is submitted!!")
        console.log(formInfo)
        //AFTER the form is submitted, we redirect using useHistory()

        history.push(`/${formInfo.category}/${formInfo.id}`) //similar to saying "redirect("/:category/:id")"
    }


    return (

            <div className="container-fluid">
                <form onSubmit = {submitHandler} className="form-inline row g-3 align-items-center d-flex" action="">
               <div className="col-auto">
                   <label htmlFor="">Search for:</label>
                    <select onChange = {(e)=>changeHandler(e)} name="category" id="" className="form-select">
                        {
                            categories.map((cat,i)=>{
                                return <option key= {i} value={cat}>{cat}</option>
                            })
                        }
                    </select>
               </div>
               <div className="col-auto">
                    <label htmlFor="">ID:</label>
                    <input onChange = {(e)=>changeHandler(e)} type="number" name="id" id="" className="form-control" />
                    {/* <input onChange = {(e)=>setFormInfo({...formInfo, [e.target.name]:e.target.value})} type="number" name="id" id="" className="form-control" /> */}

               </div>
               <div className="col-auto">
                    <input className = "btn btn-success mt-3" type="submit" value="Search" />
               </div>
            </form>


            </div>



    );
};


export default SearchForm;