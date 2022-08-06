import axios from "axios";
import { IConsole, IProjects } from "../models/apiModel";

export const getProjectLists = async (): Promise<IProjects> => {
  const response = await axios.get(
    "https://api.nokia.ocp-poc-demo.com:6443/apis/project.openshift.io/v1/projects",
    {
      headers: {
        Authorization: `Bearer sha256~SxWaccuBOJRVIPjqO5hUcB6n8koD1X0qOs9VBBBHQ-g`,
      },
    }
  );
  return response.data;
};

export const getConsoleListByProjectName = async (
  projectName: string
): Promise<IConsole> => {
  const response = await axios.get(
    `https://api.nokia.ocp-poc-demo.com:6443/apis/route.openshift.io/v1/namespaces/${projectName}/routes?labelSelector=type`,
    {
      headers: {
        Authorization: `Bearer sha256~SxWaccuBOJRVIPjqO5hUcB6n8koD1X0qOs9VBBBHQ-g`,
      },
    }
  );
  return response.data;
};
