/**
 * @module components/Header
 *
 *
 * @author montier.elliott@gmail.com
 */

import Image from "next/Image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import HeaderItem from "./HeaderItem";

/**
 * The main header component for the app.
 * @returns The header component.
 */
const Header = (): JSX.Element => {
  return (
    <header
      className="
       flex
       flex-col
       sm:flex-row
       m-5
       justify-between
       items-center
       h-auto"
    >
      <div
        className="
         flex
         flex-grow
         justify-evenly
         max-w-2xl"
      >
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        alt="Hulu logo"
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};

export default Header;
