interface params{
    name:String;
    link:String;
}
export default   (params={} as params)=>{
    let{name=''}=params
    return`
    ${name}
    `
}