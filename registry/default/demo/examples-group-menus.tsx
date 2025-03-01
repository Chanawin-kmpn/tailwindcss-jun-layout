import { Home, Users, FileText, Settings } from "lucide-react";

export default function ExamplesGroupMenus() {
  return (
    <div className="w-full border-4 rounded bg-background max-w-[500px]">
      <div className="jun-layout jun-layout-h-[300px] jun-layout-standalone">
        <header className="jun-header">
          <div className="p-3">
            <div className="h-4 w-32 rounded bg-muted" />
          </div>
        </header>
        <aside className="jun-edgeSidebar">
          <div className="jun-edgeContent bg-sidebar">
            <div className="jun-sidebarContainer">
              <div className="jun-sidebarGroup">
                <div className="jun-sidebarGroupLabel">Main</div>
                <ul className="jun-sidebarMenu">
                  <li className="jun-sidebarMenuItem">
                    <button className="jun-sidebarMenuButton">
                      <Home className="jun-sidebarIcon jun-sidebarIcon-shrink-size-5" />
                      <span className="jun-sidebarText">Home</span>
                    </button>
                  </li>
                  <li className="jun-sidebarMenuItem">
                    <button className="jun-sidebarMenuButton">
                      <Users className="jun-sidebarIcon jun-sidebarIcon-shrink-size-5" />
                      <span className="jun-sidebarText">Users</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="jun-sidebarGroup">
                <div className="jun-sidebarGroupLabel">System</div>
                <ul className="jun-sidebarMenu">
                  <li className="jun-sidebarMenuItem">
                    <button className="jun-sidebarMenuButton">
                      <FileText className="jun-sidebarIcon jun-sidebarIcon-shrink-size-5" />
                      <span className="jun-sidebarText">Documents</span>
                    </button>
                  </li>
                  <li className="jun-sidebarMenuItem">
                    <button className="jun-sidebarMenuButton">
                      <Settings className="jun-sidebarIcon jun-sidebarIcon-shrink-size-5" />
                      <span className="jun-sidebarText">Settings</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <main className="jun-content">
          <div className="p-4">
            <div className="h-4 w-48 rounded bg-muted" />
          </div>
        </main>
      </div>
    </div>
  );
}
