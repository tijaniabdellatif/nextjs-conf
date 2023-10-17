import React from 'react';
import Image from 'next/image';


export const ImageComponent = ({path,alt,width,height}) => {
  return (
    <Image src={path} alt={alt} width={width} height={height} />
  )
}

