import React from 'react'
import $ from 'jquery'
function TableData(props) {
    $('document').ready(function(){let list ='' ;
        props.value.map((e)=>{
            list += `<tr style="border: 1px solid black">
                        <td style="border: 1px solid black">${e.Id}</td>
                        <td style="border: 1px solid black">${e.fname}</td>
                        <td style="border: 1px solid black">${e.lname}</td>
                        <td style="border: 1px solid black">${e.email}</td>
                        <td style="border: 1px solid black">${e.phone}</td>
                    </tr>
            `
        })
        document.getElementById('tablebody').innerHTML = list;})
        var tableStyle = {
            "border": "1px solid black"
         };
  return (
    

    <div className='w-full'>
        <table className='w-full' style={tableStyle}>
            <tr className='w-full' style={tableStyle}>
                <th className='text-left' style={tableStyle}>ID</th>
                <th  className='text-left' style={tableStyle}>FIRST NAME</th>
                <th  className='text-left' style={tableStyle}>LAST NAME</th>
                <th  className='text-left' style={tableStyle}>EMAIL</th>
                <th  className='text-left' style={tableStyle}>PHONE</th>
            </tr>
            <tbody  id='tablebody'>
                s
            </tbody>
        </table>
    </div>
  )
}
export default TableData