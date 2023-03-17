/**
 * @module components/HeaderItem
 *
 *
 * @author montier.elliott@gmail.com
 */
import React from "react";

/**
 * Props
 *
 *
 * @typedef {Object} Props
 * @property {React.FunctionComponent<React.SVGProps<SVGSVGElement>>} Icon
 * @property {String} title
 */
interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
}

/**
 * HeaderItem component
 *
 * 
 * @component
 * @param {Props} props
 * @returns {JSX.Element}
 */
const HeaderItem: React.FC<Props> = ({ Icon, title }: Props): JSX.Element => {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      cursor-pointer
      group
      w-12
      sm:w-20
      hover:text-white"
    >
      <Icon
        className="
        h-8
        mb-1
        group-hover:animate-bounce"
      />
      <p
        className="
        opacity-0
        group-hover:opacity-100
        tracking-widest"
      >
        {title}
      </p>
    </div>
  );
};

/** exporting */
export default HeaderItem;
