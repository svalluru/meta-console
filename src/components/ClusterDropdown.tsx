import React, { useState } from "react";
import { FormSelect, FormSelectOption } from "@patternfly/react-core";

interface IProps {
  id: string;
  name: string;
  ariaLabel?: string;
}

export const ClusterDropdown = (props: IProps) => {
  const [formSelectValue, setFormSelectValue] = useState("dev");

  const onChange = (value: string) => {
    setFormSelectValue(value);
  };

  const options = [
    { value: "dev", label: "Dev", disabled: false },
    { value: "qa", label: "QA", disabled: false },
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
