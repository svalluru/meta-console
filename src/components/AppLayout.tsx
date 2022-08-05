import { Page, PageSection, PageSectionVariants } from "@patternfly/react-core";
import { SidebarLayout } from "./SidebarLayout";

interface IAppLayout {
  children: React.ReactNode;
}
export const mainContentId = "main-content-page-layout";

export function AppLayout({ children }: IAppLayout) {
  return (
    <Page
      sidebar={<SidebarLayout />}
      mainContainerId={mainContentId}
      header={null}
    >
      <PageSection variant={PageSectionVariants.light}>{children}</PageSection>
    </Page>
  );
}
