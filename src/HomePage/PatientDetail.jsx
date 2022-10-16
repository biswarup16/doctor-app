import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BookData from "./Data.json";

function PatientDetail() {

  const [filteredData, setFilteredData] = useState([]);

  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = BookData.filter((value) => {
      return value.mrd_no.includes(searchWord);
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      console.log(filteredData)
    }
  };


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      patient_name:"",
      age:"",
      gender:"",
      select_doctor:"",
      emergency:false,
      high_risk:false
    },
  });


  function onMySubmit(values) {
    alert(JSON.stringify(values));
    console.log(isSubmitting,isSubmitSuccessful);
  }
  function clearForm(values) {
    reset()
  }

  return (
    <>
      <div className=" bg-white rounded-lg border-4 border-gray-200 shadow-lg dark:bg-blue-600 dark:border-blue-500 p-5 ">
        <h3 className="mb-3 text-xl tracking-wider text-white">
          Patient Details
        </h3>
        <form onSubmit={handleSubmit(onMySubmit)}>
          <div className="flex justify-between">
            <div>
              <input
                type="number"
                className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
                {...register("name", {
                  required: "MDN Number is required",
                  maxLength: 10 
                })}
                placeholder="MDN Number"
                id=""
                onChange={handleFilter}
                value={wordEntered}
              />
              {filteredData.length != 0 && (
                <div className="dataResult bg-white px-3 py-2 border-2 border-gray-400">
                  {filteredData.slice(0, 15).map((value, key) => {
                    return (
                      <>
                      <a className="dataItem " target="_blank" >
                        {filteredData.length>0 && <p  id={value.id}>{value.mrd_no} </p> }
                      </a>
                      
                      </>
                    );
                  })}
                </div>
              )}
              {errors?.name && (
                <p className="mt-2 text-red-500">{errors?.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
                {...register("patient_name", {
                  required: "Patient name is Required",
                  maxLength: 32 
                })}
                value={filteredData.length >0 ? filteredData[0].patient_name : "" }
                
                // {...filteredData[0] && {value={filteredData[0].patient_name}}}
                placeholder="Patient Name"
                id=""
              />
              {errors?.patient_name && (
                <p className="mt-2 text-red-500">{errors?.patient_name.message}</p>
              )}
            </div>

            <div>
            <input
              type="text"
              className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
              {...register("age", {
                required: "Patient Age is Required",
                maxLength: 3
              })}
              placeholder="Age"
              value={filteredData.length >0 ? filteredData[0].age : "" }

              id=""
            />
            {errors?.age && (
                <p className="mt-2 text-red-500">{errors?.age.message}</p>
              )}
            </div>

            <div>
            <input
              type="text"
              className="py-3 px-5 border-2 border-gray-200 rounded-lg shadow-md focus:ring-violet-300"
              {...register("gender", {
                required: "Patient Gender is Required",
              })}
              value={filteredData.length >0 ? filteredData[0].gender : "" }

              placeholder="Gender"
              id=""
            />
            {errors?.gender && (
                <p className="mt-2 text-red-500">{errors?.gender.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-items-start space-x-5 mt-3">
            <div>
            <select
              {...register("select_doctor", {
                required: "Selection of Doctor is Required",
              })}
              placeholder="Select Doctor"
              id=""
              className="block px-5 py-3.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="" disabled hidden>Select Doctor</option>
              {filteredData.length>0 && <option value="US">{filteredData[0].doctor}</option>}
              {/* <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option> */}
            </select>
            {errors?.select_doctor && (
                <p className="mt-2 text-red-500">{errors?.select_doctor.message}</p>
              )}
            </div>

            <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-white">
              <input
                {...register("emergency")}
                id="checkbox1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox1"
                className="py-3.5 px-5 ml-2 w-full text-sm font-medium text-white dark:text-white"
              >
                Emergency
              </label>
            </div>

            <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-white">
              <input
                {...register("high_risk")}
                id="checkbox2"
                type="checkbox"
                className="w-4 h-4 text-blue-600 py-3 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checkbox2"
                className="py-3.5 px-5 ml-2 w-full text-sm font-medium text-white dark:text-white"
              >
                High Risk
              </label>
            </div>

            <button
              type="button"
              onClick={clearForm}
              className="text-white bg-gradient-to-r border-white border-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center "
            >
              Clear All
            </button>

            <button
              type="submit"
              className="text-white bg-gradient-to-r border-white border-2 from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-3.5 text-center "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PatientDetail;
