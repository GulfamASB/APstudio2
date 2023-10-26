"use client"
import Link from 'next/link'
import {useState} from 'react'
import {parseCookies} from 'nookies'
import { useRouter } from "next/navigation";

const Post = ()=>{
  const router = useRouter()
  const [name,setName] = useState("")
  const [media,setMedia] = useState("")
   const handleSubmit = async (e)=>{
     e.preventDefault()
 
  

     try{
            const mediaUrl =  await imageUpload()
     const res =  await fetch(`/api/products`,{
       method:"POST",
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify({
         name,
         mediaUrl,
 
       })
       
     })
     
     const res2 = await res.json()
     if(res2.error){
       M.toast({html: res2.error,classes:"red"})
     }else{
       M.toast({html: "Product saved",classes:"green"})
     }
     }catch(err){
       console.log(err)
     }
   }
   const imageUpload = async ()=>{
     const data =  new FormData()
     data.append('file',media)
     data.append('upload_preset',"xqzfuiej")
     data.append('cloud_name',"gulfam123")
     const res = await fetch("https://api.cloudinary.com/v1_1/gulfam123/image/upload",{
       method:"POST",
       body:data
     })
     const res2  = await res.json()
     return res2.url
}


  return (
    <div style={{ marginTop: '-9rem' }}>
      <section class="relative z-10 max-w-4x1  p-6 mx-auto  rounded-md  dark:bg-gray-800 mt-20">
        <h1 class="text-xl font-bold text-black capitalize dark:text-black ">Post</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-black dark:text-gray-200" for="username">Product Nmae</label>
              <input 
              value={name} 
              name="name"
              id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-[#d6d3d1] border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div>
              <label class="block  text-sm font-medium text-black">
                Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-[#fee2e2] rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" 
                       accept="image/*"
                       onChange={(e)=>setMedia(e.target.files[0])}/>
                        
                    </label>
                  </div>
                  <p class="text-xs text-black">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-1">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#450a0a] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600
            "type="submit"
            onClick={() => router.push('/')}
            >Save</button>
          </div>
        </form>
      </section>


    </div>
  )
}

export default Post