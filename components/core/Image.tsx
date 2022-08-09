import Image from 'next/image';

const StoreImage = (props): JSX.Element => {
    return (
            <Image width={props.width} height={props.height} src={props.src} alt={props.alt}/>
    )
}

export default StoreImage

