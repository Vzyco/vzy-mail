interface params{
    name:String;
    link:String;
}
export default   (params={} as params)=>{
    let{name='',link=''}=params
    return`<p>
    <img
      alt="Vzy"
      src="https://sendy.vzy.co/uploads/1663594687.png"
      style="width: 24px; height: 24px"
    />
  </p>
  <p>
    <span style="font-family: Helvetica Neue"
      ><font color="#666666">Hi ${name},</font></span
    ><span style="font-family: Helvetica Neue"
      ><font color="#666666">&nbsp;</font></span
    >
  </p>
  <p>
    <span style="font-family: Helvetica Neue"
      ><font color="#666666"
        > Welcome to Vzy! <br />
        We're double-checking to make sure this is your email address.</font
      ></span
    >
  </p>
  <p>&nbsp;</p>
  <p>
      <a href="${link}" style="width: 150px; border: none; border-radius: 0; position: relative; margin-top: 10px; margin-bottom: 40px;
      font-family: Helvetica Neue;
      font-size: 14px;
      background: #111;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      text-align: center;
      transition: 300ms;
      -webkit-appearance: button;
      text-decoration: none;
      opacity: 1;">Confirm Email</a>
  </p>

  <p>
    <span style="font-size: 14px"
      ><font color="#666666" face="Helvetica Neue"
        >Thank you,<br />
        Your friends at Vzy</font
      ></span
    >
  </p>
  <p>
      <span style="font-family: Helvetica Neue"
      ><span style="font-size: 11px"
        ><a href="https://legal.vzy.io/terms" target="_blank"
          ><span style="color: #111111">Terms</span></a
        ><span style="color: #666666"> &nbsp; </span
        ><a href="https://legal.vzy.io/privacy"
          ><span style="color: #111111">Privacy</span></a
        ></span
      ></span
    > <br>
    <span>&nbsp;</span> <br>
    <span style="font-size: 11px"
      ><font color="#666666" face="Helvetica Neue"
        >Vzy, Inc. 2055 Limestone Rd, Ste 200c, Wilmington, DE, USA.</font
      ></span
    ><br />
    <span>&nbsp;</span> <br>
    <span style="font-family: Helvetica Neue"
      ><span style="font-size: 11px"
        ><a href="https://legal.vzy.io/terms" target="_blank"
          ><span style="color: #111111">Terms</span></a
        ><span style="color: #666666"> &nbsp; </span
        ><a href="https://legal.vzy.io/privacy"
          ><span style="color: #111111">Privacy</span></a
        ></span
      ></span
    >
  </p>`
}