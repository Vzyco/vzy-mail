interface params{
    name:String;
    link:String;
}
export default (params:params)=>{
    let{name,link}=params
    return`<div class="verification-mail-block">
    <svg fill="none" viewBox="0 0 71 21" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.027 8.951l4-8h6l-10 20-10-20h8l-1.48 3h3.48v5zm30.275-8h-4.877L32.736 10.97h-.151L29.904.951h-4.877l4.981 14.545h5.303L40.302.951zm.98 14.545h12.49v-3.598h-6.477v-.095l6.25-7.955V.951H41.519v3.598h6.506v.095l-6.742 8.21v2.642zm23.262 1.392c-.805 2.377-2.462 4.063-5.795 4.063-1.108 0-2.14-.18-2.841-.464l1.023-3.362c1.364.445 2.367.426 2.813-.663l.18-.436L54.753.951h4.849l2.68 10.379h.151L65.15.951l4.877.009-5.483 15.928z" fill="var(--foreground)" fill-rule="evenodd"></path>
    </svg>
    <p class="mt-4 mb-2">Hi ${name},</p>
    <p>Welcome to Vzy! <br> We're double-checking to make sure this is your email address.</p>
    <a class="btn btn-large mt-3" href="${link}">Confirm Email</a>
    <p class="mt-3 mb-4">Thank you, <br> Your friends at Vzy</p>
    <ul class="mt-4">
        <li>
            <a href="">Twitter</a>
        </li>
        <li>
            <a href="">Instagram</a>
        </li>
        <li>
            <a href="">Linkedin</a>
        </li>
    </ul>
    <p class="location mb-3 mt-3">Vzy Inc, · 2055 Limestone Rd Ste 200c · Wilmington, Delaware, USA 19808</p>
    <ul>
        <li>
            <a href="">Terms</a>
        </li>
        <li>
            <a href="">Privacy</a>
        </li>
    </ul>
</div>`
}