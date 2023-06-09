/**
 * @module components/Header
 *
 *
 * @author montier.elliott@gmail.com
 */
import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import HeaderItem from "./HeaderItem";
import HuluWhite from "../public/hulu-white.webp";

/**
 * Header Component
 *
 * 
 * @component
 * @returns {JSX.Element}
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
        priority={true}
        className="object-contain"
        src={HuluWhite}
      />
    </header>
  );
};

/** exporting */
export default Header;
