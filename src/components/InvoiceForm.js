// import React from 'react';

// const InvoiceForm = ({
//   invoiceData,
//   handleInputChange,
//   handleItemChange,
//   addItem,
//   removeItem,
// }) => {
//   return (
//     <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//       <h2 className="text-2xl font-bold mb-4">Invoice Details</h2>
      
//       {/* Seller Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Seller Details</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//           type="text"
//           placeholder="Name"
//           value={invoiceData.sellerDetails.name}
//           onChange={(e) => handleInputChange('sellerDetails', 'name', e.target.value)}
//         />
//         {/* Add more input fields for seller details */}
//       </div>

//       {/* Place of Supply */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Place of Supply</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           type="text"
//           placeholder="Place of Supply"
//           value={invoiceData.placeOfSupply}
//           onChange={(e) => handleInputChange('placeOfSupply', '', e.target.value)}
//         />
//       </div>

//       {/* Billing Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//           type="text"
//           placeholder="Name"
//           value={invoiceData.billingDetails.name}
//           onChange={(e) => handleInputChange('billingDetails', 'name', e.target.value)}
//         />
//         {/* Add more input fields for billing details */}
//       </div>

//       {/* Shipping Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//           type="text"
//           placeholder="Name"
//           value={invoiceData.shippingDetails.name}
//           onChange={(e) => handleInputChange('shippingDetails', 'name', e.target.value)}
//         />
//         {/* Add more input fields for shipping details */}
//       </div>

//       {/* Place of Delivery */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Place of Delivery</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           type="text"
//           placeholder="Place of Delivery"
//           value={invoiceData.placeOfDelivery}
//           onChange={(e) => handleInputChange('placeOfDelivery', '', e.target.value)}
//         />
//       </div>

//       {/* Order Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Order Details</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//           type="text"
//           placeholder="Order No."
//           value={invoiceData.orderDetails.orderNo}
//           onChange={(e) => handleInputChange('orderDetails', 'orderNo', e.target.value)}
//         />
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           type="date"
//           placeholder="Order Date"
//           value={invoiceData.orderDetails.orderDate}
//           onChange={(e) => handleInputChange('orderDetails', 'orderDate', e.target.value)}
//         />
//       </div>

//       {/* Invoice Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Invoice Details</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//           type="text"
//           placeholder="Invoice No."
//           value={invoiceData.invoiceDetails.invoiceNo}
//           onChange={(e) => handleInputChange('invoiceDetails', 'invoiceNo', e.target.value)}
//         />
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           type="date"
//           placeholder="Invoice Date"
//           value={invoiceData.invoiceDetails.invoiceDate}
//           onChange={(e) => handleInputChange('invoiceDetails', 'invoiceDate', e.target.value)}
//         />
//       </div>

//       {/* Reverse Charge */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Reverse Charge</h3>
//         <select
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           value={invoiceData.reverseCharge}
//           onChange={(e) => handleInputChange('reverseCharge', '', e.target.value)}
//         >
//           <option value="No">No</option>
//           <option value="Yes">Yes</option>
//         </select>
//       </div>

//       {/* Item Details */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Item Details</h3>
//         {invoiceData.items.map((item, index) => (
//           <div key={index} className="mb-4 p-4 border rounded">
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               type="text"
//               placeholder="Description"
//               value={item.description}
//               onChange={(e) => handleItemChange(index, 'description', e.target.value)}
//             />
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               type="number"
//               placeholder="Unit Price"
//               value={item.unitPrice}
//               onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value))}
//             />
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               type="number"
//               placeholder="Quantity"
//               value={item.quantity}
//               onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
//             />
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//               type="number"
//               placeholder="Discount"
//               value={item.discount}
//               onChange={(e) => handleItemChange(index, 'discount', parseFloat(e.target.value))}
//             />
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               onClick={() => removeItem(index)}
//             >
//               Remove Item
//             </button>
//           </div>
//         ))}
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={addItem}
//         >
//           Add Item
//         </button>
//       </div>

//       {/* Logo and Signature URLs */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Logo and Signature</h3>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
//           type="text"
//           placeholder="Logo URL"
//           value={invoiceData.logoUrl}
//           onChange={(e) => handleInputChange('logoUrl', '', e.target.value)}
//         />
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           type="text"
//           placeholder="Signature URL"
//           value={invoiceData.signatureUrl}
//           onChange={(e) => handleInputChange('signatureUrl', '', e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default InvoiceForm;

import React from 'react';

