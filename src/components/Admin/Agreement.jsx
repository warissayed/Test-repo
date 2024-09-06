import React, { useState } from 'react';

const Agreement = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        by: '',
        title: '',
        date: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.address) formErrors.address = 'Address is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!formData.by) formErrors.by = 'By field is required';
        if (!formData.title) formErrors.title = 'Title is required';
        if (!formData.date) formErrors.date = 'Date is required';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully");
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4 py-8">
            <div className="max-w-2xl mx-auto p-6 my-5 bg-white shadow-lg rounded-md">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Pay After Placement</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Company and Participant Details */}
                    <div>
                        <p className="mb-2"><strong>Company Name:</strong> The Entrepreneurship Network</p>
                        <p className="mb-2"><strong>Location:</strong> Noida, Uttar Pradesh</p>
                        <p className="mb-4"><strong>Email:</strong> info@entrepreneurshipnetwork.net</p>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`mt-1 block w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`mt-1 block w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`mt-1 block w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                    </div>
                    {/* Agreement Sections */}
                    <ul className="list-disc list-inside space-y-4 text-sm md:text-base">
                        {[
                            {
                                title: "Program Description",
                                content: "The Entrepreneurship Network (TEN) agrees to provide the Participant with placement services, including training, coaching, and career support, as part of the 'Pay After Placement Program.'"
                            },
                            {
                                title: "Fees",
                                content: "The total fee for the program is ₹37,500 (Thirty-Seven Thousand Five Hundred Rupees). This fee is payable within four (4) weeks of the Participant's successful placement in a job."
                            },
                            {
                                title: "Payment Terms",
                                content: "The payment of ₹37,500 must be made by the Participant within four (4) weeks from the date of their official start at a new job. Payments are to be made via bank transfer to the account details provided by TEN, which will be communicated upon the Participant's placement. The Participant is obligated to pay the fee if they secure a placement either through TEN’s services or independently (i.e., from sources outside TEN) during the term of this agreement."
                            },
                            {
                                title: "Responsibilities of The Entrepreneurship Network",
                                content: "Provide professional training and career guidance to the Participant. Assist in the Participant’s job search and placement process. Ensure that the placement aligns with the Participant's career goals and skills."
                            },
                            {
                                title: "Responsibilities of the Participant",
                                content: "Attend all scheduled training sessions and workshops. Actively participate in the job search and application process. Pay the agreed fee within the stipulated time frame upon securing employment, regardless of whether the placement is through TEN or from external sources."
                            },
                            {
                                title: "Termination",
                                content: "Either party may terminate this agreement with written notice if the other party breaches a material term of the agreement. Upon termination by TEN for cause, the Participant will still be obligated to pay any outstanding fees if they have been successfully placed in a job, regardless of the source of placement."
                            },
                            {
                                title: "Confidentiality",
                                content: "Both parties agree to keep confidential any proprietary information and not to disclose such information to any third party without prior written consent."
                            },
                            {
                                title: "Governing Law",
                                content: "This Agreement shall be governed by and construed in accordance with the laws of the State of Uttar Pradesh, India."
                            },
                            {
                                title: "Dispute Resolution",
                                content: "Any disputes arising under this agreement will be resolved through negotiation or, if necessary, through binding arbitration in Noida, Uttar Pradesh."
                            },
                            {
                                title: "Entire Agreement",
                                content: "This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements or understandings, whether written or oral, relating to the subject matter hereof."
                            }
                        ].map((section, index) => (
                            <li key={index}>
                                <strong>{section.title}</strong>
                                <p className="mt-1">{section.content}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Signature Section */}
                    <div className="mt-6">
                        <p className="mb-2"><strong>IN WITNESS WHEREOF, the parties hereto have executed this Agreement.</strong></p>
                        <p><strong>The Entrepreneurship Network (TEN) </strong></p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="by" className="block text-sm font-medium text-gray-700">By</label>
                                <input
                                    type="text"
                                    name="by"
                                    value={formData.by}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full p-2 border ${errors.by ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                />
                                {errors.by && <p className="text-red-500 text-xs mt-1">{errors.by}</p>}
                            </div>
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className={`mt-1 block w-full p-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                        </div>
                    </div>

                    {/* Participant Signature */}
                    <div className="mt-6">
                        <p><strong>Participant:</strong></p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="participantBy" className="block text-sm font-medium text-gray-700">By</label>
                                <input
                                    type="text"
                                    name="by"
                                    value={formData.by}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full p-2 border ${errors.by ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                />
                                {errors.by && <p className="text-red-500 text-xs mt-1">{errors.by}</p>}
                            </div>
                            <div>
                                <label htmlFor="participantTitle" className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="participantDate" className="block text-sm font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className={`mt-1 block w-full p-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                            Submit Agreement
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Agreement;























// import React, { useState } from 'react';

// const Agreement = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         address: '',
//         email: '',
//         by: '',
//         title: '',
//         date: ''
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const validateForm = () => {
//         let formErrors = {};
//         if (!formData.name) formErrors.name = 'Name is required';
//         if (!formData.address) formErrors.address = 'Address is required';
//         if (!formData.email) {
//             formErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             formErrors.email = 'Email is invalid';
//         }
//         if (!formData.by) formErrors.by = 'By field is required';
//         if (!formData.title) formErrors.title = 'Title is required';
//         if (!formData.date) formErrors.date = 'Date is required';

//         setErrors(formErrors);
//         return Object.keys(formErrors).length === 0;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             alert("Form submitted successfully");
//         }
//     };

//     return (
//         <div className="bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen flex justify-center items-center px-4 py-8">
//             <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-md">
//                 <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Pay After Placement</h2>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Company and Participant Details */}
//                     <div>
//                         <p className="text-lg"><strong>Company Name:</strong> The Entrepreneurship Network</p>
//                         <p className="text-lg"><strong>Location:</strong> Noida, Uttar Pradesh</p>
//                         <p className="text-lg mb-4"><strong>Email:</strong> info@entrepreneurshipnetwork.net</p>

//                         <div className="mb-4">
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className={`mt-1 block w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                                 placeholder="Enter your name"
//                             />
//                             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
//                             <input
//                                 type="text"
//                                 name="address"
//                                 value={formData.address}
//                                 onChange={handleChange}
//                                 className={`mt-1 block w-full p-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                                 placeholder="Enter your address"
//                             />
//                             {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
//                         </div>

//                         <div className="mb-4">
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                                 placeholder="Enter your email"
//                             />
//                             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                         </div>
//                     </div>

//                     {/* Agreement Sections */}
//                     <ul className="list-disc list-inside space-y-4 text-sm md:text-base text-gray-700">
//                         {[
//                             {
//                                 title: "Program Description",
//                                 content: "The Entrepreneurship Network (TEN) agrees to provide the Participant with placement services, including training, coaching, and career support, as part of the 'Pay After Placement Program.'"
//                             },
//                             {
//                                 title: "Fees",
//                                 content: "The total fee for the program is ₹37,500 (Thirty-Seven Thousand Five Hundred Rupees). This fee is payable within four (4) weeks of the Participant's successful placement in a job."
//                             },
//                             {
//                                 title: "Payment Terms",
//                                 content: "The payment of ₹37,500 must be made by the Participant within four (4) weeks from the date of their official start at a new job. Payments are to be made via bank transfer to the account details provided by TEN, which will be communicated upon the Participant's placement. The Participant is obligated to pay the fee if they secure a placement either through TEN’s services or independently (i.e., from sources outside TEN) during the term of this agreement."
//                             },
//                             {
//                                 title: "Responsibilities of The Entrepreneurship Network",
//                                 content: "Provide professional training and career guidance to the Participant. Assist in the Participant’s job search and placement process. Ensure that the placement aligns with the Participant's career goals and skills."
//                             },
//                             {
//                                 title: "Responsibilities of the Participant",
//                                 content: "Attend all scheduled training sessions and workshops. Actively participate in the job search and application process. Pay the agreed fee within the stipulated time frame upon securing employment, regardless of whether the placement is through TEN or from external sources."
//                             },
//                             {
//                                 title: "Termination",
//                                 content: "Either party may terminate this agreement with written notice if the other party breaches a material term of the agreement. Upon termination by TEN for cause, the Participant will still be obligated to pay any outstanding fees if they have been successfully placed in a job, regardless of the source of placement."
//                             },
//                             {
//                                 title: "Confidentiality",
//                                 content: "Both parties agree to keep confidential any proprietary information and not to disclose such information to any third party without prior written consent."
//                             },
//                             {
//                                 title: "Governing Law",
//                                 content: "This Agreement shall be governed by and construed in accordance with the laws of the State of Uttar Pradesh, India."
//                             },
//                             {
//                                 title: "Dispute Resolution",
//                                 content: "Any disputes arising under this agreement will be resolved through negotiation or, if necessary, through binding arbitration in Noida, Uttar Pradesh."
//                             },
//                             {
//                                 title: "Entire Agreement",
//                                 content: "This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements or understandings, whether written or oral, relating to the subject matter hereof."
//                             }
//                         ].map((section, index) => (
//                             <li key={index}>
//                                 <strong>{section.title}</strong>
//                                 <p className="mt-1">{section.content}</p>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* Signature Section */}
//                     <div className="mt-6">
//                         <p className="text-lg mb-2"><strong>IN WITNESS WHEREOF, the parties hereto have executed this Agreement.</strong></p>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                             <div>
//                                 <label htmlFor="by" className="block text-sm font-medium text-gray-700">By</label>
//                                 <input
//                                     type="text"
//                                     name="by"
//                                     value={formData.by}
//                                     onChange={handleChange}
//                                     className={`mt-1 block w-full p-3 border ${errors.by ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                                     placeholder="Signatory Name"
//                                 />
//                                 {errors.by && <p className="text-red-500 text-xs mt-1">{errors.by}</p>}
//                             </div>
//                             <div>
//                                 <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                                 <input
//                                     type="text"
//                                     name="title"
//                                     value={formData.title}
//                                     onChange={handleChange}
//                                     className={`mt-1 block w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                                     placeholder="Signatory Title"
//                                 />
//                                 {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
//                             </div>
//                         </div>
//                         <div className="mb-4">
//                             <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
//                             <input
//                                 type="date"
//                                 name="date"
//                                 value={formData.date}
//                                 onChange={handleChange}
//                                 className={`mt-1 block w-full p-3 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                             />
//                             {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors"
//                     >
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Agreement;
