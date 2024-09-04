export const bg_img=(image_source:string)=>{
    return(
        {
            backgroundImage:`url(${image_source})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    )
}
