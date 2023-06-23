import {
  ChartBarIcon,
  CpuChipIcon,
  EnvelopeIcon,
  EyeIcon,
  MapIcon,
  HomeIcon,
  ListBulletIcon,
  // TagIcon,
  UsersIcon,
  // UserGroupIcon,
} from "@heroicons/react/24/solid";

const categories = [
  {
    color: "indigo",
    icon: HomeIcon,
    role: "dashboard",
  },
  {
    color: "fuchsia",
    icon: EyeIcon,
    role: "overview",
  },
  {
    color: "cyan",
    icon: MapIcon,
    role: "map",
  },
  {
    color: "lime",
    icon: UsersIcon,
    role: "cards",
  },
  {
    color: "teal",
    icon: CpuChipIcon,
    role: "racks",
  },
  {
    color: "amber",
    icon: ListBulletIcon,
    role: "history",
  },
  {
    color: "indigo",
    icon: ChartBarIcon,
    role: "statistics",
  },
  {
    color: "green",
    icon: EnvelopeIcon,
    role: "notifications",
  },
];

export default categories;
