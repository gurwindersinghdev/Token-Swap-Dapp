import Swap from "./Swap/page";
import Tokens from "./components/Tokens";

export default function Page() {
  return (
    <div className="page">
      <div className="container">
        <div className="center">
          <Swap />
          <Tokens />
        </div>
      </div>
    </div>
  );
}
