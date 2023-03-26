import SearchInput, { searchInputlinks } from "~/components/input/SearchInput";
import globalStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: globalStyles }, ...searchInputlinks()];
}

export default function Index() {
  return (
    <div>
      <h1>LoLStats</h1>
      <SearchInput />
    </div>
  );
}
