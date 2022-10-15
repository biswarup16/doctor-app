import React from "react";

function Complain() {
  return (
    <>
      <div className="bg-white rounded-lg border-4 border-gray-200 shadow-lg dark:bg-orange-400 dark:border-orange-400 p-5  mt-5">
        <h3 className="mb-3 text-xl tracking-wider text-white">
          Complain
        </h3>
        <div className="flex justify-between items-center">
          <input
            type="text"
            className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
            name=""
            placeholder="Complain"
            id=""
          />

          <select
            id="small"
            class="block px-5 py-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:orange-blue-500  dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected>Complain</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <select
            id="small"
            class="block px-5 py-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:orange-blue-500  dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected>Eye</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <select
            id="small"
            class="block px-5 py-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:orange-blue-500  dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected>Duration</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <select
            id="small"
            class="block px-5 py-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:orange-blue-500  dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-orange-500 dark:focus:border-orange-500"
          >
            <option selected>Period</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="flex justify-start space-x-5 items-center mt-3">
          <input
            type="text"
            className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
            name=""
            placeholder="Remarks"
            id=""
          />
          <button
            type="button"
            class="text-white bg-gradient-to-r border-white border-2 from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center "
          >
            Add
          </button>

          <button
            type="button"
            class="text-white bg-gradient-to-r border-white border-2 from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center "
          >
            +
          </button>

          <button
            type="button"
            class="text-white bg-gradient-to-r border-white border-2 from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center "
          >
            Clear
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-r border-white border-2 from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center "
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default Complain;
