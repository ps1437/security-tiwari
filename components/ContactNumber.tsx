import { ContactInfo } from '@/data/Data';
import React from 'react';

const ContactNumber = React.memo(() => {
    const contactNumber = () => {
        const contacts = ContactInfo.mobileNumber.split(",");
        const lastIndex = contacts.length - 1;
        return contacts.map((mn, index) => (
          <a key={index} href={`tel:${mn}`} className='text-sm'>
            {mn} {index !== lastIndex && " | "}
          </a>
        ));
    };
  
    return (
        <>{contactNumber()}</>
    );
});

ContactNumber.displayName = "ContactNumber";

export default ContactNumber;
