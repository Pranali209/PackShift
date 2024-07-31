import React from 'react'
import wheel from "../../assets/wheel-2.png"
import truck from "../../assets/truck-1.png"
function Truck() {
  return (
    <div className="fixed bottom-[4px] right-0 left-0 z-50">
    <div className="w-full px-4 mx-auto">
      <div className="flex">
        <div className="ml-8">
          <div className="relative w-max block mb-[-2px] animate-driving">
            <img src={truck} alt="truck" className="block" />
            <div className="mt-[-4px] flex">
              <span className="ml-4">
                <img src={wheel} alt="truck" />
              </span>
              <span className="ml-14">
                <img src={wheel} alt="truck" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Truck