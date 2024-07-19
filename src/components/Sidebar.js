import SideBarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-container__brand">Learning</div>
      <SideBarList />
    </div>
  );
};
export default Sidebar;