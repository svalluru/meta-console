import React, { useMemo, useState } from "react";
import { FormSelect, FormSelectOption } from "@patternfly/react-core";
import { useGetProjectList } from "../hooks/SupportQueries";
import { map } from "lodash";

interface IProps {
  id: string;
  name: string;
  ariaLabel?: string;
}

export const ProjectDropdown = (props: IProps) => {
  const [formSelectValue, setFormSelectValue] = useState("");
  const { data } = useGetProjectList();

  const projectNameList = useMemo(() => {
    return map(data?.items ?? [], (item) => {
      return {
        value: item?.metadata?.name,
        label: item?.metadata?.name,
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
      {map(projectNameList, (option, index) => (
        <FormSelectOption
          key={index}
          value={option.value}
          label={option.label}
        />
      ))}
    </FormSelect>
  );
};
