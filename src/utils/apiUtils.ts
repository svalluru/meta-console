import axios from "axios";
import { IConsole, IProjects } from "../models/apiModel";

const getAPIConfig = (options = {}) => {
  return {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
    },
    ...options,
  };
};

export const getProjectLists = async (): Promise<IProjects> => {
  const response = await axios.get(
    "https://api.nokia.ocp-poc-demo.com:6443/apis/project.openshift.io/v1/projects",
    getAPIConfig()
  );
  return response.data;
};

export const getConsoleListByProjectName = async (
  projectName: string
): Promise<IConsole> => {
  const response = await axios.get(
    `https://api.nokia.ocp-poc-demo.com:6443/apis/route.openshift.io/v1/namespaces/${projectName}/routes?labelSelector=type`,
    getAPIConfig()
  );
  return response.data;
};
