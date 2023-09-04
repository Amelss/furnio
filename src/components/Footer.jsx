
export default function Footer() {
  return (
      <section className="footer-main ml-[100px] mr-[100px]">
        <div className="footer-container flex justify-around">
          <div className="footer-left">
            <h3 className="text-[24px] font-bold leading-[36px] mb-[50px]">Funiro.</h3>
            <p className="text-[16px] font-normal leading-[24px] max-w-[285px]">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div className="footer-links flex gap-[100px]">
            <div className="links-left">
              <h4 className="text-[16px] font-medium text-[#9F9F9F] mb-[60px]">Links</h4>
              <ul className="flex flex-col gap-[30px]">
                <li className="text-[16px] leading-[24px] font-medium">Home</li>
                <li className="text-[16px] leading-[24px] font-medium">Shop</li>
                <li className="text-[16px] leading-[24px] font-medium">About</li>
                <li className="text-[16px] leading-[24px] font-medium">Contact</li>
              </ul>
            </div>
            <div className="links-right">
              <h4 className="text-[16px] font-medium text-[#9F9F9F] mb-[60px]">Help</h4>
              <ul className="flex flex-col gap-[30px]">
                <li className="text-[16px] leading-[24px] font-medium">Payment Options</li>
                <li className="text-[16px] leading-[24px] font-medium">Returns</li>
                <li className="text-[16px] leading-[24px] font-medium">Privacy Policies</li>
              </ul>
            </div>
          </div>
          <div className="news-letter">
            <h4 className="text-[16px] leading-[24px] font-medium text-[#9F9F9F] mb-[60px]">Newsletter</h4>
            <div className="subscribe flex gap-[20px]">
              <input className="underline outline-none" type="text" placeholder="Enter Your Email Address" />
              <a className="underline" href="/">SUBSCRIBE</a>
            </div>
          </div>
        </div>
        <hr className="w-[1200px] ml-[70px] mt-[50px]"/>
        <p className="ml-[70px] mt-[50px] text-[16px] text-[#000] leading=[24px] font-normal">2023 furino. All rights reverved</p>
      </section>
  )
}