const InvoiceForm = ({
  invoiceData,
  handleInputChange,
  handleItemChange,
  addItem,
  removeItem,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Invoice Details</h2>
      
      {/* Seller Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Seller Details</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Name"
          value={invoiceData.sellerDetails.name}
          onChange={(e) => handleInputChange('sellerDetails', 'name', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Address"
          value={invoiceData.sellerDetails.address}
          onChange={(e) => handleInputChange('sellerDetails', 'address', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="City"
          value={invoiceData.sellerDetails.city}
          onChange={(e) => handleInputChange('sellerDetails', 'city', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="State"
          value={invoiceData.sellerDetails.state}
          onChange={(e) => handleInputChange('sellerDetails', 'state', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Pincode"
          value={invoiceData.sellerDetails.pincode}
          onChange={(e) => handleInputChange('sellerDetails', 'pincode', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="PAN No."
          value={invoiceData.sellerDetails.panNo}
          onChange={(e) => handleInputChange('sellerDetails', 'panNo', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="GST Registration No."
          value={invoiceData.sellerDetails.gstNo}
          onChange={(e) => handleInputChange('sellerDetails', 'gstNo', e.target.value)}
        />
      </div>

      {/* Place of Supply */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Place of Supply</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Place of Supply"
          value={invoiceData.placeOfSupply}
          onChange={(e) => handleInputChange('placeOfSupply', null, e.target.value)}
        />
      </div>

      {/* Billing Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Name"
          value={invoiceData.billingDetails.name}
          onChange={(e) => handleInputChange('billingDetails', 'name', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Address"
          value={invoiceData.billingDetails.address}
          onChange={(e) => handleInputChange('billingDetails', 'address', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="City"
          value={invoiceData.billingDetails.city}
          onChange={(e) => handleInputChange('billingDetails', 'city', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="State"
          value={invoiceData.billingDetails.state}
          onChange={(e) => handleInputChange('billingDetails', 'state', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Pincode"
          value={invoiceData.billingDetails.pincode}
          onChange={(e) => handleInputChange('billingDetails', 'pincode', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="State/UT Code"
          value={invoiceData.billingDetails.stateCode}
          onChange={(e) => handleInputChange('billingDetails', 'stateCode', e.target.value)}
        />
      </div>

      {/* Shipping Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Name"
          value={invoiceData.shippingDetails.name}
          onChange={(e) => handleInputChange('shippingDetails', 'name', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Address"
          value={invoiceData.shippingDetails.address}
          onChange={(e) => handleInputChange('shippingDetails', 'address', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="City"
          value={invoiceData.shippingDetails.city}
          onChange={(e) => handleInputChange('shippingDetails', 'city', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="State"
          value={invoiceData.shippingDetails.state}
          onChange={(e) => handleInputChange('shippingDetails', 'state', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Pincode"
          value={invoiceData.shippingDetails.pincode}
          onChange={(e) => handleInputChange('shippingDetails', 'pincode', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="State/UT Code"
          value={invoiceData.shippingDetails.stateCode}
          onChange={(e) => handleInputChange('shippingDetails', 'stateCode', e.target.value)}
        />
      </div>

      {/* Place of Delivery */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Place of Delivery</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Place of Delivery"
          value={invoiceData.placeOfDelivery}
          onChange={(e) => handleInputChange('placeOfDelivery', null, e.target.value)}
        />
      </div>

      {/* Order Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Order Details</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Order No."
          value={invoiceData.orderDetails.orderNo}
          onChange={(e) => handleInputChange('orderDetails', 'orderNo', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          placeholder="Order Date"
          value={invoiceData.orderDetails.orderDate}
          onChange={(e) => handleInputChange('orderDetails', 'orderDate', e.target.value)}
        />
      </div>

      {/* Invoice Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Invoice Details</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Invoice No."
          value={invoiceData.invoiceDetails.invoiceNo}
          onChange={(e) => handleInputChange('invoiceDetails', 'invoiceNo', e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          placeholder="Invoice Date"
          value={invoiceData.invoiceDetails.invoiceDate}
          onChange={(e) => handleInputChange('invoiceDetails', 'invoiceDate', e.target.value)}
        />
      </div>

     {/* Reverse Charge */}
     <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Reverse Charge</h3>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={invoiceData.reverseCharge}
          onChange={(e) => handleInputChange('reverseCharge', null, e.target.value)}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      {/* Item Details */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Item Details</h3>
        {invoiceData.items.map((item, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="text"
              placeholder="Description"
              value={item.description}
              onChange={(e) => handleItemChange(index, 'description', e.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="number"
              placeholder="Unit Price"
              value={item.unitPrice}
              onChange={(e) => handleItemChange(index, 'unitPrice', parseFloat(e.target.value))}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
              type="number"
              placeholder="Discount"
              value={item.discount}
              onChange={(e) => handleItemChange(index, 'discount', parseFloat(e.target.value))}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => removeItem(index)}
            >
              Remove Item
            </button>
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={addItem}
        >
          Add Item
        </button>
      </div>

      {/* Logo and Signature URLs */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Logo and Signature</h3>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          type="text"
          placeholder="Logo URL"
          value={invoiceData.logoUrl}
          onChange={(e) => handleInputChange('logoUrl', null, e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Signature URL"
          value={invoiceData.signatureUrl}
          onChange={(e) => handleInputChange('signatureUrl', null, e.target.value)}
        />
      </div>
    </div>
  );
};

export default InvoiceForm;