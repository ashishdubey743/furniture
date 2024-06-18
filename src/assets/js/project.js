let base_url = 'http://127.0.0.1:3000'

async function Api(url, data, method){
    try {
       const response = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
            body:JSON.stringify(data)
        })
        if(!response.ok) throw new Error(`API request failed with status ${response.status}`)
        const responseData = await response.json();
        return responseData;
    } catch (error){
        console.error("Error: ", error)
    }
}