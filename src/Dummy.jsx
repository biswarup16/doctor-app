import { useEffect, useState, useRef, Fragment } from "react";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Textinput, Submit } from "@/components";
import { extract, token_set_ratio } from "fuzzball";

import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = ["Guwahati", "Barpeta", "Patshala", "Nalbari", "Lal Ganesh"];

function App() {
  const [query, setQuery] = useState("");
  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      mrd: "",
      name: "",
    },
  });
  console.log(query);
  // const filteredPeople =
  //   query === ""
  //     ? people
  //     : people.filter((person) => {
  //         return person.toLowerCase().includes(query.toLowerCase());
  //       });

  const filterPeople = (query) => {
    const list = extract(query, people, {'scorer': token_set_ratio})
    const sorted = list.map((item) => item[0])
    return sorted;
  }

  const filteredPeople =
    query === "" ? people : filterPeople(query)

  const onSubmit = (values) => {
    console.log(values);
    setError("mrd", {
      type: "manual",
      message: "hahahaa",
    });
  };

  return (
    <div className="mx-auto flex h-screen max-w-lg flex-col space-y-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textinput label="name">
          <input
            type="text"
            {...register("name")}
          />
        </Textinput>
        <Controller
          control={control}
          name="mrd"
          rules={{ required: "MRD is required" }}
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
          }) => (
            <>
              <Combobox
                value={value}
                onChange={onChange}
              >
                <Combobox.Input
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Options>
                  {filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person}
                      value={person}
                    >
                      {person}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </Combobox>
              {error && <p>{error.message}</p>}
            </>
          )}
        />
        <Submit isSubmitting={isSubmitting}>Submit</Submit>
      </form>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
