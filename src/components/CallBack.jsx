import React from 'react'
import emailjs from "emailjs-com"
import add from "../images/address.png"
import phone from "../images/phone.png"
import email from "../images/email.png"

function CallBack() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_0fl6fyw', e.target, 'user_jIsrBPLCxqhWQo0DUE201')
            .then((result) => {
                console.log(result.text);
                alert('Email Sent! We will contact you very soon')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <>

            <section className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 mb-4 col-md-5">
                        <div className="card border-primary rounded-0">
                            <div className="card-header p-0">
                                <div className="bg-primary text-white text-center py-2">
                                    <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                                    <p className="m-0">We’ll contact to you soon!</p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <form onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label> Your name </label>
                                    <div className="input-group">
                                        <input type="text" name="name" className="form-control" placeholder="Your beautiful name" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Your email</label>
                                    <div className="input-group mb-2 mb-sm-0">
                                        <input type="text" name="email" className="form-control" placeholder="Eg. you@example.com" required/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <div className="input-group mb-2 mb-sm-0">
                                        <input type="text" name="phone" className="form-control" placeholder="Eg. 9876543210" required />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" name="submit" className="btn btn-outline-primary rounded-1 py-2" />
                                </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-7">
                        <div className="mb-4">
                            <iframe title="mapss" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7264526201184!2d72.84804661481716!3d19.119652755567586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe50ee0014ec486bb!2sWintax%20Solutions%20(Digital%20Signature)!5e0!3m2!1sen!2sin!4v1617725527447!5m2!1sen!2sin" 
                            width="100%" height="450" frameborder="0"  tabindex="0"></iframe>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <a href="https://goo.gl/maps/unwUNbysLBmxaoQs5"
                                 className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><img src={add} width="25" height="25" alt=""/></a>
                                <p> Your Address ….. </p>
                            </div>
                            <div className="col-md-4">
                                <a href="tel:+919833918311" className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><img src={phone} width="25" height="25" alt=""/></a>
                                <p>+91-9833918311</p>
                            </div>
                            <div className="col-md-4">
                                <a href="mailto:chavan.dsc@gmail.com" className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><img src={email} width="25" height="25" alt=""/></a>
                                <p> chavan.dsc@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default CallBack
