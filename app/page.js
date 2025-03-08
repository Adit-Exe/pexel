"use client";
import { useEffect, useState } from 'react';
import { createClient } from 'pexels';


import Compone from './Components/compone.js'
import Compotwo from './Components/compotwo.js'
import Compothree from './Components/compothree.js'
import Compofour from './Components/compofour.js'
import Compofive from './Components/compofive.js'
import Hero from './Components/hero.js'
import Footer from './Components/footer.js'

const client = createClient('KtkhIAkhgmtfD1uC3VCJ2viFZXHtav2KvfnxkM3ogCIAkY0fni7r6gRc');

export default function Home() {
    const [photos, setPhotos] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const fetchData = async (page = 1) => {
        try {
            const response = await client.photos.search({ query, per_page: 20, page });
            if (response.photos && response.photos.length > 0) {
                setPhotos(prevPhotos => page === 1 ? response.photos : [...prevPhotos, ...response.photos]);
            }
        } catch (error) {
            console.error('Failed to fetch photos:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);  // Reset page to 1
        setPhotos([]);  // Clear previous photos
        fetchData(1);
    };

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage);
    };

    const downloadImage = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
        <Hero/>
        <div className='flex justify-center items-center flex-col gap-5'>
            <form onSubmit={handleSubmit} className='bg-slate-50 shadow-xl shadow-slate-200 p-5 w-fit flex gap-5 mb-10 rounded-xl h-20 mt-10 md:scale-100 sm:scale-75 scale-[0.7]'>
                <input
                    placeholder='Search'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='rounded-full placeholder:px-2 w-96 px-2'
                />
                <button type="submit" className='bg-white  px-3 rounded-full active:text-white transition-all'>Search</button>
            </form>
            </div>

            <div className='flex items-center justify-center flex-col'>
                
                    <div id='con' className='columns-[150px] sm:columns-[250px]' >
                        {photos.map(photo => (
                            <div className='shadow-xl rounded-md w-fit ' key={photo.id}>
                                <img                             
                                    src={photo.src.medium}
                                    alt={photo.alt}
                                    width='250px'
                                    className=' rounded-md cursor-pointer mb-5'
                                    onClick={() => downloadImage(photo.src.original)}
                                />
                       
                            </div>
                        ))}
                    </div>
               
                <button onClick={handleLoadMore} className='bg-white  px-3 rounded-full shadow-xl p-2 shadow-slate-200 mt-10 active:text-white transition-all'>Load more</button>
            
            </div>
            
           <Compone/>
           <Compotwo/>
           <Compothree/>
           <Compofour/>
           <Compofive/>
           <Footer/>
        </>
    );
}
//<p className='m-5 text-center text-sm'>@{photo.photographer}</p>