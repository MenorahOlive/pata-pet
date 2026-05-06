import { PawPrint, Send, Heart, UserRound } from "lucide-react";

const links = [
  { title: "Discover", icon: PawPrint },
  { title: "Messages", icon: Send },
  { title: "Favorites", icon: Heart },
  { title: "Profile", icon: UserRound },
];

const LinkLayout = ({ title, icon: Icon }: { title: string; icon: any }) => {
  return (
    <div className="flex flex-col items-center gap-1 text-black-custom/45">
      <Icon size={18} />
      <span className="text-sm">{title}</span>
    </div>
  );
};

const MenuBar = () => {
  return (
    <div className="w-full bg-white-custom p-5 flex justify-between items-center rounded-t-3xl border-t-2  border-orange-custom/7 z-10 fixed bottom-0 shadow-2xl shadow-orange-custom">
      {links.map((l, index) => (
        <LinkLayout key={index} title={l.title} icon={l.icon} />
      ))}
    </div>
  );
};

export default MenuBar;
