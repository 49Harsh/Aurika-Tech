// import React, { useState } from 'react';
// import InvoiceForm from './InvoiceForm';
// import InvoicePreview from './InvoicePreview';

// const InvoiceGenerator = () => {
//   const [invoiceData, setInvoiceData] = useState({
//     sellerDetails: {
//       name: '',
//       address: '',
//       city: '',
//       state: '',
//       pincode: '',
//       panNo: '',
//       gstNo: '',
//     },
//     placeOfSupply: '',
//     billingDetails: {
//       name: '',
//       address: '',
//       city: '',
//       state: '',
//       pincode: '',
//       stateCode: '',
//     },
//     shippingDetails: {
//       name: '',
//       address: '',
//       city: '',
//       state: '',
//       pincode: '',
//       stateCode: '',
//     },
//     placeOfDelivery: '',
//     orderDetails: {
//       orderNo: '',
//       orderDate: '',
//     },
//     invoiceDetails: {
//       invoiceNo: '',
//       invoiceDate: '',
//     },
//     reverseCharge: 'No',
//     items: [],
//     logoUrl: '',
//     signatureUrl: '',
//   });

//   const handleInputChange = (section, field, value) => {
//     setInvoiceData(prevData => {
//       if (section === 'placeOfSupply' || section === 'placeOfDelivery' || section === 'reverseCharge' || section === 'logoUrl' || section === 'signatureUrl') {
//         return {
//           ...prevData,
//           [section]: value,
//         };
//       } else {
//         return {
//           ...prevData,
//           [section]: {
//             ...prevData[section],
//             [field]: value,
//           },
//         };
//       }
//     });
//   };
//   const handleItemChange = (index, field, value) => {
//     setInvoiceData(prevData => {
//       const updatedItems = [...prevData.items];
//       updatedItems[index] = {
//         ...updatedItems[index],
//         [field]: value,
//       };
//       return { ...prevData, items: updatedItems };
//     });
//   };

//   const addItem = () => {
//     setInvoiceData(prevData => ({
//       ...prevData,
//       items: [
//         ...prevData.items,
//         { description: '', unitPrice: 0, quantity: 1, discount: 0 },
//       ],
//     }));
//   };

//   const removeItem = (index) => {
//     setInvoiceData(prevData => ({
//       ...prevData,
//       items: prevData.items.filter((_, i) => i !== index),
//     }));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Invoice Generator</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <InvoiceForm
//           invoiceData={invoiceData}
//           handleInputChange={handleInputChange}
//           handleItemChange={handleItemChange}
//           addItem={addItem}
//           removeItem={removeItem}
//         />
//         <InvoicePreview invoiceData={invoiceData} />
//       </div>
//     </div>
//   );
// };

// export default InvoiceGenerator;
import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import InvoicePreview from './InvoicePreview';

const InvoiceGenerator = () => {
  const [invoiceData, setInvoiceData] = useState({
    sellerDetails: {
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      panNo: '',
      gstNo: '',
    },
    placeOfSupply: '',
    billingDetails: {
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      stateCode: '',
    },
    shippingDetails: {
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      stateCode: '',
    },
    placeOfDelivery: '',
    orderDetails: {
      orderNo: '',
      orderDate: '',
    },
    invoiceDetails: {
      invoiceNo: '',
      invoiceDate: '',
    },
    reverseCharge: 'No',
    items: [],
    logoUrl: '',
    signatureUrl: '',
  });

  const handleInputChange = (section, field, value) => {
    setInvoiceData(prevData => {
      if (section === 'placeOfSupply' || section === 'placeOfDelivery' || section === 'reverseCharge' || section === 'logoUrl' || section === 'signatureUrl') {
        return {
          ...prevData,
          [section]: value,
        };
      } else {
        return {
          ...prevData,
          [section]: {
            ...prevData[section],
            [field]: value,
          },
        };
      }
    });
  };

  const handleItemChange = (index, field, value) => {
    setInvoiceData(prevData => {
      const updatedItems = [...prevData.items];
      updatedItems[index] = {
        ...updatedItems[index],
        [field]: value,
      };
      return { ...prevData, items: updatedItems };
    });
  };

  const addItem = () => {
    setInvoiceData(prevData => ({
      ...prevData,
      items: [
        ...prevData.items,
        { description: '', unitPrice: 0, quantity: 1, discount: 0 },
      ],
    }));
  };

  const removeItem = (index) => {
    setInvoiceData(prevData => ({
      ...prevData,
      items: prevData.items.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Invoice Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InvoiceForm
          invoiceData={invoiceData}
          handleInputChange={handleInputChange}
          handleItemChange={handleItemChange}
          addItem={addItem}
          removeItem={removeItem}
        />
        <InvoicePreview invoiceData={invoiceData} />
      </div>
    </div>
  );
};

export default InvoiceGenerator;