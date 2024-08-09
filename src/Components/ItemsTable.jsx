import React from 'react';

function ItemsTable() {
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sr.no.</th>
      <th scope="col">name</th>
      <th scope="col">price</th>
      <th scope="col">img</th>
      <th scope="col">description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Rajveer</td>
      <td>200</td>
      <img src="/public/IMG_20210110_065610 - Copy.jpg" alt="..."  style={{ width: 100, height: 100 }}/>

      <td>student......</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>hello</td>
      <td>250</td>
      <img src="/public/IMG_20210110_065610 - Copy.jpg" alt="..." style={{ width: 100, height: 100 }}/>

      <td>study......</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >hello2</td>
      <td>300</td>
      <img src="/public/IMG_20210110_065610 - Copy.jpg" alt="..." style={{ width: 100, height: 100 }}/>

      <td>@twitter</td>
    </tr>
  </tbody>
</table>

    </>
  );
}

export default ItemsTable;