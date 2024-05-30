import React from 'react'

export default function Abouts() {
  return (
    <>
       <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/1.jpg" alt="about" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2024</h4>
                                <h4 className="subheading">โทรศัพท์มือถือราคาถูก PG v9</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">หน้าจอ ความกว้างหน้าจอ 6 นิ้ว ความละเอียดหน้าจอ HD 480x960pixels กล้อง กล้องหน้า 8 ล้านพิกเซล กล้องหลัง 13 ล้านพิกเซล มีโหมด Face Beauty ถ่ายภาพหน้าชัดหลังเบลอได้รองรับการปลดล็อคหน้าจอด้วยระบบสแกนใบหน้า ระบบปฏิบัติการแอนดรอยด์ 9.0 หน่วยความจำเครื่อง RAM 3 ROM 32</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/2.jpg" alt="about" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2024</h4>
                                <h4 className="subheading">โทรศัพท์มือถือราคาถูก PG v9</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">ระบบประมวลผล CPU MTK 6739 1.3 GHz แบตเตอรี่ 3000mAh การรับประกันสินค้า : 1 ปี (เงื่อนไขเป็นไปตามบริษัทกำหนด) PG รุ่น R1 PRO สีทอง PG รุ่น R1 PRO สีแดง PG รุ่น R1 PRO สีเขียว</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/3.jpg" alt="about" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>โทรศัพท์มือถือราคาถูก PG v9</h4>
                                <h4 className="subheading">โทรศัพท์มือถือราคาถูก PG v9</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">โทรศัพท์มือถือราคาถูก(ล้างสต๊อก)สมาร์ทโฟน PG R3 สุดคุ้มด้วยจอขนาด 6.3 นิ้ว Ram 3 Rom 32 กล้องหน้า 5MP กล้องหลัง 8MP</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/4.jpg" alt="about" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2024</h4>
                                <h4 className="subheading">โทรศัพท์มือถือราคาถูก PG v9</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">โทรศัพท์มือถือราคาถูก(ล้างสต็อค) Smart Phone PG V9 Plusหน้าจอกว้าง 6.3 นิ้ว ROM 64GB android 10.0</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                           
                        </div>
                    </li>
                </ul>
            </div>
        </section>
       
      
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
             
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                          
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <div className="form-group">
                            
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <div className="form-group mb-md-0">
                               
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                             
                                <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                         
                        </div>
                    </div>
                 
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
             
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                </form>
            </div>
        </section>
    
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
                   
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
     






    </>
  )
}
