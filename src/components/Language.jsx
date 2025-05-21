import React from "react";
import Select from "react-select"; // <-- Make sure this package is installed

const Language = () => {
  const countriesWithFlag = [
    {
      name: "USA",
      flag: "https://flagcdn.com/us.svg",
      value: "us",
      language: "en",
    },
    {
      name: "Bangladesh",
      flag: "https://flagcdn.com/bd.svg",
      value: "bd",
      language: "bn", // corrected language code
    },
  ];

  const options = countriesWithFlag.map((country) => ({
    value: country.value,
    language: country.language,
    label: (
      <div className="flex items-center">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-4 h-4 mr-2"
        />
        <span>{country.name}</span>
      </div>
    ),
  }));

  return (
    <div className="py-[100px]">
      <Select
        options={options}
        onChange={(selected) => console.log("Selected:", selected.value)}
        className="w-[200px]"
        classNamePrefix="select"
      />

      <div>
        <h1>This is my country language</h1>
      </div>
    </div>
  );
};

export default Language;
