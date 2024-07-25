// import React from 'react';

// const InvoicePreview = ({ invoiceData }) => {
//   const calculateNetAmount = (item) => {
//     return item.unitPrice * item.quantity - item.discount;
//   };

//   const calculateTaxAmount = (netAmount) => {
//     return netAmount * 0.18;
//   };

//   const calculateTotalAmount = (netAmount, taxAmount) => {
//     return netAmount + taxAmount;
//   };

//   const calculateGrandTotal = () => {
//     return invoiceData.items.reduce((total, item) => {
//       const netAmount = calculateNetAmount(item);
//       const taxAmount = calculateTaxAmount(netAmount);
//       return total + calculateTotalAmount(netAmount, taxAmount);
//     }, 0);
//   };

//   const numberToWords = (num) => {
//     // Implement number to words conversion logic here
//     return "Implement number to words conversion";
//   };

//   return (
//     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Invoice Preview</h2>
      
//       {/* Company Logo */}
//       {invoiceData.logoUrl && (
//         <img src={invoiceData.logoUrl} alt="Company Logo" className="mb-4 max-w-xs" />
//       )}

//       {/* Seller Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Seller Details</h3>
//         <p>{invoiceData.sellerDetails.name}</p>
//         <p>{invoiceData.sellerDetails.address}</p>
//         <p>{`${invoiceData.sellerDetails.city}, ${invoiceData.sellerDetails.state} ${invoiceData.sellerDetails.pincode}`}</p>
//         <p>PAN No.: {invoiceData.sellerDetails.panNo}</p>
//         <p>GST Registration No.: {invoiceData.sellerDetails.gstNo}</p>
//       </div>

//       {/* Place of Supply */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Place of Supply</h3>
//         <p>{invoiceData.placeOfSupply}</p>
//       </div>

//       {/* Billing Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
//         <p>{invoiceData.billingDetails.name}</p>
//         <p>{invoiceData.billingDetails.address}</p>
//         <p>{`${invoiceData.billingDetails.city}, ${invoiceData.billingDetails.state} ${invoiceData.billingDetails.pincode}`}</p>
//         <p>State/UT Code: {invoiceData.billingDetails.stateCode}</p>
//       </div>

//       {/* Shipping Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
//         <p>{invoiceData.shippingDetails.name}</p>
//         <p>{invoiceData.shippingDetails.address}</p>
//         <p>{`${invoiceData.shippingDetails.city}, ${invoiceData.shippingDetails.state} ${invoiceData.shippingDetails.pincode}`}</p>
//         <p>State/UT Code: {invoiceData.shippingDetails.stateCode}</p>
//       </div>

//       {/* Place of Delivery */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Place of Delivery</h3>
//         <p>{invoiceData.placeOfDelivery}</p>
//       </div>

//       {/* Order Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Order Details</h3>
//         <p>Order No.: {invoiceData.orderDetails.orderNo}</p>
//         <p>Order Date: {invoiceData.orderDetails.orderDate}</p>
//       </div>

//       {/* Invoice Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Invoice Details</h3>
//         <p>Invoice No.: {invoiceData.invoiceDetails.invoiceNo}</p>
//         <p>Invoice Date: {invoiceData.invoiceDetails.invoiceDate}</p>
//       </div>

//       {/* Reverse Charge */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Reverse Charge</h3>
//         <p>{invoiceData.reverseCharge}</p>
//       </div>

//       {/* Item Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Item Details</h3>
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">Description</th>
//               <th className="border border-gray-300 px-4 py-2">Unit Price</th>
//               <th className="border border-gray-300 px-4 py-2">Quantity</th>
//               <th className="border border-gray-300 px-4 py-2">Discount</th>
//               <th className="border border-gray-300 px-4 py-2">Net Amount</th>
//               <th className="border border-gray-300 px-4 py-2">Tax Rate</th>
//               <th className="border border-gray-300 px-4 py-2">Tax Amount</th>
//               <th className="border border-gray-300 px-4 py-2">Total Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {invoiceData.items.map((item, index) => {
//               const netAmount = calculateNetAmount(item);
//               const taxAmount = calculateTaxAmount(netAmount);
//               const totalAmount = calculateTotalAmount(netAmount, taxAmount);
//               return (
//                 <tr key={index}>
//                   <td className="border border-gray-300 px-4 py-2">{item.description}</td>
//                   <td className="border border-gray-300 px-4 py-2">{item.unitPrice}</td>
//                   <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
//                   <td className="border border-gray-300 px-4 py-2">{item.discount}</td>
//                   <td className="border border-gray-300 px-4 py-2">{netAmount.toFixed(2)}</td>
//                   <td className="border border-gray-300 px-4 py-2">18%</td>
//                   <td className="border border-gray-300 px-4 py-2">{taxAmount.toFixed(2)}</td>
//                   <td className="border border-gray-300 px-4 py-2">{totalAmount.toFixed(2)}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       {/* Total */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Total</h3>
//         <p>Grand Total: ₹{calculateGrandTotal().toFixed(2)}</p>
//         <p>Amount in words: {numberToWords(calculateGrandTotal())}</p>
//       </div>

