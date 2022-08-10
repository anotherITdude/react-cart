import Image from 'next/image';

const StoreImage = (props): JSX.Element => {
    return (
        <div className=" min-w-40">
            <Image width={props.width} height={props.height} src={props.src} alt={props.alt}/>
        </div>
    )
}

export default StoreImage

