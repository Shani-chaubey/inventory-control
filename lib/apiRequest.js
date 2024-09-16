import toast from "react-hot-toast"

export const makePostRequest = async( setLoading, url, data, resourceName, reset) =>{
    try {
        setLoading(true)
        const response = await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if(response.ok){
          toast.success(`New ${resourceName} has been created`)
          reset()
          setLoading(false)
        }else{
            reset()
            setLoading(false)
            toast.error('Something Went Wrong')
        }
      } catch (error) {
        setLoading(false)
        toast.error(error)
      }
}

export const getData = async(url) =>{
    try {
      const baseUrl = "http://localhost:3000"
        const response = await fetch(`${baseUrl}${url}`)
        const data = await response.json()
        return data
      } catch (error) {
        console.log(error)
      }
}       