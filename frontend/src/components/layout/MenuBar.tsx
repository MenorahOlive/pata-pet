import { PawPrint, Send, Heart, UserRound } from "lucide-react";

const links = [
  { title: "Discover", icon: PawPrint, href: "/discover" },
  { title: "Messages", icon: Send, href: "/messages" },
  { title: "Favorites", icon: Heart, href: "/messages" },
  { title: "Profile", icon: UserRound, href: "/messages" },
];

const LinkLayout = ({
  title,
  icon: Icon,
  href,
  isActive,
}: {
  title: string;
  icon: any;
  href: string;
  isActive: boolean;
}) => {
  return (
    <a
      className={`flex flex-col items-center gap-1 text-black-custom/45  ${isActive ? "active:bg-orange-custom/45" : "bg-transparent"}`}
      href={href}
    >
      <Icon size={18} />
      <span className="text-sm">{title}</span>
    </a>
  );
};

const MenuBar = () => {
  return (
    <div className="w-full bg-white-custom p-5 flex justify-between items-center rounded-t-3xl border-t-2  border-orange-custom/7 z-10 fixed bottom-0 shadow-2xl shadow-orange-custom">
      {links.map((l, index) => (
        <LinkLayout
          key={index}
          title={l.title}
          icon={l.icon}
          href={l.href}
          isActive={false}
        />
      ))}
    </div>
  );
};

export default MenuBar;
