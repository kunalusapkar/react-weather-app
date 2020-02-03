import React from 'react'


function Header() {
  return (
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom     box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Weather App</h5>
        </div>
      </div>
  );
}
// http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=64ac6f9600c1835a2bffa4a4b678d539
export default Header;
