import React from "react";

function PatientDetail() {
  return (
    <>
      <div className=" bg-white rounded-lg border-4 border-gray-200 shadow-lg dark:bg-blue-600 dark:border-blue-500 p-5 ">
        <h3 className="mb-3 text-xl tracking-wider text-white">Patient Details</h3>
        <div className="flex justify-between">
          <input
            type="text"
            className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
            name=""
            placeholder="MDN Number"
            id=""
          />

          <input
            type="text"
            className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
            name=""
            placeholder="Patient Name"
            id=""
          />

          <input
            type="text"
            className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
            name=""
            placeholder="Age"
            id=""
          />

          <input
            type="text"
            className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
            name=""
            placeholder="Gender"
            id=""
          />
        </div>

        <div className="flex justify-items-start space-x-5 mt-3">
          <select
            id="small"
            class="block px-5 py-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select Doctor</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-white">
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              defaultValue=""
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-checkbox-1"
              className="py-3.5 px-5 ml-2 w-full text-sm font-medium text-white dark:text-white"
            >
              Emergency
            </label>
          </div>

          <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-white">
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              defaultValue=""
              name="bordered-checkbox"
              className="w-4 h-4 text-blue-600 py-3 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-checkbox-1"
              className="py-3.5 px-5 ml-2 w-full text-sm font-medium text-white dark:text-white"
            >
              High Risk
            </label>
          </div>

          <button type="button" class="text-white bg-gradient-to-r border-white border-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center ">Clear All</button>
        
          <button type="button" class="text-white bg-gradient-to-r border-white border-2 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center ">Exit</button>
        </div>
      </div>
    </>
  );
}

export default PatientDetail;
