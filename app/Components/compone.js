// pages/index.js
import { useEffect, useState } from 'react';
import { createClient } from 'pexels';

const client = createClient('KtkhIAkhgmtfD1uC3VCJ2viFZXHtav2KvfnxkM3ogCIAkY0fni7r6gRc');

const Compone = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const query = 'abstract';

        client.photos.search({ query, per_page: 15 })
            .then(response => {
                setPhotos(response.photos);
            })
            .catch(error => {
                console.error('Error fetching photos:', error);
            });
    }, []);

    return (
        <div className='mt-10'>
            <h1 className="text-2xl font-bold mb-4 text-center">Abstract</h1>
            <div className="overflow-x-scroll flex md:space-x-4 space-x-2 md:h-48 h-36 bg-slate-50 md:py-4 py-2">
                {photos.length > 0 ? (
                    photos.map((photo) => (
                        <div key={photo.id} className="flex-none shadow-xl ">
                            <img src={photo.src.medium} alt={photo.alt} className="h-full object-contain rounded-md" />
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Compone