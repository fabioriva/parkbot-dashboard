import {
  ChartBarIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  EnvelopeIcon,
  EyeIcon,
  GlobeAltIcon,
  MapIcon,
  HomeIcon,
  ListBulletIcon,
  TagIcon,
} from "@heroicons/react/24/solid";

const categories = [
  {
    icon: HomeIcon,
    role: "dashboard",
  },
  {
    icon: EyeIcon,
    role: "overview",
  },
  {
    icon: MapIcon,
    role: "map",
  },
  {
    icon: TagIcon,
    role: "cards",
  },
  {
    icon: GlobeAltIcon,
    role: "pn",
  },
  {
    icon: CpuChipIcon,
    role: "racks",
  },
  {
    icon: ListBulletIcon,
    role: "history",
  },
  {
    icon: ChartBarIcon,
    role: "statistics",
  },
  {
    icon: EnvelopeIcon,
    role: "notifications",
  },
  {
    icon: Cog6ToothIcon,
    role: "settings",
  },
];

export default categories;
