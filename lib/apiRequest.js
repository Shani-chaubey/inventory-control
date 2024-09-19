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
        console.log(response)
        if(response.ok){
          toast.success(`New ${resourceName} has been created`)
          reset()
          setLoading(false)
        }else{
          if(response.status===409){
            toast.error("The Reservoir Warehouse does not have enough stocks to transfer")
            setLoading(false)
          }else{
            reset()
            setLoading(false)
            toast.error('Something Went Wrong')
          }
        }
      } catch (error) {
        setLoading(false)
        toast.error(error)
      }
}
export const makePutRequest = async( setLoading, url, data, resourceName, redirect) =>{
    try {
        setLoading(true)
        const response = await fetch(url,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        if(response.ok){
          toast.success(`${resourceName} has been Updated`)
          setLoading(false)
          
        }else{
            setLoading(false)
            toast.error('Something Went Wrong')
        }
        redirect()
      } catch (error) {
        setLoading(false)
        toast.error(error)
        
      }
}

export const getData = async(url) =>{
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        const response = await fetch(`${baseUrl}${url}`,{
          cache: "no-store"
        })
        const data = await response.json()
        return data
      } catch (error) {
        console.log(error)
      }
}       