"use client";
import Image from 'next/image';

const ListingCard = ({ listing, imageSrc , onClick}: { listing: any, imageSrc: string , onClick: () => void}) => {
    return (
      <div className = "items-center justify-center cursor-pointer" onClick={onClick}>
        <div className="card rounded-md text-left h-64 bg-smokeGrey">
            <Image src={imageSrc} alt={`Image of ${listing.address}`} width={400} height={400} className="hover:scale-105 transition-transform duration-350 w-full h-full object-cover rounded-md"/>
        </div>
        <div className = "py-3">
            <div className='flex justify-between'>
                <p className="text-black"><b>{listing.address}</b></p>
                {listing.city !== listing.province ? (
                    <p className="text-black flex justify-between">
                        <span className='text-black italic'>{listing.city}, {listing.province}</span>
                    </p>
                    ) : (
                    <p className="text-black">
                        <span className='text-black italic'>{listing.address.city}</span>
                    </p>
                    )}
            </div>
            <div className='flex justify-between'>
                <p><span className='text-black italic'>${listing.price}</span></p>
                <span className='text-black italic'>{listing.country}</span>
            </div>
        </div>    
      </div>
    );
}

export default ListingCard;