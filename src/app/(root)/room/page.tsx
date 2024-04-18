import { Room } from "../../Room/Room";
import { CollaborativeApp } from "../../Room/CollaborativeApp";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";

export default function Page() {
  return (
    <Room>
        <CollaborativeEditor />
    </Room>
  );
}