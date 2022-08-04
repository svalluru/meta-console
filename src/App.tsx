import { useState } from "react";
// import logo from "./logo.svg";
import "@patternfly/react-core/dist/styles/base.css";
import "./styles/App.scss";
// import "./App.css";
import {
  Nav,
  NavItem,
  NavList,
  Page,
  // PageSection,
  PageSidebar,
} from "@patternfly/react-core";

function App() {
  const [activeItem, setActiveItem] = useState(0);
  const onChangeItem = (result: any) => {
    setActiveItem(result.itemId);
  };
  const PageNav = (
    <Nav onSelect={onChangeItem} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
          System panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#network">
          Network services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );
  const _sidebar = <PageSidebar nav={PageNav} isNavOpen={true} />;

  return (
    <Page
      header={null}
      sidebar={_sidebar}
      isManagedSidebar
      mainContainerId={"main-content-page-layout-default-nav"}
      // onPageResize={onPageResize}
    >
      {/* {hasPageTemplateTitle && PageTemplateTitle} */}
      <p>Test content</p>
    </Page>
  );
}

export default App;
