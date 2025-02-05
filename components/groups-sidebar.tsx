import Image from "next/image";
import Link from "next/link";
import { Users, Lock } from "lucide-react";

const groups = [
  {
    name: "Health Professionals Network",
    type: "Public Group",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    members: 234,
  },
  {
    name: "Community Care",
    type: "Public Group",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    members: 156,
  },
  {
    name: "Workplace Wellness Club",
    type: "Public Group",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    members: 189,
  },
  {
    name: "Stress Maintenance Zone",
    type: "Public Group",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    members: 145,
  },
  {
    name: "Sleep Well Society",
    type: "Public Group",
    image:
      "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737075754/samples/breakfast.jpg",
    members: 167,
  },
];

export default function GroupsSidebar() {
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold">Popular Groups</h2>
        <Link href="/login" className="text-sm text-blue-500 hover:underline">
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {groups.map((group, i) => (
          <div key={i} className="group">
            <div className="flex gap-3 p-2 rounded-lg group-hover:bg-gray-50">
              <div className="relative w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                <Image
                  src={group.image || "/placeholder.svg"}
                  alt={group.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm truncate">{group.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{group.type}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {group.members}
                  </span>
                  <Link
                    href="/register"
                    className="flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    <Lock className="w-3 h-3" />
                    Join Group
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <Link
          href="/login"
          className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-teal-700"
        >
          Sign in to Join Groups
        </Link>
      </div>
    </div>
  );
}
