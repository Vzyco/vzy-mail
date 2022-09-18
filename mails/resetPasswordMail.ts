interface params{
    name:String;
    token:String;
}

export default   (params={} as params)=>{
    let{name='',token=''}=params
    return`Sorry ${name} for loosing your account click this link tp reset ${token}`
}