import React, { useState, useEffect, createContext } from 'react';
import paginate from '../utils';

const rootUrl = 'https://api.github.com';
const GithubContext = createContext()

const GithubProvider = ({children}) => {
    const[githubUser, setGithubUser] = useState('ahmedGad-dev')
    const[data, setData] = useState([])
    const[isLoading, setIsLoading] = useState(false)
    const[error, setError] = useState({show: false, message: ''})

   
   

    const fetchGithubUser = async(user) => {
        try {
            setIsLoading(true)
             const response = await fetch(`${rootUrl}/users/${user}`)
             const data = await response.json()
          if(response){
            setGithubUser(data)
            const {login} = data
            const repos = await fetch(`${rootUrl}/users/${login}/repos?per_page=100`)
            const reposData = await repos.json()
            setData(paginate(reposData))                       
          }else{
            toggleError(true, 'No user found matching this user name')
          }      
          setIsLoading(false)
         }catch (error){
            console.log(error)
        }
     }

    const toggleError = ((show = false, message = '') => {
        setError({show, message})
    })

    useEffect(() => {
      fetchGithubUser('ahmedGad-dev')
       // eslint-disable-next-line
    },[])

    return(
        <GithubContext.Provider value={{
            fetchGithubUser,         
            data,   
            error,
            isLoading,      
            githubUser
        }}>
            {children}
        </GithubContext.Provider>
    )
}


export {GithubContext, GithubProvider}

