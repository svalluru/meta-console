import React, { useState } from "react";
import { FormSelect, FormSelectOption } from "@patternfly/react-core";

interface IProps {
  id: string;
  name: string;
  ariaLabel?: string;
}

export const ProjectDropdown = (props: IProps) => {
  const [formSelectValue, setFormSelectValue] = useState("project1");

  const onChange = (value: string) => {
    setFormSelectValue(value);
  };

  const options = [
    { value: "project1", label: "Project 1", disabled: false },
    { value: "project2", label: "Project 2", disabled: false },
  ];

  return (
    <FormSelect
      value={formSelectValue}
      onChange={onChange}
      aria-label={props.ariaLabel || "FormSelect select"}
      id={props.id}
      name={props.name}
    >
      {options.map((option, index) => (
        <FormSelectOption
          isDisabled={option.disabled}
          key={index}
          value={option.value}
          label={option.label}
        />
      ))}
    </FormSelect>
  );
};
