import React from 'react';

const TopCustomer = () => {
  return (
    <div className=" mt-4 sm:hidden lg:block ">
      <h1 className='text-primary text-3xl text-center mt-2 mb-2'>TOP CUSTOMER LIST</h1>
  <table className="table relative table-zebra ">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>NAME</th>
        <th>COMPANY NAME</th>
        <th>TRANSJACTION AMOUNT</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th className='xs:hidden'>1</th>
        <td>Cy Ganderton</td>
        <td>GOOLSEN</td>
        <td>20000 USD</td>
      </tr>
      {/* <!-- row 2 --> */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>FALGUN ALT </td>
        <td>30000 USD </td>
      </tr>
      {/* <!-- row 3 --> */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>TAXAS LTD</td>
        <td>10000 USD</td>
      </tr>
      <tr>
        <th>4</th>
        <td>GINUS lUICE</td>
        <td>GOLDING LTD</td>
        <td>10000 USD</td>
      </tr>
    </tbody>
  </table>
</div>
  );
};

export default TopCustomer;