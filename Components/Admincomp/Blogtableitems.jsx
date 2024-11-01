import React from 'react';

const Blogtableitems = ({ authorname, title, date, deleteblog, mongoId }) => {
  const blogDate = new Date(date);

  
  const adminPassword = "Prathm2697"; 

  const handleDelete = () => {
   
    const enteredPassword = prompt("Please enter the admin password to delete this blog:");
    
   
    if (enteredPassword === adminPassword) {
     
      deleteblog(mongoId);
    } else {
      alert("Incorrect password. Deletion not permitted.");
    }
  };

  return (
    <tr className={"bg-white border-b"}>
      <th className={"px-6 py-4"}>
        <p>{authorname ? authorname : "No Author"}</p>
      </th>
      <td className={"px-6 py-4"}>
        {title ? title : "No title Available"}
      </td>
      <td className={"px-6 py-4"}>
        {blogDate.toDateString()}
      </td>
      <td onClick={handleDelete} className={"px-3 py-4 cursor-pointer"}>
        x
      </td>
    </tr>
  );
};

export default Blogtableitems;
