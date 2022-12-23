const paginate = (repos) => {
    const itemsPerPage = 6
    const numberOfPages = Math.ceil(repos.length / itemsPerPage)    //Math.ceil will round up our result to next higher integer so that its a single a value ex: 11.111111 will be 12
  
    const newRepos = Array.from({ length: numberOfPages }, (_, index) => {   //Array.From creates a new, shallow-copied Array instance from an array. (Array of arrays) 
      const start = index * itemsPerPage
      return repos.slice(start, start + itemsPerPage)   //slice takes in a starting point of index and a value of how many items it shall cut from an array
    }) 
    
    return newRepos
}

export default paginate