//       {/* Signature */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Authorised Signatory</h3>
//         {invoiceData.signatureUrl && (
//           <img src={invoiceData.signatureUrl} alt="Authorised Signatory" className="max-w-xs" />
//         )}
//       </div>
//     </div>
//   );
// };

// export default InvoicePreview;
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvoicePreview = ({ invoiceData }) => {
  const invoiceRef = useRef(null);

  const calculateNetAmount = (item) => {
    return item.unitPrice * item.quantity - item.discount;
  };

  const calculateTaxAmount = (netAmount) => {
    return netAmount * 0.18;
  };

  const calculateTotalAmount = (netAmount, taxAmount) => {
    return netAmount + taxAmount;
  };

  const calculateGrandTotal = () => {
    return invoiceData.items.reduce((total, item) => {
      const netAmount = calculateNetAmount(item);
      const taxAmount = calculateTaxAmount(netAmount);
      return total + calculateTotalAmount(netAmount, taxAmount);
    }, 0);
  };

  const numberToWords = (num) => {
    // Implement number to words conversion logic here
    return "Implement number to words conversion";
  };

  const downloadInvoice = () => {
    const input = invoiceRef.current;
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;

        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('invoice.pdf');
      });
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Invoice Preview</h2>
      
      <button 
        onClick={downloadInvoice}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Download Invoice
      </button>

      <div ref={invoiceRef}>
        {/* Company Logo */}
        {invoiceData.logoUrl && (
          <img src={invoiceData.logoUrl} alt="Company Logo" className="mb-4 max-w-xs" />
        )}

        {/* Seller Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Seller Details</h3>
          <p>{invoiceData.sellerDetails.name}</p>
          <p>{invoiceData.sellerDetails.address}</p>
          <p>{`${invoiceData.sellerDetails.city}, ${invoiceData.sellerDetails.state} ${invoiceData.sellerDetails.pincode}`}</p>
          <p>PAN No.: {invoiceData.sellerDetails.panNo}</p>
          <p>GST Registration No.: {invoiceData.sellerDetails.gstNo}</p>
        </div>

        {/* Place of Supply */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Place of Supply</h3>
          <p>{invoiceData.placeOfSupply}</p>
        </div>

        {/* Billing Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
          <p>{invoiceData.billingDetails.name}</p>
          <p>{invoiceData.billingDetails.address}</p>
          <p>{`${invoiceData.billingDetails.city}, ${invoiceData.billingDetails.state} ${invoiceData.billingDetails.pincode}`}</p>
          <p>State/UT Code: {invoiceData.billingDetails.stateCode}</p>
        </div>

        {/* Shipping Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
          <p>{invoiceData.shippingDetails.name}</p>
          <p>{invoiceData.shippingDetails.address}</p>
          <p>{`${invoiceData.shippingDetails.city}, ${invoiceData.shippingDetails.state} ${invoiceData.shippingDetails.pincode}`}</p>
          <p>State/UT Code: {invoiceData.shippingDetails.stateCode}</p>
        </div>

        {/* Place of Delivery */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Place of Delivery</h3>
          <p>{invoiceData.placeOfDelivery}</p>
        </div>

        {/* Order Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Order Details</h3>
          <p>Order No.: {invoiceData.orderDetails.orderNo}</p>
          <p>Order Date: {invoiceData.orderDetails.orderDate}</p>
        </div>

        {/* Invoice Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Invoice Details</h3>
          <p>Invoice No.: {invoiceData.invoiceDetails.invoiceNo}</p>
          <p>Invoice Date: {invoiceData.invoiceDetails.invoiceDate}</p>
        </div>

        {/* Reverse Charge */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Reverse Charge</h3>
          <p>{invoiceData.reverseCharge}</p>
        </div>

        {/* Item Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Item Details</h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Unit Price</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Discount</th>
                <th className="border border-gray-300 px-4 py-2">Net Amount</th>
                <th className="border border-gray-300 px-4 py-2">Tax Rate</th>
                <th className="border border-gray-300 px-4 py-2">Tax Amount</th>
                <th className="border border-gray-300 px-4 py-2">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => {
                const netAmount = calculateNetAmount(item);
                const taxAmount = calculateTaxAmount(netAmount);
                const totalAmount = calculateTotalAmount(netAmount, taxAmount);
                return (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{item.description}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.unitPrice}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.discount}</td>
                    <td className="border border-gray-300 px-4 py-2">{netAmount.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">18%</td>
                    <td className="border border-gray-300 px-4 py-2">{taxAmount.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2">{totalAmount.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Total</h3>
          <p>Grand Total: ₹{calculateGrandTotal().toFixed(2)}</p>
          <p>Amount in words: {numberToWords(calculateGrandTotal())}</p>
        </div>

        {/* Signature */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Authorised Signatory</h3>
          {invoiceData.signatureUrl && (
            <img src={invoiceData.signatureUrl} alt="Authorised Signatory" className="max-w-xs" />
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;