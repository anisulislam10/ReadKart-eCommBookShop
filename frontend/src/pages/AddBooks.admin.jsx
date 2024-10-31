import axios from 'axios';
import React, { useState } from 'react'

function AddBooksadmin() {
    const [addBook, setaddBook] = useState({
        url: "",
        title: "",
        author: "",
        price: "",
        desc: "",
        language: ""
    });
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
        // bookid:id
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setaddBook({ ...addBook, [name]: value })
    };
    const handleAddBook = async () => {
       try {
        if (addBook.url === "" ||
            addBook.title === "" ||
            addBook.author === "" ||
            addBook.price === "" ||
            addBook.desc === "" ||
            addBook.language === "") {
            alert("All Fields are Required")
        }
        else {
            const response = await axios.post("http://localhost:3000/api/v1/book/addbook", addBook, { headers })
            // console.log(response)
            setaddBook({
                url:"",
                title:"",
                author:"",
                price:"",
                desc:"",
                language:""
            })
            alert(response.data.message)
           console.log("Status: "+ response.status)

        }
       } catch (error) {
        alert(error.response.data.message);
        
       }
        
    }
   
    return (
        <>
            <h1 className='text-xl'>Add Books Admin</h1>
            <div className='bg-purple-900 rounded py-1'>
                <div className='text-black mx-20'>
                    <h1 className='text-white text-base mb-1'>Image URL</h1>
                    <input type="text" name='url' value={addBook.url} onChange={handleChange} placeholder='https://www.images.com/img1.png' className='px-3  w-full py-1 rounded'  />
                </div>


                <div className='text-black mx-20 mt-5'>
                    <h1 className='text-white text-base mb-1'>Book Title</h1>
                    <input type="text" name='title' value={addBook.title} onChange={handleChange} placeholder='Into to JavaScript' className=' px-3 w-full py-1 rounded '  />
                </div>


                <div className='text-black  mx-20 mt-5'>
                    <h1 className='text-white text-base mb-1'>Book Author</h1>
                    <input type="text" name='author' value={addBook.author} onChange={handleChange} placeholder='Jhon Doe' className=' px-3 w-full py-1 rounded' 
                     />
                </div>

                <div className='flex items-center justify-start mt-5'>
                    <div className='text-black  mx-20'>
                        <h1 className='text-white text-base mb-1'>Language</h1>
                        <input type="text" name='language' value={addBook.language} onChange={handleChange} placeholder='English, Urdu, German' className=' px-3 w-full py-1 rounded' 
                         />
                    </div>

                    <div className='text-black  mx-20 mt-5'>
                        <h1 className='text-white text-base mb-1 '>Price</h1>
                        <input type="number" name="price" value={addBook.price}  onChange={handleChange}  placeholder='1500' className=' px-3 w-full py-1 rounded'
                        />
                    </div>
                </div>


                <div className='text-black  mx-20'>
                    <h1 className='text-white text-base mb-1 mt-5'>Book Description</h1>
                    <textarea name="desc" value={addBook.desc} id="desc" onChange={handleChange} placeholder='From zero to here, complete master in JS...' className=' px-3 w-full py-7  rounded' ></textarea>
                </div>

                <div className='text-white  mx-20'>
                    <button onClick={handleAddBook}  className='bg-blue-600 py-2 px-4 rounded hover:bg-blue-700' >Add Book</button>
                </div>

            </div>
        </>
    )
}

export default AddBooksadmin;