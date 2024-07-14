import React from 'react';
import '../assets/styles/FAQs-style.css';

const faqs = [
    {
        id: 1,
        question: 'What is the duration of a horse ride?',
        answer: 'The duration of a horse ride can vary from 30 minutes to a few hours depending on the package you choose.'
    },
    {
        id: 2,
        question: 'Do I need prior experience to ride a horse?',
        answer: 'No, you do not need prior experience. Our staff will provide you with all the necessary instructions and guidance.'
    },
    {
        id: 3,
        question: 'Are helmets provided?',
        answer: 'Yes, helmets and other safety gear are provided for all riders.'
    },
    {
        id: 4,
        question: 'Can I bring my own horse?',
        answer: 'Unfortunately, we do not allow outside horses at our facility.'
    },
];

const FAQs = () => {
    return (
        <div className="container faqs">
            <div className="d-flex justify-content-center align-items-center mb-5">
                <h2 className='text-center'>Key</h2>
                <span>Questions</span>
            </div>
            <div className="accordion" id="faqAccordion">
                {faqs.map(faq => (
                    <div className="accordion-item" key={faq.id}>
                        <h3 className="accordion-header text-black" id={`heading${faq.id}`}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${faq.id}`}
                                aria-expanded="false"
                                aria-controls={`collapse${faq.id}`}
                            >
                                {faq.question}
                            </button>
                        </h3>
                        <div
                            id={`collapse${faq.id}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${faq.id}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
