document.querySelector('#Search-Form').addEventListener('submit', async function(event){
    event.preventDefault()
    

    const data=[]
    const query = document.querySelector('#Search-input').value
    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}&geo=US&lang=en&type=video&duration=short&upload_date=hour&sort_by=relevance`;
     const options={
        method:'GET',

    headers:{
        "x-rapidapi-key":'4cc74857e9msh4befe9513d53c21p162eeajsn313fd1d9c1fd',
        "x-rapidapi-host":'youtube-v3-alternative.p.rapidapi.com'
        }
     }


     try{
        const response = await fetch(url,options)
        const result = await response.json();
        console.log(result)
     }catch(error){
        console.error("Error Fetching Search Result",error)
     }
})