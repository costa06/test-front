import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p className="success-message">Votre message a été envoyé avec succès.</p>
    )
}

const Newsletter = () => {
    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_p4x3hv8', 
            'template_jgfr42f', 
            e.target, 
            'user_jrfTH2e0Ely35ZCVFdT9S'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);
    return (
        <section className='newslatter'>
            <div className='container'>
                <div className='content'>
                    <div className='singup'>
                        <div className='img'>
                            <img src='/images/newslatter/icon.png' />
                        </div>
                        <div className='text'>
                            <p>Sign up to Newsletter</p>
                        </div>
                    </div>
                    <div className='textnewsletter'>
                        <p>...and receive <strong>$20 coupon for first shopping and free delivery.</strong></p>
                    </div>
                    <div className='formsingup'>
                        <form className="form"  action="" onSubmit={sendEmail}>
                            <div className="form-group">
                                <input 
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                                />
                                <button className="btn-default btn-large">Sign Up</button>
                            </div>
                            <div className="form-group">
                                {result ? <Result /> : null}
                            </div> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
