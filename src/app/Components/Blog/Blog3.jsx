import Image from "next/image";
import Link from "next/link";

const Blog3 = () => {
    return (
        <div className="blog3 ">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading3">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700"> Our Blog & News</span>
                <h2 className="title tg-element-title">Unlocking The Power Of Technology: Insights From TechXen</h2>
              </div>
            </div>
          </div> */}
  
          {/* <div className="space30"></div> */}
          <div className="row">
            <div className="col-lg-6">
              
              <div className="blog3-box" data-aos="zoom-in-up" data-aos-duration="800">
              <div className="image image-anime">
                <Image src="/assets/img/blog/blog3-img1.png" alt="img" width={588} height={388}   />
                </div>
                <div className="heading3">
                <div className="space16"></div>
                   <div className="namba-tags-area">
                                    <a href="#" className="tag">
                                      <Image
                                        src="/assets/img/icons/tag6.svg"
                                        alt="img"
                                        width={16}
                                        height={16}
                                      />
                             { " " + "AI Chatbot"}
                                    </a>
                                  </div>
                  {/* <div className="tags">
                    <a href="#" className="date">
                    <Image src="/assets/img/icons/date3.png" alt="img" width={20} height={20}   />
                      Feb 24, 24</a>
                    <a href="#" className="date outhor">
                    <Image src="/assets/img/icons/blog-icon1.png" alt="img" width={16} height={16}   />
                       M.Rahman</a>
                  </div> */}
<div className="space16"></div>
                <h3><Link href="/blog/blog-details">Stay Up-to-Date With The Latest Trends and Developments in Technology</Link></h3>
                <div className="space16"></div>
                <p>Our team of experts will provide in-depth analysis and commentary on industry trends, including the impact of emerging technologies </p>
                {/* <div className="space16"></div>
                <Link href="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link> */}
                </div>
              
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className="blog3-box" data-aos="zoom-in-up" data-aos-duration="1100">
              <div className="heading3">
                
                  {/* <div className="tags">
                    <a href="#" className="date">
                    <Image src="/assets/img/icons/date3.png" alt="img" width={20} height={20}   />
                      Feb 24, 24</a>
                    <a href="#" className="date outhor">
                    <Image src="/assets/img/icons/blog-icon1.png" alt="img" width={16} height={16}   />
                       M.Rahman</a>
                  </div> */}

                <h3><Link href="/blog/blog-details">Stay Up-to-Date With The Latest Trends and Developments in Technology</Link></h3>
                <div className="space16"></div>
                <p>Our team of experts will provide in-depth analysis and commentary on industry trends, including the impact of emerging technologies </p>
                {/* <div className="space16"></div>
                <Link href="/blog/blog-details" className="learn">Read More <span><i className="bi bi-arrow-right"></i></span></Link> */}
                </div>
                <div className="space16"></div>
                   <div className="namba-tags-area">
                                    <a href="#" className="tag">
                                      <Image
                                        src="/assets/img/icons/tag6.svg"
                                        alt="img"
                                        width={16}
                                        height={16}
                                      />
                             { " " + "AI Chatbot"}
                                    </a>
                                  </div>
                                  <div className="space16"></div>
                <div className="image image-anime">
                <Image src="/assets/img/blog/blog3-img2.png" alt="img" width={588} height={388}   />
                </div>
              </div>
            </div>
  
          </div>
        </div>
       </div>
    );
};

export default Blog3;