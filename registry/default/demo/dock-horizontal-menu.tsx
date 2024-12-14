import { Home, User, Settings, Bell } from "lucide-react";

export default function DockHorizontalMenuDemo() {
  return (
    <div className="w-full max-w-[500px] border-4 rounded bg-background">
      <div className="jun-layout jun-layout-h-[240px] jun-layout-standalone overflow-hidden">
        <nav className="jun-dock jun-dock-float">
          <ul className="jun-dockMenu">
            <li className="jun-dockMenuItem">
              <button className="jun-dockMenuButton jun-dockMenuButton-row">
                <Home className="size-5" />
                <span>Home</span>
              </button>
            </li>
            <li className="jun-dockMenuItem">
              <button className="jun-dockMenuButton jun-dockMenuButton-row">
                <Bell className="size-5" />
                <span>Notifications</span>
              </button>
            </li>
            <li className="jun-dockMenuItem">
              <button className="jun-dockMenuButton jun-dockMenuButton-row">
                <User className="size-5" />
                <span>Profile</span>
              </button>
            </li>
            <li className="jun-dockMenuItem">
              <button className="jun-dockMenuButton jun-dockMenuButton-row">
                <Settings className="size-5" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}