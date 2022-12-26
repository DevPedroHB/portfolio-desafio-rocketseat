import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FooterBody } from "./styles";

export default function Footer() {
  return (
    <FooterBody>
      <span>
        Feito com <FaHeart /> por{" "}
        <Link href="https://github.com/DevPedroHB" target="_blank">
          PedroHB
        </Link>
      </span>
    </FooterBody>
  );
}
