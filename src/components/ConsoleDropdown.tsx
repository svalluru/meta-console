import React, { useMemo, useState } from "react";
import { FormSelect, FormSelectOption } from "@patternfly/react-core";
import { useGetConsoleByProjectName } from "../hooks/SupportQueries";
import { map } from "lodash";

interface IProps {
  id: string;
  name: string;
  ariaLabel?: string;
}

export const ConsoleDropdown = (props: IProps) => {
  const [formSelectValue, setFormSelectValue] = useState("");
  const { data } = useGetConsoleByProjectName("dm-pam");
  console.log(data);

  const consoleURLList = useMemo(() => {
    return map(data?.items ?? [], (item) => {
      return {
        value: item?.spec?.host,
        label: item?.spec?.host,
      };
    });
  }, [data?.items]);

  const onChange = (value: string) => {
    setFormSelectValue(value);
  };

  return (
    <FormSelect
      value={formSelectValue}
      onChange={onChange}
      aria-label={props.ariaLabel || "FormSelect select"}
      id={props.id}
      name={props.name}
    >
      {map(consoleURLList, (option, index) => (
        <FormSelectOption
          key={index}
          value={option.value}
          label={option.label}
        />
      ))}
    </FormSelect>
  );
};
