import type { NextPage } from "next";

interface UserInfo {
  name: string;
}

interface HeaderProps {}
interface MainNavigationProps {}
interface UserInfoProps {
  userInfo: UserInfo;
}

const Header = (props: HeaderProps & UserInfoProps) => (
  <header>
    <MainNavigation {...props} />
  </header>
);
const MainNavigation = (props: MainNavigationProps & UserInfoProps) => (
  <nav>
    <UserInfo {...props} />
  </nav>
);
const UserInfo = (props: UserInfoProps) => (
  <div>Current User: {props.userInfo.name}</div>
);

const PropDrillingPage: NextPage = () => (
  <main>
    <Header userInfo={{ name: "Horace Silver" }} />
  </main>
);

export default PropDrillingPage;
