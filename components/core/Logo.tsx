import Image from 'next/image';
import Logo from '../../public/react-store.png';

export default function CardImage({imageSrc = Logo, imageAltText = "React Store"}) {
    return (
        <div className="w-40">
            <Image src={imageSrc} alt={imageAltText}/>
        </div>
    )
}