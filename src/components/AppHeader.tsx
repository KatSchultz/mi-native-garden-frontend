import { Link } from "react-router-dom";
import { Header, Title } from "@mantine/core";
import AccountMenu from "./AccountMenu";

export default function AppHeader() {
  return (
    <Header height={50} p="lg" className=" bg-amber-50">
      <div className="flex justify-between items-center h-full">
        <div className="flex">
          <Link to="/" className="no-underline text-green-600">
            <Title order={2}>Mi Native Garden</Title>
          </Link>
          <Link to="/search">
            <Title order={3} className="text-green-600 pl-4 items-center">
              Search Plants
            </Title>
          </Link>
        </div>

        <AccountMenu />
      </div>
    </Header>
  );
}
